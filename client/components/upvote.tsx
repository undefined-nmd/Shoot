import * as React from 'react'
import Icon from "./icon"

const Upvote = ({ count, upvote, handleVote }) => {
    return (
        <React.Fragment>
            <span className="card__meta-number">{ count }</span>
            <Icon name="arrow-up" onClick={handleVote} className={upvote.length ? 'is-voted' : ''}/>
        </React.Fragment>
    )
}

export default Upvote