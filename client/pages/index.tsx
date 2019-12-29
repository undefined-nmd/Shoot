import * as React from 'react'
import Head from 'next/head'
// import axios from 'axios'

import getRequests from '../services/api'

// Import layout
import BaseLayout from '../layouts/base';

// Import components
import PostCardList from '../components/postCardList'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../sass/main.scss'
import API from '../services/api';

const HomePage = (props) => {
  console.log(props.requests)
  return (
    <div className="page homepage">
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PostCardList />
    </div>
  )
}

HomePage.getInitialProps = async () => {
  const data = await API.getRequests()

  return {
    requests: data
  }
}

export default BaseLayout(HomePage)