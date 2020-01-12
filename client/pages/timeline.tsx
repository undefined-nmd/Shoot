import React from 'react'
// Import layout
import baseLayout from '../layouts/base';
import Head from 'next/head'
import RequestCardItem from "../components/requestCardItem"

// Import services
import { RequestService, SubjectService, CommentService, VoteService, AuthService } from '../services'
import { parseCookie } from '../utils/helper';

const TimeLinePage = (props) => {

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
                            <RequestCardItem key={request._id} request={request} comments={filteredComments} upvote={filteredVote} user={props.user} />
                        </div>)
                }
                if (date.getFullYear() !== newYear) {
                    newYear = date.getFullYear()
                    return (
                        <div key={request._id} className="card__line">
                            <div className="titles__year">{date.getFullYear()}</div>
                            <RequestCardItem key={request.id} request={request} comments={filteredComments} upvote={filteredVote} user={props.user} />
                        </div>
                    )
                } else {
                    return (
                        <RequestCardItem key={request._id} request={request} comments={filteredComments} upvote={filteredVote} user={props.user} />
                    )
                }
            })
            }
        </div>
    );
}


TimeLinePage.getInitialProps = async (ctx) => {
    const cookies = parseCookie(ctx)
    const decodedToken = await AuthService.getDecodedToken(cookies.token)

    let [requests, comments, upvotes] = await Promise.all([
        RequestService.getRequests(),
        CommentService.getComments(),
        VoteService.getVotesByStudent(decodedToken.id)
    ])
    requests = requests.reverse()

    return {
        requests, comments, upvotes, user: decodedToken
    }
}

export default baseLayout(TimeLinePage);