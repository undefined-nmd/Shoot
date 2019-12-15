import { useState, useEffect } from 'react'
import { TextInput, SelectInput, TextArea } from "../inputs"
import Button from "../buttons/button"

const AddPostForm = () => {
    const [options, setOptions] = useState([])

    useEffect(() => {
        setOptions([...options, 'Web Development II', 'Multimedia', 'Mobile Development I'])
    }, [])
    

    return (
        <form className="form-container">
            <TextArea label="Question" rows={5} />
            <SelectInput placeholder="Choose subject" options={options}/>
            <TextInput label="Tags" placeholder="Tags" />
            <Button label="Add Question" />
        </form>
    )
}

export default AddPostForm