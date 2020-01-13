import * as React from 'react'
import { NextPage } from 'next'

import BaseLayout from '../layouts/base'

import { Badge } from '../components/badgeItem'
import UserProfile from '../components/userProfile'
import { UserContext } from '../components/context'

import { AuthService } from '../services'

export type User = {
    _id: string,
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
}

const ProfilePage: NextPage = (props: ProfilePageProps) => {
    return (
        <div className="page profilepage">
            <UserContext.Consumer>
                {user => <UserProfile user={user} handleLogout={() => AuthService.logout()}/>}
            </UserContext.Consumer>       
        </div>
    )  
}

export default BaseLayout(ProfilePage)