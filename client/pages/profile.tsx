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
    email: string,
    score: number,
    role_id: string,
    subjects: Array<string>
}

interface ProfilePageProps {
    user?: User,
    badges?: Array<Badge>
}

const ProfilePage: NextPage = ({ user, badges }: ProfilePageProps) => {
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
                    <div className="profile__major">New Media Development</div>
                    <div className="profile__badges">
                        <BadgeScore badges={badges} />
                        <BadgeList badges={badges} />
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

    // Hardcoded for now
    const badges = [
        {
            id: 10,
            title: 'Learner',
            image: 'https://randomuser.me/api/portraits/men/10.jpg',
            score: 3
        },
        {
            id: 11,
            title: 'Learner',
            image: 'https://randomuser.me/api/portraits/men/10.jpg',
            score: 4
        },
        {
            id: 12,
            title: 'Learner',
            image: 'https://randomuser.me/api/portraits/men/10.jpg',
            score: 7
        },
        {
            id: 13,
            title: 'Learner',
            image: 'https://randomuser.me/api/portraits/men/10.jpg',
            score: 6
        }
    ]

    return { 
        user,
        badges
    }
}

export default BaseLayout(ProfilePage)