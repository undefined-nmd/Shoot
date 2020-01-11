import { useState, useEffect } from 'react'
import Head from 'next/head'

// Import layout
import BaseLayout from '../layouts/base'

// Import components
import RequestCardList from '../components/requestCardList'

// Import services
import { RequestService, SubjectService, CommentService } from '../services'
import Cookies from 'js-cookie'
import '@fortawesome/fontawesome-svg-core/styles.css'


import getParameterURL from '../utils/getParameterURL'


const ResultPage = (props) => {


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
                <RequestCardList requests={requests} comments={props.comments} />
            }
        </div>
    );
}

ResultPage.getInitialProps = async () => {
    let [requests, subjects, comments] = await Promise.all([
        RequestService.getRequests(),
        SubjectService.getSubjects(),
        CommentService.getComments()
    ])



    return {
        requests,
        subjects,
        comments
    }
}

export default BaseLayout(ResultPage)