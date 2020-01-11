import * as React from 'react'
import Icon from "./icon"
import Upvote from './upvote'

interface RequestCardProps {
    request?: any,
    comments?: any
}

const RequestCardItem: React.FC<RequestCardProps> = ({ request, comments }) => {
    const getFullName = () => {
        return request.student_id.first_name + ' ' + request.student_id.last_name
    }
    return (
        <section className="card">
            <div className="card__author d-flex">
                <figure className="card__author-thumbnail">
                    <img src={ request.student_id.profile_img } alt="Student thumbnail" />
                </figure>
                <div className="card__author-content">
                    <h2 className="card__author-course">{ request.subject_id.name }</h2>
                    <span className="card__author-name">{ getFullName() }</span>
                </div>
            </div>
            <div className="card__content">
                <p>{ request.message }</p>
            </div>
            <div className="card__meta d-flex">
                {request.upvote_count && 
                    <div className="card__meta-item">
                        <Upvote count={ request.upvote_count } />
                    </div>
                }
                {comments && 
                    <div className="card__meta-item">
                        <span className="card__meta-number">{ comments.length }</span>
                        <Icon name="comment" />
                    </div>
                }   
            </div>
        </section>
    )
}

export default RequestCardItem