import { useState } from 'react'
import Head from 'next/head'

// Import layout
import BaseLayout from '../layouts/base'

// Import components
import RequestCardList from '../components/requestCardList'

// Import services
import { RequestService, SubjectService, CommentService } from '../services'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../sass/main.scss'

const HomePage = (props) => {
  return (
    <div className="page homepage">
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {props.requests && 
        <RequestCardList requests={props.requests} comments={props.comments} />
      }
    </div>
  );
}

HomePage.getInitialProps = async () => {
    const requests = await RequestService.getRequests()
    const subjects = await SubjectService.getSubjects()
    const comments = await CommentService.getComments()

    return {
      requests,
      subjects,
      comments
    }
}

export default BaseLayout(HomePage)