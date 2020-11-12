import React from 'react'
import nexter from '../assets/Images/nexter.png'
import natours from '../assets/Images/natours.png'
import trillo from '../assets/Images/trillo.png'
import weather from '../assets/Images/weather-app.png'
import burgerbuilder from '../assets/Images/burger-builder.png'
import chatapp from '../assets/Images/chatapp.png'
import '../sass/layout/_cta.scss'
import '../sass/layout/_intro.scss'
import '../sass/layout/_featured.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="section-intro">
        <div className="section-intro__content">
          <h1 className="heading-primary">My Projects</h1>
          <h3 className="heading-tertiary">
            I’ve been designing and developing websites for a while. Below are
            some of my favourites.
          </h3>
        </div>
      </section>

      <section className="section-featured">
        <div className="heading-container">
          <h2 className="heading-secondary-1">Nexter</h2>
        </div>

        <div className="container">
          <figure className="fig-img">
            <img src={nexter} alt="Nexter" className="fig-img__image" />
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

      <section className="section-featured margin-low">
        <div className="heading-container">
          <h2 className="heading-secondary-1">Natours</h2>
        </div>

        <div className="container">
          <figure className="fig-img">
            <img src={natours} alt="Natours" className="fig-img__image" />
          </figure>
          <div className="featured-content">
            <h1 className="heading-primary-1">Natours</h1>

            <p className="featured-content__text">
              Natours is a landing page for a company that does nature
              tours/campings/hiking. Built with CSS and JS.
            </p>

            <a
              href="https://filipstev.github.io/natours.github.io/"
              className="btn-submit"
            >
              View website
            </a>
          </div>
        </div>
      </section>

      <section className="section-featured margin-low">
        <div className="heading-container">
          <h2 className="heading-secondary-1">Trillo</h2>
        </div>

        <div className="container">
          <figure className="fig-img">
            <img src={trillo} alt="Trillo" className="fig-img__image" />
          </figure>
          <div className="featured-content">
            <h1 className="heading-primary-1">Trillo</h1>

            <p className="featured-content__text">
              Trillo is an app used to book hotels. Completly styled with
              flexbox.
            </p>

            <a
              href="https://filipstev.github.io/trillo.github.io/"
              className="btn-submit"
            >
              View website
            </a>
          </div>
        </div>
      </section>

      <section className="section-featured margin-low">
        <div className="heading-container">
          <h2 className="heading-secondary-1">Burger Builder</h2>
        </div>

        <div className="container">
          <figure className="fig-img">
            <img
              src={burgerbuilder}
              alt="Burger Builder"
              className="fig-img__image"
            />
          </figure>
          <div className="featured-content">
            <h1 className="heading-primary-1">Burger Builder</h1>

            <p className="featured-content__text">
              Burger Builder is an app where you can create your own burger and
              order it. It uses React, Redux, JSON Web Token for authentication
              and Firebase to store data and orders. Styled with CSS.
            </p>

            <a
              href="https://react-my-burger-52942.web.app"
              className="btn-submit"
            >
              View website
            </a>
          </div>
        </div>
      </section>

      <section className="section-featured margin-low">
        <div className="heading-container">
          <h2 className="heading-secondary-1">Chat App</h2>
        </div>

        <div className="container">
          <figure className="fig-img">
            <img src={chatapp} alt="Chat App" className="fig-img__image" />
          </figure>
          <div className="featured-content">
            <h1 className="heading-primary-1">Chat App</h1>

            <p className="featured-content__text">
              Chat app was built for a group of friends. I've built it using
              Node.js with Socket.io. Styled with CSS.
            </p>

            <a
              href="https://chat-chat-application.herokuapp.com/"
              className="btn-submit"
            >
              View website
            </a>
          </div>
        </div>
      </section>

      <section className="section-featured margin-low">
        <div className="heading-container">
          <h2 className="heading-secondary-1">Weather App</h2>
        </div>

        <div className="container">
          <figure className="fig-img">
            <img src={weather} alt="Weather App" className="fig-img__image" />
          </figure>
          <div className="featured-content">
            <h1 className="heading-primary-1">Weather App</h1>

            <p className="featured-content__text">
              Weather app is built with React, Redux and Node + express. It uses
              DarkSky API to get accurate weather predictions.
            </p>

            <a href="https://i-weather.herokuapp.com/" className="btn-submit">
              View website
            </a>
          </div>
        </div>
      </section>

      <section className="section-cta">
        <div className="connect">
          <h2 className="heading-secondary">Let's work together.</h2>
          <p className="connect__p">Have a project you'd like to discuss?</p>
          <a href="/contact" className="btn btn-cta">
            Get in touch
          </a>
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
      <Footer />
    </React.Fragment>
  )
}

export default Projects
