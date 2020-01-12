import Icon from '../icon'
import { useState, useEffect } from 'react'

const SearchInput = () => {

    const [searchTerm, setSearchTerm] = useState()


    const handleOnChange = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        return location.href = 'http://localhost:3000/result?searchTerm=' + searchTerm;
    }

    const handleOnFocus = (e) => {
        e.preventDefault()

        let logo = document.getElementById("header-logo");
        if (logo !== null) {
            logo.classList.add("remove")
        }

    }


    const handleOnBlur = (e) => {
        e.preventDefault()

        let logo = document.getElementById("header-logo");
        if (logo !== null) {
            logo.classList.remove("remove")
        }

    }

    return (
        <div className="form-control search-control">
            <input type="text" placeholder="Search" onBlur={e => handleOnBlur(e)} onChange={e => handleOnChange(e)} onFocus={e => handleOnFocus(e)} />
            <div className="input__icon">
                <div onClick={e => handleSearch(e)} className="input__icon--search">
                    <Icon name="search" />
                </div>
            </div>
        </div>
    )
}

export default SearchInput