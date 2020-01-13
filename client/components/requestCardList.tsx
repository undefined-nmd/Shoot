import * as React from 'react'

import { UserContext } from './context'

import RequestCardItem, { Request } from "./requestCardItem"
import { Comment } from './commentItem'
import { Upvote } from './upvote'

interface RequestCardListProps {
    requests: Request[],
    comments?: Comment[],
    upvotes?: Upvote[],
    live?: boolean
}

const RequestCardList: React.FC<RequestCardListProps> = (props) => {


    return (
        <div className="card-list">
            {props.requests.map((request) => {
                let filteredComments = props.comments.filter(comment => comment.request_id === request._id)
                let filteredVote = props.upvotes.filter(upvote => upvote.request_id === request._id)

                return (
                    <UserContext.Consumer key={request._id}>
                        {user => (
                            <RequestCardItem
                                request={request}
                                comments={filteredComments}
                                upvote={filteredVote}
                                user={user}
                                live={props.live}
                            />
                        )}
                    </UserContext.Consumer>
                )
            })}
        </div>
    )
}

export default RequestCardList