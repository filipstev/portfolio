import React from 'react'
import '../sass/layout/_cta.scss'
import '../sass/layout/_intro.scss'
import '../sass/layout/_services.scss'
import '../sass/layout/_featured.scss'
import '../sass/components/_button.scss'
import '../sass/typography/_animations.scss'
import '../sass/typography/_typography.scss'
import nexter from '../assets/Images/nexter.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <section className="section-intro">
        <div className="section-intro__content">
          <h1 className="heading-primary">Hey, I'm Phillip.</h1>
          <h3 className="heading-tertiary">
            Web designer and developer from Belgrade. I create custom websites
            to help businesses do better online.
          </h3>
        </div>
      </section>

      <section className="section-featured">
        <div className="heading-container">
          <h2 className="heading-secondary-1">Featured Project</h2>
        </div>

        <div className="container">
          <figure className="fig-img">
            <img
              src={nexter}
              alt="Featured Project"
              className="fig-img__image"
            />
          </figure>
          <div className="featured-content">
            <h1 className="heading-primary-1">Nexter</h1>

            <p className="featured-content__text">
              Nexter is a landing page for a real estate company. Built with CSS
              Grid.
            </p>

            <a
              href="https://filipstev.github.io/nexter.github.io/"
              className="btn-submit"
            >
              View website
            </a>
          </div>
        </div>
      </section>

      <section className="section-services">
        <div className="heading-container">
          <h2 className="heading-secondary-1">My Services</h2>
        </div>

        <div className="container">
          <div className="design">
            <i className="fas fa-pen-nib design__icon"></i>
            <h3 className="heading-tertiary-1">Web Design</h3>
            <p className="head">User Focused</p>
            <p className="head__text">
              User focused design should be the primary goal of any website. I
              design websites so the user is always in focus.
            </p>
          </div>

          <div className="development">
            <i className="fas fa-laptop-code development__icon"></i>
            <h3 className="heading-tertiary-1">Web Development</h3>
            <p className="head">Fast and Responsive</p>
            <p className="head__text">
              I have 2 primary goals when building websites: Firstly, it needs
              to work across all devices. Secondly, it needs to be fast as
              possible.
            </p>
          </div>
        </div>

        <div className="btn-container">
          <Link to="/projects" className="btn-submit">
            View Projects
          </Link>
        </div>
      </section>

      <section className="section-cta">
        <div className="connect">
          <h2 className="heading-secondary">Let's work together.</h2>
          <p className="connect__p">Have a project you'd like to discuss?</p>
          <Link to="/contact" className="btn btn-cta">
            Get in touch
          </Link>
        </div>

        <div className="smedia">
          <ul className="smedia__list">
            <li className="smedia__list-item">
              <span className="smedia__list-icon">
                <i
                  id="fr"
                  className="far fa-envelope"
                  style={{ color: '#4B6CC1' }}
                ></i>
              </span>
              <a
                href="mailto:f.stevanovic21@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="smedia__list-button"
              >
                email me
              </a>
            </li>
            <li className="smedia__list-item">
              <span className="smedia__list-icon">
                <i
                  className="fab fa-github-square"
                  style={{ color: '#4B6CC1' }}
                ></i>
              </span>
              <a
                href="https://github.com/filipstev"
                className="smedia__list-button"
              >
                on github
              </a>
            </li>
            <li className="smedia__list-item">
              <span className="smedia__list-icon">
                <i
                  className="fab fa-facebook-square"
                  style={{ color: '#4B6CC1' }}
                ></i>
              </span>
              <a
                href="https://www.facebook.com/filip.stevanovic.106/"
                className="smedia__list-button"
              >
                on facebook
              </a>
            </li>
            <li className="smedia__list-item">
              <span className="smedia__list-icon">
                <i className="fab fa-linkedin" style={{ color: '#4B6CC1' }}></i>
              </span>
              <a
                href="https://www.linkedin.com/in/filip-stevanovic-3928bb153/"
                className="smedia__list-button"
              >
                on linkedin
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Home
