import { useState, useEffect } from 'react'
import { SelectInput } from "../inputs"
import Button from "../buttons/button"
import RadioInput from '../inputs/radioInput';

const FilterForm = () => {
    const [subjects, setSubjects] = useState([])
    const [sortTypes, setSortTypes] = useState([])

    useEffect(() => {
        setSubjects([...subjects, 'Web Development II', 'Multimedia', 'Mobile Development I'])
        setSortTypes([...sortTypes, 'Popular', 'Latest', 'Recent'])
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <SelectInput label="Filter" placeholder="Choose subject" options={subjects}/>
            <SelectInput label="Sort" placeholder="Choose sorting type" options={sortTypes}/>
            <Button label="Apply filters" />
        </form>
    )
}

export default FilterForm