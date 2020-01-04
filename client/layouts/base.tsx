import { Component } from 'react'
import Router from 'next/router'

// Import components
import Nav from '../components/nav'
import Header from '../components/header'
import Drawer from '../components/drawer'
import AddPostForm from '../components/forms/AddPostForm'

// Import services
import { AuthService } from '../services'

// Import icons
import { faPlus, faArrowLeft, faHome, faSearch, faCalendarAlt, faUser, faTimes } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faPlus, faArrowLeft, faHome, faSearch, faCalendarAlt, faUser, faTimes)

/*
** High Order Component that passes getInitialProps
*/
const BaseLayout = Page => {
  return class WithUserLayout extends Component<{}, { showDrawer: Boolean }> {
    constructor(props) {
      super(props)
      this.state = {
        showDrawer: false
      }
    }

    componentDidMount() {
      if(!AuthService.isAuthenticated()) {
        Router.push('/login')
      }
    }

    static async getInitialProps(ctx) {
      let pageProps = {}

      try {
        if (Page.getInitialProps) {
          pageProps = await Page.getInitialProps(ctx)
        } 
      } catch (err) {
        console.log(err)
      }

      return pageProps
    }

    toggleDrawer = () => {
      this.setState({
        showDrawer: !this.state.showDrawer
      })
    }

    render() {
      return (
        <div>
            <Header />
            <main className="container--spacing">
                <Page { ...this.props } />
            </main>
            <Nav onToggleDrawer={this.toggleDrawer} />
            <Drawer visible={ this.state.showDrawer } onToggleDrawer={this.toggleDrawer}>
              <AddPostForm />
            </Drawer>
        </div>
      )
    }
  }
}

export default BaseLayout
