import { SearchInput } from './inputs'
import { useState, useEffect } from 'react'
import Icon from './icon'
import Logo from './logo'

const Header = ({ onToggleFilter }) => {


    useEffect(() => {

        //remove logo when click on search input
        let searchInput = document.getElementsByClassName("header__search")[0];
        let logo = document.getElementById("header-logo");

        searchInput.addEventListener('click', (e) => {
            e.preventDefault();
            if (logo !== null) {
                logo.remove()
            }
        })


    }, [])

    return (
        <section className="header d-flex">
            <div id="header-logo" className="header__logo d-flex-center">
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
}

export default Header