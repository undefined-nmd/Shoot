import BadgeList from '../components/badgeList'
import BadgeScore from '../components/badgeScore'

import { getFullName } from '../utils/helper'

const UserProfile = ({ user, handleLogout }) => {
    return (
        <div className="profile">
            <div className="profile__image">
                <img src={user.profile_img} alt="profile image" />
            </div>
            <section className="profile__info">
                <div className="profile__name">{getFullName(user.first_name, user.last_name) || ''}</div>
                <div className="profile__major">{user.study}</div>
                {user.badges && 
                    <div className="profile__badges">
                        <BadgeScore badges={user.badges} />
                        <BadgeList badges={user.badges} />
                    </div>
                }
            </section>
            <a className="btn btn--primary" onClick={handleLogout}>Log out</a>
        </div>
    )
}

export default UserProfile