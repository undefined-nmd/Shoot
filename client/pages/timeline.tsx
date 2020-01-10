import React, { Component } from 'react'
// Import layout
import baseLayout from '../layouts/base';

import Head from 'next/head'


export interface TimeLinePageProps {

}

export interface TimeLinePageState {
    year: 2001
}

class TimeLinePage extends React.Component<TimeLinePageProps, TimeLinePageState> {

    render() {
        return (<div className="page profilepage" >
            TIme Line</div>
        );
    }
}

export default baseLayout(TimeLinePage);