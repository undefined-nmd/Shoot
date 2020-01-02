import { useState, useEffect } from 'react'
import { TextInput, SelectInput, TextArea, TagInput } from "../inputs"
import Button from "../buttons/button"

import { RequestService } from '../../services'

const AddRequestForm = () => {
    const [options, setOptions] = useState([])
    // Temporary hardcoded user ID
    const [currentUser, setCurrentUser] = useState('5e0a5c0fb2a65d540c6f7998')
    const [input, setInput] = useState({})

    useEffect(() => {
        setOptions([...options, 'Web Development II', 'Multimedia', 'Mobile Development I'])
    }, [])
    
    const selectedTags = (tags: String[]) => console.log(tags)

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    const handleInputChange = (e) => {
        setInput({
            ...input, 
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <TextArea label="Question" name="question" rows={5} onChange={handleInputChange}/>
            <SelectInput placeholder="Choose subject" name="subject" options={options} onChange={handleInputChange}/>
            <TagInput name="tags" onChange={handleInputChange} selectedTags={selectedTags}/>
            <Button label="Add Question" />
        </form>
    )
}

export default AddRequestForm