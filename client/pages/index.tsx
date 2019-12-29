import * as React from 'react'
import Head from 'next/head'
import axios from 'axios'

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
      <PostCardList />
    </div>
  )
}

HomePage.getInitialProps = async () => {
  const res = await axios.get(`http://localhost:1234/api/v1/request`)
  const data = await res.data

  return {
    request: data
  }
}

export default BaseLayout(HomePage)