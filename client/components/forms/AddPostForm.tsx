import { useState, useEffect } from 'react'
import { TextInput, SelectInput, TextArea, TagInput } from "../inputs"
import { Button } from "../buttons"
import Toggle from 'react-toggle'
import { RequestService, LiveRequestService, SubjectService, LocationService, VoteService, AuthService } from '../../services'
import { _axiosInstance } from '../../services/api.service'
import { validateRequestForm } from '../../utils/validation'

import "react-toggle/style.css"
import '../../sass/main.scss'
import getDistanceGeo from '../../utils/getDistanceGeo'

const AddRequestForm = ({ user }) => {
    const [options, setOptions] = useState([])
    const [currentUser, setCurrentUser] = useState(user._id)
    const [inputs, setInputs] = useState<any>({})
    const [errors, setErrors] = useState<any>({})
    const [isLive, setIsLive] = useState(false)
    const [locationId, setLocationId] = useState()
    const [locations, setLocations] = useState([])
    const [userPosition, setUserPosition] = useState()
    const geo = navigator.geolocation;

    const onChange = ({ coords }) => {
        setUserPosition({
            latitude: coords.latitude,
            longitude: coords.longitude
        });
    };

    const handleToggle = () => {
        let distance = 999999999999999999999
        let closestLocationId = ''
        locations.map((location, i) => {
            let distanceTwoPoints = getDistanceGeo(userPosition.latitude, userPosition.longitude, location.coordinates.lat, location.coordinates.long, "METER")
            
            if (distance > distanceTwoPoints) {
                distance = distanceTwoPoints
                closestLocationId = location._id
            }
        })
        setLocationId(closestLocationId)
        setIsLive(true)
    }

    useEffect(() => {
        geo.getCurrentPosition(onChange)
        
        LocationService.getLocations().then((data) => {
            setLocations(data)

        })
        SubjectService.getSubjects().then((data) => {
            setOptions(data)
        })

        setInputs({ ...inputs, student_id: currentUser })
    }, [])

    const selectedTags = (tags: string[]) => console.log(tags)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs);
        if (isLive) {
            LiveRequestService.createRequest({
                student_id: inputs.student_id,
                message: inputs.message,
                location: locationId,
                subject_id: inputs.subject
            })
        } else {
            RequestService.createRequest({
                student_id: inputs.student_id,
                message: inputs.message,
                subject_id: inputs.subject
            }).catch(err => console.log(err))
        }
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

            <label htmlFor="isLive" className="form-label">Live</label>
            <Toggle
                id='isLive'
                defaultChecked={isLive}
                aria-labelledby='is-live'
                onChange={handleToggle} />
            <Button label="Add Question" />
        </form>
    )
}

export default AddRequestForm