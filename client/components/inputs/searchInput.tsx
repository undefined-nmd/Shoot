import Icon from '../icon'
import { useState, useEffect } from 'react'

const SearchInput = () => {

    const [searchTerm, setSearchTerm] = useState()

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        return location.href = 'http://localhost:3000/result?searchTerm=' + searchTerm;
    }

    return (
        <div className="form-control search-control">
            <input type="text" placeholder="Search" onChange={e => handleOnChange(e)} />
            <div className="input__icon">
                <div onClick={e => handleSearch(e)} className="input__icon--search">
                    <Icon name="search" />
                </div>
            </div>
        </div>
    )
}

export default SearchInput