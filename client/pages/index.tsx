import * as React from 'react'
import Head from 'next/head'

// Import layout
import BaseLayout from '../layouts/base'

// Import components
import RequestCardList from '../components/requestCardList'

// Import services
import { RequestService } from '../services'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../sass/main.scss'


const HomePage = (props) => {
  return (
    <div className="page homepage">
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RequestCardList requests={props.requests} />
    </div>
  )
}

HomePage.getInitialProps = async () => {
  const requestData = await RequestService.getRequests()
  
  return {
    requests: requestData
  }
}

export default BaseLayout(HomePage)