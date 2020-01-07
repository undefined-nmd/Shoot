import React, { Component } from 'react'

export interface BadgeProps {
}

export interface BadgeState {

}

class Badge extends React.Component<BadgeProps, BadgeState> {
    state = { badgeId: 0 }
    render() {
        return (
            <div className="badge">
                <img src="./skr.jpg" alt="Badge image" />
            </div>
        );
    }
}

export default Badge;