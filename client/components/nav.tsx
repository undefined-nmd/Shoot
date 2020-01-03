import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Add from '../components/buttons/add'
import '@fortawesome/fontawesome-svg-core/styles.css'

const links = [
  { href: '/', label: 'home', key: null },
  { href: '/search', label: 'search', key: null },
  { href: '/request', label: 'request', key: null },
  { href: '/timeline', label: 'timeline', key: null },
  { href: '/profile', label: 'profile', key: null }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = (props) => (
  <nav className="nav__container d-flex-center">
    <ul>
      {links.map(({ key, href, label }) => (
        <li className="nav__item" key={key}>
          {(label === "home") ? <a href={href}><FontAwesomeIcon icon="home" size="2x" /></a> : ""}
          {(label === "search") ? <a href={href}> <FontAwesomeIcon icon="search" size="2x" /></a> : ""}
          {(label === "request") ? <a className="add__request d-flex-center" onClick={props.onToggleDrawer}><Add /></a> : ""}
          {(label === "timeline") ? <a href={href}> <FontAwesomeIcon icon="calendar-alt" size="2x" /></a> : ""}
          {(label === "profile") ? <a href={href}> <FontAwesomeIcon icon="user" size="2x" /></a> : ""}
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
