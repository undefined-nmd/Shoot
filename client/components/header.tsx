import { SearchInput } from './inputs'
import Icon from './icon'

const Header: React.FC = () => (
    <section className="header">
        <div className="header__logo">
            <h2>Shoot</h2>
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