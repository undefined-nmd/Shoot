import { NextPage } from 'next'

import { useState } from 'react'
import Router from 'next/router'

// Import layout
import AuthLayout from '../layouts/auth'

// Import components
import { Button } from '../components/buttons'
import Logo from '../components/logo'
import TextInput from '../components/inputs/textInput'

// Import service
import { AuthService } from '../services'

import '../sass/main.scss'

import { validateLoginForm } from '../utils/validation'

const LoginPage: NextPage = () => {
    const [inputs, setInputs] = useState<any>({})
    const [errors, setErrors] = useState<any>({})

    const handleSubmit = (e) => {
        e.preventDefault()
        AuthService.login(inputs).then(() => {
            Router.push('/')  
        }).catch(() => setFormErrors())
    }
    
    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const setFormErrors = () => {
        const { errors, isValid } = validateLoginForm(inputs)
        
        if(!isValid) {
            setErrors(errors)
        }

        return isValid
    }
    
    return (
        <section className="d-flex-center">
            <form className="auth__form" onSubmit={handleSubmit}>
                <div className="auth__logo">
                    <Logo isColored />
                </div>
                <TextInput 
                    icon="envelope"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    error={errors.email}
                />
                <TextInput 
                    icon="lock"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    error={errors.password}
                />
                <Button label="Log In" />
            </form>
        </section>
    )
}

export default AuthLayout(LoginPage)
