import * as React from 'react'
import { NextPage } from 'next'

import BaseLayout from '../layouts/base'

import BadgeList from '../components/badgeList'
import BadgeScore from '../components/badgeScore'
import { Badge } from '../components/badgeItem'

import { UserService, AuthService } from '../services'

import { parseCookie, getFullName } from '../utils/helper'

export type User = {
    first_name: string,
    last_name: string,
    profile_img: string
    email?: string,
    score?: number,
    role_id: string,
    study: string
    subjects?: string[]
    badges?: Badge[]
}

interface ProfilePageProps {
    user?: User,
    currentUser?: User
    badges?: Badge[]
}

const ProfilePage: NextPage = ({ currentUser }: ProfilePageProps) => {
    return (
        <div className="page profilepage">
            <div className="profile">
                <div className="profile__image">
                    <img src={currentUser.profile_img} alt="profile image" />
                </div>
                <section className="profile__info">
                    <div className="profile__name">{getFullName(currentUser.first_name, currentUser.last_name) || ''}</div>
                    <div className="profile__major">{currentUser.study}</div>
                    {currentUser.badges && 
                        <div className="profile__badges">
                            <BadgeScore badges={currentUser.badges} />
                            <BadgeList badges={currentUser.badges} />
                        </div>
                    }
                </section>
                <a className="btn btn--primary" onClick={() => AuthService.logout()}>Log out</a>
            </div>
        </div>
    )  
}

ProfilePage.getInitialProps = async (ctx: any) => {
    const cookies = parseCookie(ctx)
    const decodedToken = await AuthService.getDecodedToken(cookies.token)
    const currentUser = await UserService.getUserById(decodedToken.id)

    return { 
        currentUser
    }
}

export default BaseLayout(ProfilePage)