import React, { useState } from 'react'

import { CommentInput } from "../inputs"

import { CommentService } from '../../services'

import { DecodedToken } from '../../services/auth.service'

interface CommentFormProps {
    requestId: string,
    user?: DecodedToken
}

const CommentForm = ({ user, requestId }: CommentFormProps) => {
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        CommentService.createComment({
            student_id: user.id,
            request_id: requestId,
            message
        })
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