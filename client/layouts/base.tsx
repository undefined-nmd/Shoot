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

const BaseLayout = Page => {
    return () => (
        <div>
            <Header />
            <main className="container">
                <Page />
            </main>
        </div>
    )
  }
  
  export default BaseLayout
