import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

// Import layout
import BaseLayout from '../layouts/base'

// Import components
import RequestCardList from '../components/requestCardList'
import { Request } from '../components/requestCardItem'
import { Upvote } from '../components/upvote'
import { Comment } from '../components/commentItem'

// Import services
import { RequestService, SubjectService, CommentService, VoteService, AuthService } from '../services'

import getParameterURL from '../utils/getParameterURL'
import { parseCookie } from '../utils/helper';

interface ResultPageProps {
    requests: Request[],
    comments?: Comment[],
    upvotes?: Upvote[],
}

const ResultPage: NextPage = (props: ResultPageProps) => {
    const [isFilter, setIsFilter] = useState(false)
    const [requests, setRequests] = useState(props.requests)

    useEffect(() => {

        let subjectId = getParameterURL(window.location.href, 'subjectId')
        let sort = getParameterURL(window.location.href, 'sort')
        let searchTerm = getParameterURL(window.location.href, 'searchTerm')

        if (searchTerm === null) {
            RequestService.getRequestsByFilter(subjectId, sort).then((requests) => {
                setRequests(requests)
            })
        }

        if (searchTerm !== null) {
            RequestService.getRequestsBySearch(searchTerm).then((requests) => {
                setRequests(requests)
            })
        }

    }, [])


    return (
        <div className="page homepage">
            <Head>
                <title>Home</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {requests &&
                <RequestCardList requests={requests} comments={props.comments} upvotes={props.upvotes} />
            }
        </div>
    );
}

ResultPage.getInitialProps = async (ctx: any) => {
    const cookies = parseCookie(ctx)
    const decodedToken = await AuthService.getDecodedToken(cookies.token)

    let [requests, subjects, comments, upvotes] = await Promise.all([
        RequestService.getRequests(),
        SubjectService.getSubjects(),
        CommentService.getComments(),
        VoteService.getVotesByStudent(decodedToken.id)
    ])

    return {
        requests,
        subjects,
        comments,
        upvotes,
        user: decodedToken
    }
}

export default BaseLayout(ResultPage)