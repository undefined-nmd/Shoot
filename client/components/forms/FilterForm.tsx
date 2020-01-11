import { useState, useEffect } from 'react'
import { SelectInput } from "../inputs"
import Button from "../buttons/button"
import RadioInput from '../inputs/radioInput';
import { SubjectService } from '../../services'
import Cookies from 'js-cookie'

const FilterForm = () => {
    const [subjects, setSubjects] = useState([])
    const [sortTypes, setSortTypes] = useState([{ _id: 100006, name: 'Popular' }, { _id: 100005, name: 'Latest' }])
    const [selectedSubject, setSelectedSubject] = useState()
    const [selectedSort, setSelectedSort] = useState()


    useEffect(() => {

        // Cookies.set('SUBJECT', selectedSubject.toString(), { expires: 1 })
        // Cookies.set('SORT', selectedSort.toString(), { expires: 1 })


        SubjectService.getSubjects().then((data) => {
            setSubjects(data)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        return location.href = 'http://localhost:3000/result?subjectId=' + selectedSubject + '&sort=' + selectedSort;
    }

    const onChangeSubject = (e) => {
        setSelectedSubject(e.target.value)
    }

    const onChangeSort = (e) => {
        setSelectedSort(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <SelectInput label="Filter" onChange={(event) => onChangeSubject(event)} placeholder="Choose subject" options={subjects} />
            <SelectInput label="Sort" onChange={(event) => onChangeSort(event)} placeholder="Choose sorting type" options={sortTypes} />
            <Button label="Apply filters" onClick={e => handleSubmit(e)} />
        </form>
    )
}

export default FilterForm