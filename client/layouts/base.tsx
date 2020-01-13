import { Component } from 'react'
import { NextPage } from 'next'
import Router from 'next/router'

// Import components
import Nav from '../components/nav'
import Header from '../components/header'
import Drawer from '../components/drawer'
import { AddPostForm } from '../components/forms'
import { FilterForm } from '../components/forms'
import { User } from '../pages/profile'
import { UserContext } from '../components/context'

// Import services
import { AuthService, UserService } from '../services'
import { _axiosInstance, setAuthorizationHeader } from '../services/api.service'
import { DecodedToken } from '../services/auth.service'
import { parseCookie } from '../utils/helper'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../sass/main.scss'

interface BaseLayoutProps {
  cookie: string,
  decodedUser: DecodedToken,
  user: User
}

interface BaseLayoutState {
  showDrawer: boolean,
  isFilter: boolean
}

/*
** High Order Component that passes getInitialProps
*/
const BaseLayout = (Page: any) => {
  return class WithUserLayout extends Component<BaseLayoutProps, BaseLayoutState> {
    constructor(props: BaseLayoutProps) {
      super(props)
      this.state = {
        showDrawer: false,
        isFilter: true
      }
    }

    componentDidMount() {
      AuthService.isAuthenticated() ? setAuthorizationHeader(this.props.cookie) : Router.push('/login')
    }

    static async getInitialProps(ctx: any) {
      let pageProps = {}

      const cookies = parseCookie(ctx)
      setAuthorizationHeader(cookies.token)
      
      const decodedToken = await AuthService.getDecodedToken(cookies.token)
      const user = await UserService.getUserById(decodedToken.id)

      try {
        if (Page.getInitialProps) {
          pageProps = await Page.getInitialProps(ctx)
        }
      } catch (err) {
        console.log(`Couldn't fetch page props from ${Page.getInitialProps}`)
      }
      return {
        ...pageProps,
        cookie: cookies.token,
        user
      }
    }


    toggleDrawer = (): void => {
      this.setState({
        showDrawer: !this.state.showDrawer,
      })
    }

    toggleFilterDrawer = (): void => {
      this.setState({
        showDrawer: !this.state.showDrawer,
        isFilter: true,
      })
    }

    toggleAddRequestDrawer = (): void => {
      this.setState({
        showDrawer: !this.state.showDrawer,
        isFilter: false,
      })
    }

    render() {
      return (
        <UserContext.Provider value={this.props.user}>
          <Header onToggleFilter={this.toggleFilterDrawer} />
          <main className="container container--spacing">
            <Page {...this.props} />
          </main>
          <Nav onToggleDrawer={this.toggleAddRequestDrawer} />
          <Drawer visible={this.state.showDrawer} onToggleDrawer={this.toggleDrawer}>
            {this.state.isFilter ? <FilterForm /> : <AddPostForm user={this.props.user} />}
          </Drawer>
        </UserContext.Provider>
      )
    }
  }
}

export default BaseLayout
