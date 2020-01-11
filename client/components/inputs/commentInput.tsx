import Icon from '../icon'
import { useState, useEffect } from 'react'

const CommentInput = () => {

    const [searchTerm, setSearchTerm] = useState()

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        return location.href = 'http://localhost:3000/result?searchTerm=' + searchTerm;
    }

    return (
        <div className="form-control">
            <input type="text" placeholder="Add a comment" onChange={() => console.log('Clicked')} />
            <div className="input__icon">
                <div onClick={() => console.log('Clicked')} className="input__icon--comment">
                    <Icon name="paper-plane" />
                </div>
            </div>
        </div>
    )
}

export default CommentInput