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


const Nav = (props) => {

  useEffect(() => {


  }, [])

  const searchClick = (e) => {

    e.preventDefault();
    //remove logo when click on search input
    let searchInput = document.getElementsByClassName("header__search")[0];
    let logo = document.getElementById("header-logo");
    if (logo !== null) {
      logo.classList.add("remove")
    }

  }


  return (
    <nav className="nav__container d-flex-center">
      <ul>
        {links.map(({ key, href, label }) => (
          <li className="nav__item" key={key}>
            {(label === "home") ? <a href={href}><FontAwesomeIcon icon="home" size="2x" /></a> : ""}
            {(label === "live") ? <a href={href}><FontAwesomeIcon icon="bolt" size="2x" /></a> : ""}
            {(label === "request") ? <a className="add__request d-flex-center" onClick={props.onToggleDrawer}><Add /></a> : ""}
            {(label === "timeline") ? <a href={href}> <FontAwesomeIcon icon="calendar-alt" size="2x" /></a> : ""}
            {(label === "profile") ? <a href={href}> <FontAwesomeIcon icon="user" size="2x" /></a> : ""}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
