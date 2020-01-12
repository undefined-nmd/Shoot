import * as React from 'react'
import RequestCardItem from "./requestCardItem"
import { DecodedToken } from "../services/auth.service"

interface RequestCardListProps {
    requests: any[],
    comments?: any[],
    upvotes?: any[],
    user?: DecodedToken,
    live?: boolean
}

const RequestCardList: React.FC<RequestCardListProps> = (props) => {


    return (
        <div className="card-list">
            {props.requests.map((request) => {
                let filteredComments = props.comments.filter(comment => comment.request_id === request._id)
                let filteredVote = props.upvotes.filter(upvote => upvote.request_id === request._id)

                return (
                    <RequestCardItem
                        key={request._id}
                        request={request}
                        comments={filteredComments}
                        upvote={filteredVote}
                        user={props.user}
                        live={props.live}
                    />
                )
            })}
        </div>
    )
}

export default RequestCardList