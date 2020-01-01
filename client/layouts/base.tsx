// Import components
import Nav from '../components/nav'
import Header from '../components/header'
import Drawer from '../components/drawer'
import AddPostForm from '../components/forms/AddPostForm'

//import icons
import {
  faPlus, faArrowLeft, faHome, faSearch, faCalendarAlt, faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  library
} from '@fortawesome/fontawesome-svg-core'

import { useState, Component } from 'react'

library.add(faPlus, faArrowLeft, faHome, faSearch, faCalendarAlt, faUser)

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

    static async getInitialProps(ctx) {
      let pageProps = {}

      try {
        if (Page.getInitialProps) {
          pageProps = await Page.getInitialProps(ctx)
        } 
      } catch (err) {
        throw new Error(`Cannot invoke getInitalProps of ${ Page }`)
      }

      return pageProps
    }

    render() {
      return (
        <div>
            <Header />
            <main className="container">
                <Page { ...this.props } />
            </main>
            <Nav />
            {this.state.showDrawer ? 
              (<Drawer visible={ this.state.showDrawer }>
                <AddPostForm  />
              </Drawer>) :  null
            }
        </div>
      )
    }
  }
}

export default BaseLayout
