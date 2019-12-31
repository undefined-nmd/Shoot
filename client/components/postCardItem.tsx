import * as React from 'react'
import Icon from "./icon"

interface PostCardProps {
    request?: any
}

const PostCardItem: React.FC<PostCardProps> = ({ request }) => {
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
                <div className="card__meta-item">
                    <span className="card__meta-number">{ request.upvote_count }</span>
                    <Icon name="arrow-up" />
                </div>
                <div className="card__meta-item">
                    <span className="card__meta-number">10</span>
                    <Icon name="comment" />
                </div>
            </div>
        </section>
    )
}

export default PostCardItem