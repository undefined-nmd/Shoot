import React, { useState } from 'react'

import { User } from '../pages/profile'

import Icon from "./icon"
import Upvote from './upvote'
import CommentListWrapper from './commentListWrapper'
import { TagSchema } from './tag'

import { getFullName } from '../utils/helper'

export type Request = {
    _id: string,
    student_id: string,
    subject_id: string,
    message: string,
    tags?: TagSchema[]
    upvote_count?: number,
    is_solved?: boolean,
}

interface RequestCardProps {
    request?: any,
    comments?: any,
    upvote?: any,
    user: User,
    live?: boolean
}

const RequestCardItem: React.FC<RequestCardProps> = ({ request, comments, upvote, user, live }) => {
    const [showDrawer, setShowDrawer] = useState(false)

    const handleDrawer = () => {
        setShowDrawer(!showDrawer)
    }

    return (
        <React.Fragment>
            <section className="card">
                <div className="card__author d-flex">
                    <figure className="card__author-thumbnail">
                        <img src={request.student_id.profile_img} alt="Student thumbnail" />
                    </figure>
                    <div className="card__author-content">
                        <h2 className="card__author-course">{request.subject_id.name}</h2>
                        <span className="card__author-name">{getFullName(request.student_id.first_name, request.student_id.last_name)}</span>
                        {live === true &&
                            <span className="card__author-location">Location: {request.location.name}</span>
                        }
                    </div>
                </div>
                <div className="card__content">
                    <p>{request.message}</p>
                </div>
                <div className="card__meta d-flex">
                    {!live &&
                        <div className="card__meta-item">
                            <Upvote
                                requestId={request._id}
                                userId={user._id}
                                upvote={upvote}
                                count={request.upvote_count}
                            />
                        </div>
                    }
                    {comments &&
                        <div className="card__meta-item">
                            <span className="card__meta-number">{comments.length}</span>
                            <Icon name="comment" onClick={handleDrawer} />
                        </div>
                    }
                </div>
            </section>
            {comments &&
                <CommentListWrapper
                    key={request._id}
                    comments={comments}
                    requestId={request._id}
                    open={showDrawer}
                    onHandleDrawer={handleDrawer}
                />
            }
        </React.Fragment>
    )
}

export default RequestCardItem