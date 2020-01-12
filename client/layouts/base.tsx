import { Component } from 'react'
import Router from 'next/router'

// Import components
import Nav from '../components/nav'
import Header from '../components/header'
import Drawer from '../components/drawer'
import AddPostForm from '../components/forms/AddPostForm'
import FilterForm from '../components/forms/FilterForm'

// Import services
import { AuthService } from '../services'
import { _axiosInstance, setAuthorizationHeader } from '../services/api.service'
import { parseCookie } from '../utils/helper'

// Import icons
import { faPlus, faArrowLeft, faHome, faSearch, faCalendarAlt, faUser, faTimes, faPaperPlane, faBolt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import '../sass/main.scss'
import { DecodedToken } from '../services/auth.service'

library.add(faPlus, faArrowLeft, faHome, faSearch, faCalendarAlt, faUser, faTimes, faPaperPlane, faBolt)

/*
** High Order Component that passes getInitialProps
*/
const BaseLayout = Page => {
  return class WithUserLayout extends Component<{ cookie: string, user: DecodedToken }, { showDrawer: boolean, isFilter: boolean }> {
    constructor(props) {
      super(props)
      this.state = {
        showDrawer: false,
        isFilter: true
      }
    }

    componentDidMount() {
      AuthService.isAuthenticated() ? setAuthorizationHeader(this.props.cookie) : Router.push('/login')
      console.log(this.props)
    }

    static async getInitialProps(ctx) {
      let pageProps = {}

      const cookies = parseCookie(ctx)
      setAuthorizationHeader(cookies.token)

      const decodedToken = await AuthService.getDecodedToken(cookies.token)

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
        user: decodedToken
      }
    }


    toggleDrawer = () => {
      this.setState({
        showDrawer: !this.state.showDrawer,
      })
    }

    toggleFilterDrawer = () => {
      this.setState({
        showDrawer: !this.state.showDrawer,
        isFilter: true,
      })
    }

    toggleAddRequestDrawer = () => {
      this.setState({
        showDrawer: !this.state.showDrawer,
        isFilter: false,
      })
    }

    renderDrawerContent = () => {

    }

    render() {
      let drawerContent

      if (this.state.isFilter) {
        drawerContent = <FilterForm />
      } else {
        drawerContent = <AddPostForm user={this.props.user} />
      }

      return (
        <div>
          <Header onToggleFilter={this.toggleFilterDrawer} />
          <main className="container container--spacing">
            <Page {...this.props} />
          </main>
          <Nav onToggleDrawer={this.toggleAddRequestDrawer} />
          <Drawer visible={this.state.showDrawer} onToggleDrawer={this.toggleDrawer}>
            {drawerContent}
          </Drawer>
        </div>
      )
    }
  }
}

export default BaseLayout
