import { useState, useEffect } from 'react'
import { TextInput, SelectInput, TextArea, TagInput } from "../inputs"
import Button from "../buttons/button"

const AddRequestForm = () => {
    const [options, setOptions] = useState([])

    useEffect(() => {
        setOptions([...options, 'Web Development II', 'Multimedia', 'Mobile Development I'])
    }, [])
    
    const selectedTags = (tags: String[]) => console.log(tags)

    return (
        <div className="form-container">
            <TextArea label="Question" rows={5} />
            <SelectInput placeholder="Choose subject" options={options}/>
            <TagInput selectedTags={selectedTags}/>
            <Button label="Add Question" />
        </div>
    )
}

export default AddRequestForm