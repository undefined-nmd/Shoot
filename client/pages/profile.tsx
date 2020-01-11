import * as React from 'react'
import { NextPage } from 'next'

import BaseLayout from '../layouts/base'

import BadgeList from '../components/badgeList'
import BadgeScore from '../components/badgeScore'
import { Badge } from '../components/badgeItem'

import { UserService, AuthService } from '../services'

import { parseCookie } from '../utils/helper'

export type User = {
    first_name: string,
    last_name: string,
    profile_img: string
    email?: string,
    score?: number,
    role_id: string,
    study: string
    subjects?: Array<string>
    badges?: Array<Badge>
}

interface ProfilePageProps {
    user?: User,
    badges?: Array<Badge>
}

const ProfilePage: NextPage = ({ user }: ProfilePageProps) => {
    const getFullName = () => {
        return user.first_name + ' ' + user.last_name
    }
    
    return (
        <div className="page profilepage">
            <div className="profile">
                <div className="profile__image">
                    <img src={user.profile_img} alt="profile image" />
                </div>
                <section className="profile__info">
                    <div className="profile__name">{getFullName() || ''}</div>
                    <div className="profile__major">{user.study}</div>
                    <div className="profile__badges">
                        <BadgeScore badges={user.badges} />
                        <BadgeList badges={user.badges} />
                    </div>
                </section>
                <a className="btn btn--primary" onClick={() => AuthService.logout()}>Log out</a>
            </div>
        </div>
    )  
}

ProfilePage.getInitialProps = async (ctx: any) => {
    const cookies = parseCookie(ctx)
    const decodedToken = await AuthService.getDecodedToken(cookies.token)
    const user = await UserService.getUserById(decodedToken.id)

    return { 
        user
    }
}

export default BaseLayout(ProfilePage)