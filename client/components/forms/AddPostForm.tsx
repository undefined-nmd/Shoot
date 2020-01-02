import { useState, useEffect } from 'react'
import { TextInput, SelectInput, TextArea, TagInput } from "../inputs"
import Button from "../buttons/button"

import { RequestService } from '../../services'

const AddRequestForm = () => {
    const [options, setOptions] = useState([])
    // Temporary hardcoded user ID
    const [currentUser, setCurrentUser] = useState('5e0a5c0fb2a65d540c6f7998')
    const [inputs, setInputs] = useState({})

    useEffect(() => {
        setOptions([...options, 'Web Development II', 'Multimedia', 'Mobile Development I'])
        setInputs({...inputs, student_id: currentUser})
    }, [])
    
    const selectedTags = (tags: String[]) => console.log(tags)

    const handleSubmit = (e) => {
        e.preventDefault() 
        
        const request = {
            message: 'Help mij CORS',
            student_id: '5e0a5c0fb2a65d540c6f7998',
            subject_id: '5e0a5e2cb2a65d540c6f79a6'
        }   

        RequestService.createRequest(JSON.stringify(request))
        RequestService.createRequest(request)
    }
    
    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <TextArea label="Message" name="message" rows={5} onChange={handleInputChange}/>
            <SelectInput placeholder="Choose subject" name="subject" options={options} onChange={handleInputChange}/>
            <TagInput name="tags" onChange={handleInputChange} selectedTags={selectedTags}/>
            <Button label="Add Question" />
        </form>
    )
}

export default AddRequestForm