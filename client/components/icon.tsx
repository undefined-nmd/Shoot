import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faFilter, 
    faSearch, 
    faArrowUp, 
    faComment, 
    faLock, 
    faEnvelope,
    faPlus, 
    faArrowLeft, 
    faHome, 
    faCalendarAlt, 
    faUser, 
    faTimes, 
    faPaperPlane, 
    faBolt
} from '@fortawesome/free-solid-svg-icons'
library.add(faFilter, faSearch, faArrowUp, faComment, faLock, faEnvelope, faPlus, faArrowLeft, faHome, faCalendarAlt, faUser, faTimes, faPaperPlane, faBolt)

const Icon = ({ name, ...props }) => (
    <FontAwesomeIcon { ...props } icon={ name } />
)

export default Icon