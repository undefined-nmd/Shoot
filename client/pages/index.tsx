import * as React from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import layout
import baseLayout from '../layouts/base';


// Import components
import Nav from '../components/nav'

import '@fortawesome/fontawesome-svg-core/styles.css'

import '../sass/main.scss'
import PostCardList from '../components/postCardList'

const HomePage = () => (
  <div className="page homepage">
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    {/* <Nav /> */}
    <PostCardList />
  </div>
)

export default baseLayout(HomePage)
