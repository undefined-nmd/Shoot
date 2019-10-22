import { SearchInput } from './inputs'
import Icon from './icon'

const Header: React.FC = () => (
    <section className="header d-flex">
        <div className="header__logo d-flex-center">
            <img src="./logo.svg" alt="Logo" />
        </div>
        <div className="header__search">
            <SearchInput />
        </div>
        <div className="header__filter">
            <Icon name="filter" />
        </div>
    </section>
)

export default Header