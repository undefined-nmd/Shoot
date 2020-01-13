import React, { useState } from 'react'

import { CommentInput } from "../inputs"

import { CommentService } from '../../services'

import { User } from '../../pages/profile'

interface CommentFormProps {
    requestId: string,
    user?: User
}

const CommentForm = ({ user, requestId }: CommentFormProps) => {
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        CommentService.createComment({
            student_id: user._id,
            request_id: requestId,
            message
        })

        window.location.reload()
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    return (
        <div className="comment__form">
            <form onSubmit={handleSubmit} className="form-container">
                <CommentInput 
                    value={message}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default CommentForm