import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Add from '../components/buttons/add'
import '@fortawesome/fontawesome-svg-core/styles.css'

const links = [
    { href: '/', label: 'home', key: null },
    { href: '/live', label: 'live', key: null },
    { href: '/request', label: 'request', key: null },
    { href: '/timeline', label: 'timeline', key: null },
    { href: '/profile', label: 'profile', key: null }
].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
})


const DesktopNav = (props) => {

    return (
        <nav className="desktop__nav__container d-flex-center">
            <ul>
                {links.map(({ key, href, label }) => (
                    <li className="desktop__nav__item" key={key}>
                        {(label === "home") ? <a href={href}><FontAwesomeIcon icon="home" size="2x" /> <span className="desktop__nav__item--label">Home </span> </a> : ""}
                        {(label === "live") ? <a href={href}><FontAwesomeIcon icon="bolt" size="2x" /><span className="desktop__nav__item--label">Live</span></a> : ""}
                        {(label === "request") ? <a className="desktop__add__request d-flex-center" onClick={props.onToggleDrawer}><Add size="4x" /></a> : ""}
                        {(label === "timeline") ? <a href={href}> <FontAwesomeIcon icon="calendar-alt" size="2x" /><span className="desktop__nav__item--label">Timeline</span></a> : ""}
                        {(label === "profile") ? <a href={href}> <FontAwesomeIcon icon="user" size="2x" /><span className="desktop__nav__item--label">Profile</span></a> : ""}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default DesktopNav
