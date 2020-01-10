import React from 'react'
// Import layout
import baseLayout from '../layouts/base';
import { RequestService, SubjectService, CommentService } from '../services'
import Head from 'next/head'
import RequestCardItem from "../components/requestCardItem"


const TimeLinePage = (props) => {

    let newYear = null

    return (
        <div className="page profilepage" >
            {props.requests.map((request, i) => {

                const filteredComments = props.comments.filter(comment => comment.request_id === request._id)

                //check for date
                const timestamp = request._id.toString().substring(0, 8)
                let date = new Date(parseInt(timestamp, 16) * 1000)
                // let nextRequestCardItemDate = new Date(request[i + 1].date)

                console.log(date)
                if (i === 0) {
                    newYear = date.getFullYear()
                    return (
                        <div key={request._id} className="card__line">
                            <div className="titles__year">{date.getFullYear()}</div>
                            <RequestCardItem key={request._id} request={request} comments={filteredComments} />
                        </div>)
                }
                if (date.getFullYear() !== newYear) {
                    newYear = date.getFullYear()
                    return (
                        <div key={request._id} className="card__line">
                            <div className="titles__year">{date.getFullYear()}</div>
                            <RequestCardItem key={request.id} request={request} />
                        </div>
                    )
                } else {
                    return (
                        <RequestCardItem key={request._id} request={request} />
                    )
                }
            })
            }
        </div>
    );
}


TimeLinePage.getInitialProps = async () => {
    let [requests, comments] = await Promise.all([
        RequestService.getRequests(),
        CommentService.getComments()
    ])
    requests = requests.reverse()

    return {
        requests, comments
    }
}

export default baseLayout(TimeLinePage);