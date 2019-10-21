import { SearchInput } from '../components/inputs';

const Header = () => (
    <section className="header">
        <div className="header__logo">
            <img src="/logo.svg" alt="shoot logo" />
        </div>
        <div className="header__search">
            <SearchInput />
        </div>
        <div className="header__filter">
            <span>Filter</span>
        </div>
    </section>
)

export default Header