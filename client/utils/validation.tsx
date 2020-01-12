import Validator from 'validator'
import { isEmpty } from './helper'

interface LoginFormErrors {
    email?: string,
    password?: string
}

interface RequestFormErrors {
    message?: string
}

export const validateLoginForm = (data: LoginFormErrors) => {
    let errors: LoginFormErrors = {}

    data.email = !isEmpty(data.email) ? data.email: ''
    data.password = !isEmpty(data.password) ? data.password : ''
    
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required'
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    }
}

export const validateRequestForm = (data: RequestFormErrors) => {
    let errors: RequestFormErrors = {}

    data.message = !isEmpty(data.message) ? data.message : ''
    
    if (!Validator.isLength(data.message, { min: 10, max: 300 })) {
        errors.message = 'Message must be between 10 and 300 characters'
    }

    if (Validator.isEmpty(data.message)) {
        errors.message = 'Message field is required'
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    }
}