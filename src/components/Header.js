import React from 'react'
import '../sass/layout/_header.scss'
import Logo from '../assets/Images/Phillip.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </NavLink>
      <nav className="navigation">
        {/* {{!-- <div className="navigation__collapse">
        <i className="fas fa-bars"></i>
    </div> --}} */}
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/projects" className="navigation__item-link">
              Projects
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/about" className="navigation__item-link">
              About
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/contact" className="navigation__item-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
