import React from 'react'
import { NextPage } from 'next'

// Import layout
import BaseLayout from '../layouts/base'

// Import components
import RequestCardItem from "../components/requestCardItem"
import { Request } from '../components/requestCardItem'
import { Upvote } from '../components/upvote'
import { Comment } from '../components/commentItem'
import { UserContext } from '../components/context'

// Import services
import { RequestService, CommentService, VoteService, AuthService } from '../services'
import { parseCookie } from '../utils/helper'

interface TimeLinePageProps {
    requests: Request[],
    comments?: Comment[],
    upvotes?: Upvote[],
}

const TimeLinePage: NextPage = (props: TimeLinePageProps) => {
    let newYear = null

    return (
        <div className="page profilepage" >
            {props.requests.map((request, i) => {
                const filteredComments = props.comments.filter(comment => comment.request_id === request._id)
                const filteredVote = props.upvotes.filter(upvote => upvote.request_id === request._id)
                //check for date
                const timestamp = request._id.toString().substring(0, 8)
                let date = new Date(parseInt(timestamp, 16) * 1000)
                // let nextRequestCardItemDate = new Date(request[i + 1].date)

                if (i === 0) {
                    newYear = date.getFullYear()
                    return (
                        <div key={request._id} className="card__line">
                            <div className="titles__year">{date.getFullYear()}</div>
                            <UserContext.Consumer key={request._id}>
                                {user => <RequestCardItem request={request} comments={filteredComments} upvote={filteredVote} user={user} />}
                            </UserContext.Consumer>
                        </div>)
                }
                if (date.getFullYear() !== newYear) {
                    newYear = date.getFullYear()
                    return (
                        <div key={request._id} className="card__line">
                            <div className="titles__year">{date.getFullYear()}</div>
                            <UserContext.Consumer key={request._id}>
                                {user => <RequestCardItem request={request} comments={filteredComments} upvote={filteredVote} user={user} />}
                            </UserContext.Consumer>
                        </div>
                    )
                } else {
                    return (
                        <UserContext.Consumer key={request._id}>
                            {user => <RequestCardItem request={request} comments={filteredComments} upvote={filteredVote} user={user} />}
                        </UserContext.Consumer>
                    )
                }
            })
            }
        </div>
    );
}

TimeLinePage.getInitialProps = async (ctx: any) => {
    const cookies = parseCookie(ctx)
    const decodedToken = await AuthService.getDecodedToken(cookies.token)

    let [requests, comments, upvotes] = await Promise.all([
        RequestService.getRequests(),
        CommentService.getComments(),
        VoteService.getVotesByStudent(decodedToken.id)
    ])

    requests = requests.reverse()

    return {
        requests, 
        comments, 
        upvotes
    }
}

export default BaseLayout(TimeLinePage);