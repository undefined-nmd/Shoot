import * as React from 'react'
import Icon from "./icon"

const Upvote = ({ count }) => {
    return (
        <React.Fragment>
            <span className="card__meta-number">{ count }</span>
            <Icon name="arrow-up" />
        </React.Fragment>
    )
}

export default Upvote