import * as React from 'react'
import Icon from "./icon"

interface PostCardProps {
    content?: String
}

const PostCardItem: React.FC<PostCardProps> = ({ content }) => (
    <section className="card">
        <div className="card__author d-flex">
            <figure className="card__author-thumbnail">
                <img src="https://randomuser.me/api/portraits/women/76.jpg" alt="Student thumbnail" />
            </figure>
            <div className="card__author-content">
                <h2 className="card__author-course">UX Prototype</h2>
                <span className="card__author-name">Mona Lisa</span>
            </div>
        </div>
        <div className="card__content">
            <p>{ content }</p>
        </div>
        <div className="card__meta d-flex">
            <div className="card__meta-item">
                <span className="card__meta-number">15</span>
                <Icon name="arrow-up" />
            </div>
            <div className="card__meta-item">
                <span className="card__meta-number">10</span>
                <Icon name="comment" />
            </div>
        </div>
    </section>
)

export default PostCardItem