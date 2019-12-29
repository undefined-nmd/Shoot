import * as React from 'react'
import Head from 'next/head'

import API from '../services/api'

// Import layout
import BaseLayout from '../layouts/base';

// Import components
import PostCardList from '../components/postCardList'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../sass/main.scss'


const HomePage = (props) => {
  return (
    <div className="page homepage">
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PostCardList posts={props.requests} />
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