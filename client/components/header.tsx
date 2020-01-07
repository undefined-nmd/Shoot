import { SearchInput } from './inputs'
import Icon from './icon'
import Logo from './logo'

const Header = ({ onToggleFilter }) => (
    <section className="header d-flex">
        <div className="header__logo d-flex-center">
            <Logo />
        </div>
        <div className="header__search">
            <SearchInput />
        </div>
        <div className="header__filter" onClick={onToggleFilter}>
            <Icon name="filter" />
        </div>
    </section>
)

export default Header