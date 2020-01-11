import * as React from 'react'
import Icon from "./icon"
import Upvote from './upvote'
import { VoteService } from '../services';
import { User } from '../pages/profile';
import { DecodedToken } from '../services/auth.service';

interface RequestCardProps {
    request?: any,
    comments?: any,
    upvote?: any,
    user: DecodedToken
}

const RequestCardItem: React.FC<RequestCardProps> = ({ request, comments, upvote, user }) => {
    const [vote, setVote] = React.useState(upvote)

    const getFullName = () => {
        return request.student_id.first_name + ' ' + request.student_id.last_name
    }

    const updateVote = () => {
        if(upvote.length) {
            VoteService.deleteVote(upvote[0]._id)
        } else {
            VoteService.createVote({
                student_id: user.id,
                request_id: request._id
            })
        }
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
                <div className="card__meta-item">
                    <Upvote 
                        handleVote={ updateVote }
                        upvote={ vote }
                        count={ request.upvote_count }
                    />
                </div>
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