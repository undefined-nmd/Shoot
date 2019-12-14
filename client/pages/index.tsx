import * as React from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import layout
import BaseLayout from '../layouts/base';

// Import components
import Nav from '../components/nav'
import PostCardList from '../components/postCardList'
import Drawer from '../components/drawer'
import TextInput from '../components/inputs/textInput'
import Button from '../components/buttons/button'

import '@fortawesome/fontawesome-svg-core/styles.css'

import '../sass/main.scss'

const HomePage = () => (
  <div className="page homepage">
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    {/* <Nav /> */}
    <PostCardList />
    <Drawer visible={true}>
      <div className="form">
        <TextInput placeholder="What is your question" />
        <TextInput placeholder="Subject" />
        <TextInput placeholder="Tags" />
        <Button label="Add Question" />
      </div>
    </Drawer>
  </div>
)

export default BaseLayout(HomePage)
