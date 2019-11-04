import Header from '../components/header'
// Import components
import Nav from '../components/nav'
//import icons
import {
  faPlus, faArrowLeft, faHome, faSearch, faCalendarAlt, faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  library
} from '@fortawesome/fontawesome-svg-core'


library.add(faPlus, faArrowLeft, faHome, faSearch, faCalendarAlt, faUser)

const baseLayout = Page => {
  return () => (
    <main className="container">
      <div className="row">
        <Header />
      </div>
      2222222222222222222
      <Page />
      <Nav />

    </main>
  )
}

export default baseLayout