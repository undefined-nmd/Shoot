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
import { faPlus, faArrowLeft, faHome, faSearch, faCalendarAlt, faUser, faTimes } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import '../sass/main.scss'

library.add(faPlus, faArrowLeft, faHome, faSearch, faCalendarAlt, faUser, faTimes)

/*
** High Order Component that passes getInitialProps
*/
const BaseLayout = Page => {
  return class WithUserLayout extends Component<{ cookie: string }, { showDrawer: boolean, isFilter: boolean }> {
    constructor(props) {
      super(props)
      this.state = {
        showDrawer: false,
        isFilter: false
      }
    }

    componentDidMount() {
      AuthService.isAuthenticated() ? setAuthorizationHeader(this.props.cookie) : Router.push('/login')
    }

    static async getInitialProps(ctx) {
      let pageProps = {}

      const cookies = parseCookie(ctx)
      setAuthorizationHeader(cookies.token)

      try {
        if (Page.getInitialProps) {
          pageProps = await Page.getInitialProps(ctx)
        }
      } catch (err) {
        console.log(`Couldn't fetch page props from ${Page.getInitialProps}`)
      }

      return {
        ...pageProps,
        cookie: cookies.token
      }
    }

    toggleDrawer = () => {
      this.setState({
        showDrawer: !this.state.showDrawer
      })
    }

    renderDrawerContent = () => {

    }

    render() {
      let drawerContent

      if (this.state.isFilter) {
        drawerContent = <FilterForm />
      } else {
        drawerContent = <AddPostForm />
      }

      return (
        <div>
          <Header onToggleFilter={this.toggleDrawer} />
          <main className="container container--spacing">
            <Page {...this.props} />
          </main>
          <Nav onToggleDrawer={this.toggleDrawer} />
          <Drawer visible={this.state.showDrawer} onToggleDrawer={this.toggleDrawer}>
            {drawerContent}
          </Drawer>
        </div>
      )
    }
  }
}

export default BaseLayout
