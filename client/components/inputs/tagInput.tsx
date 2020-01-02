import { useState, ChangeEvent } from 'react'

import Tag from "../tag";

interface TagInputProps {
    selectedTags: any,
    name: string,
    onChange(event: ChangeEvent<HTMLInputElement>): void
}

const TagInput: React.FC<TagInputProps> = (props) => {
    const [tags, setTags] = useState([])

    const addTags = (e) => {
        if (e.key === "Enter" && e.target.value !== "") {
            setTags([...tags, e.target.value])
            props.selectedTags([...tags, e.target.value])
            e.target.value = ""
        }
    }

    const removeTags = (index) => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)])
    }

    return (
        <div className="form-group">
            <label htmlFor="tag" className="form-label">Tags</label>
            <div className="form-control tag-control d-flex">
                <ul className="tags">
                    {tags.map((tag, index) => (
                        <li key={ index }>
                            <Tag name={ tag } removeHandler={() => removeTags(index)} />
                        </li>
                    ))}
                </ul>
                <input 
                    type="text"
                    id={props.name}
                    placeholder="Press enter to add a tag" 
                    onKeyUp={(event) => addTags(event)}
                    onChange={props.onChange}
                    {...props}
                />
            </div>
        </div>
    )
}

export default TagInput