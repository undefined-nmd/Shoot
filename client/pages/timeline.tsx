import React, { Component } from 'react'
// Import layout
import baseLayout from '../layouts/base';

import Head from 'next/head'


export interface TimeLinePageProps {

}

export interface TimeLinePageState {

}

class TimeLinePage extends React.Component<TimeLinePageProps, TimeLinePageState> {
    state = { year: 2001 }
    render() {
        return (<div>TIme Line</div>);
    }
}

export default baseLayout(TimeLinePage);