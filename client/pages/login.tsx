import { useState } from 'react'
import Router from 'next/router'

// Import layout
import AuthLayout from '../layouts/auth'

// Import components
import Button from '../components/buttons/button'
import Logo from '../components/logo'
import TextInput from '../components/inputs/textInput'

// Import service
import { AuthService } from '../services'

import '../sass/main.scss'


const LoginPage = () => {
    const [inputs, setInputs] = useState<any>({})

    const handleSubmit = (e) => {
        e.preventDefault()
        AuthService.login(inputs).then(res => {
            Router.push('/')  
        })
    }
    
    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.currentTarget.name]: e.currentTarget.value
        })
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
                />
                <TextInput 
                    icon="lock"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                />
                <Button label="Log In" />
            </form>
        </section>
    )
}

export default AuthLayout(LoginPage)
