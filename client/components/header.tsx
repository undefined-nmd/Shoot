import Link from 'next/link'

import { SearchInput } from './inputs'
import Icon from './icon'
import Logo from './logo'

interface HeaderProps {
    onToggleFilter?(): any
}

const Header = ({ onToggleFilter }: HeaderProps) => {
    return (
        <section className="header d-flex">
            <div id="header-logo" className="header__logo d-flex-center">
                <a href="/">
                    <Logo />
                </a>
            </div>
            <div className="header__search">
                <SearchInput />
            </div>
            <div className="header__filter" onClick={onToggleFilter}>
                <Icon name="filter" />
            </div>
        </section>
    )
}

export default Header