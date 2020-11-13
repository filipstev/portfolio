import React from 'react'
import laptop from '../assets/Images/laptop.jpg'
import '../sass/layout/_cta.scss'
import '../sass/layout/_intro.scss'
import '../sass/layout/_about.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="section-intro">
        <div className="section-intro__content">
          <h1 className="heading-primary">About me</h1>
          <h3 className="heading-tertiary">
            Find out who I am, where I'm from and what I'm all about.
          </h3>
        </div>
      </section>

      <section className="section-about">
        <div className="container-about">
          <h2 className="heading-secondary-2">Who I am</h2>
          <p className="p-large">
            My name's Phillip. I'm a web designer and developer based in
            Belgrade.
          </p>
          <p className="p-normal">
            During the day I’m a student of Information Technologies. During the
            evenings I spend my time working on freelance projects and building
            my own products, as well as always expanding my knowledge.
          </p>
          <p className="p-normal">
            My most recent project is called YelpCamp. It’s a yelp-like website
            where you can find/add campgrounds as well as rate and comment
            existing ones.
          </p>
        </div>
        <img src={laptop} alt="Laptop" className="about-image" />

        <hr className="about-hr" />
      </section>

      <section className="section-about">
        <div className="container-about">
          <h2 className="heading-secondary-2">Why work with me</h2>
          <p className="p-large">
            There’s nothing I enjoy more than designing and developing good
            websites for people. It really is that simple.
          </p>
          <p className="p-normal">
            I enjoy working in a team environment, and I get along well with
            people. I love to help resolve group issues through research and
            communication. I'm also very friendly!
          </p>
          <p className="p-normal">
            If you’ve got a project you’d like to work on with me just get in
            touch and we can get to work!
          </p>
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
      <Footer />
    </React.Fragment>
  )
}

export default About
