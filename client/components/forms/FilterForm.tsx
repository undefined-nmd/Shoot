import { useState, useEffect } from 'react'
import { SelectInput } from "../inputs"
import Button from "../buttons/button"

const FilterForm = () => {
    const [subjects, setSubjects] = useState([])
    const [sortTypes, setSortTypes] = useState([])

    useEffect(() => {
        setSubjects([...subjects, 'Web Development II', 'Multimedia', 'Mobile Development I'])
        setSortTypes([...sortTypes, 'Popular', 'Latest', 'Recent'])
    }, [])
    
    return (
        <form className="form-container">
            <SelectInput label="Filter" placeholder="Choose subject" options={subjects}/>
            <SelectInput label="Sort" placeholder="Choose sorting type" options={sortTypes}/>
            <Button label="Apply filters" />
        </form>
    )
}

export default FilterForm