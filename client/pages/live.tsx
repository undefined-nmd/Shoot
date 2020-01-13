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
import { LiveRequestService, SubjectService, CommentService, VoteService, AuthService } from '../services'

import { parseCookie } from '../utils/helper'

interface LivePageProps {
    requests: Request[],
    comments?: Comment[],
    upvotes?: Upvote[],
}

const LivePage: NextPage = (props: LivePageProps) => {
    return (
        <div className="page homepage">
            <Head>
                <title>Home</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {props.requests &&
                <RequestCardList
                    requests={props.requests}
                    comments={props.comments}
                    upvotes={props.upvotes}
                    live={true}
                />
            }
        </div>
    );
}

LivePage.getInitialProps = async (ctx: any) => {
    const cookies = parseCookie(ctx)
    const decodedToken = await AuthService.getDecodedToken(cookies.token)

    let [requests, subjects, comments, upvotes] = await Promise.all([
        LiveRequestService.getLiveRequests(),
        SubjectService.getSubjects(),
        CommentService.getComments(),
        VoteService.getVotesByStudent(decodedToken.id)
    ])

    requests = requests.reverse()

    return {
        requests,
        subjects,
        comments,
        upvotes,
        user: decodedToken
    }
}

export default BaseLayout(LivePage)