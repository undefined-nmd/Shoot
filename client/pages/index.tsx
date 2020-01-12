import { useState } from 'react'
import Head from 'next/head'

// Import layout
import BaseLayout from '../layouts/base'

// Import components
import RequestCardList from '../components/requestCardList'

// Import services
import { RequestService, SubjectService, CommentService, VoteService, AuthService } from '../services'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { parseCookie } from '../utils/helper'
import AuthContext from '../components/context/AuthContext';


const HomePage = (props) => {
  console.log(props)
  return (
    <div className="page homepage">
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <AuthContext.Consumer>
        {value => {
          console.log(value)
        }}
      </AuthContext.Consumer> */}
      {props.requests &&
        <RequestCardList 
          requests={props.requests} 
          comments={props.comments} 
          upvotes={props.upvotes} 
          user={props.user}
        />
      }
    </div>
  );
}

HomePage.getInitialProps = async (ctx) => {
  const cookies = parseCookie(ctx)
  const decodedToken = await AuthService.getDecodedToken(cookies.token)
  
  let [requests, subjects, comments, upvotes] = await Promise.all([
    RequestService.getRequests(),
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

export default BaseLayout(HomePage)