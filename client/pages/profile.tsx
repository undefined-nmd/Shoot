import React, { Component } from 'react'

import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from '../components/badge'

// Import layout
import baseLayout from '../layouts/base';
import '../sass/main.scss'

export interface ProfilePageProps {
    userId: "Nawang"
}

export interface ProfilePageState {

}

class ProfilePage extends Component<ProfilePageProps, ProfilePageState> {
    state = { userId: this.props.userId }
    render() {
        return (

            <div className="page profilepage">
                <div className="profile">
                    <div className="profile__image">
                        <img src="./skr.jpg" alt="profile image" />
                    </div>
                    <div className="profile__name">Nawang Tendar</div>
                    <div className="profile__major">New Media Development</div>
                    <hr />
                    <div className="profile__badges">

                        <Badge />
                        <Badge />
                        <Badge />
                        <Badge />
                        <Badge />
                        <Badge />
                        <Badge />
                        <Badge />
                        <Badge />
                        <Badge />
                        <Badge />
                        <Badge />
                        <Badge />
                        <Badge />


                    </div>
                    <div className="sign__out">Log out</div>
                </div>
            </div>
        );
    }
}

export default baseLayout(ProfilePage);