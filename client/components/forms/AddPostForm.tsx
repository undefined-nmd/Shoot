import { useState, useEffect } from 'react'
import { TextInput, SelectInput, TextArea, TagInput } from "../inputs"
import Button from "../buttons/button"

import { RequestService, SubjectService, VoteService, AuthService } from '../../services'
import { _axiosInstance } from '../../services/api.service';
import { validateRequestForm } from '../../utils/validation';

const AddRequestForm = ({ user }) => {
    const [options, setOptions] = useState([])
    const [currentUser, setCurrentUser] = useState(user.id)
    const [inputs, setInputs] = useState<any>({})
    const [errors, setErrors] = useState<any>({})

    useEffect(() => {
        SubjectService.getSubjects().then((data) => {
            setOptions(data)
        })
        setInputs({ ...inputs, student_id: currentUser })
    }, [])

    const selectedTags = (tags: string[]) => console.log(tags)

    const handleSubmit = (e) => {
        e.preventDefault()
        RequestService.createRequest({
            student_id: inputs.student_id,
            message: inputs.message,
            subject_id: inputs.subject
        }).catch(() => setFormErrors())
    }

    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const setFormErrors = () => {
        const { errors, isValid } = validateRequestForm(inputs)

        if(!isValid) {
            setErrors(errors)
        }

        return isValid
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <TextArea 
                label="Message" 
                name="message" 
                rows={5} 
                onChange={handleInputChange}
                error={errors.message}
            />
            <SelectInput placeholder="Choose subject" name="subject" options={options} onChange={handleInputChange} />
            <TagInput name="tags" onChange={handleInputChange} selectedTags={selectedTags} />
            <Button label="Add Question" />
        </form>
    )
}

export default AddRequestForm