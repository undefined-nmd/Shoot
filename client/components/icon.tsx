import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilter, faSearch, faArrowUp, faComment, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faFilter, faSearch, faArrowUp, faComment, faLock, faEnvelope)

interface IconProps {
    name: any
}

const Icon = ({ name, ...props }) => (
    <FontAwesomeIcon { ...props } icon={ name } />
)

export default Icon