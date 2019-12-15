import * as React from 'react'
import Head from 'next/head'

// Import layout
import BaseLayout from '../layouts/base';

// Import components
import PostCardList from '../components/postCardList'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../sass/main.scss'

const HomePage = () => (
  <div className="page homepage">
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <PostCardList />
  </div>
)

export default BaseLayout(HomePage)
