import * as React from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import layout
import BaseLayout from '../layouts/base';

// Import components
import Nav from '../components/nav'
import PostCardList from '../components/postCardList'
import Drawer from '../components/drawer'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '../sass/main.scss'
import AddPostForm from '../components/forms/AddPostForm';

const HomePage = () => (
  <div className="page homepage">
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    {/* <Nav /> */}
    <PostCardList />
    <Drawer visible={true} height="80vh">
        <AddPostForm />
    </Drawer>
  </div>
)

export default BaseLayout(HomePage)
