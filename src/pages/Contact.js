import React from 'react'
import '../sass/layout/_contact.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="section-intro">
        <div className="section-intro__content">
          <h1 className="heading-primary">Contact Me</h1>
          <h3 className="heading-tertiary">
            If you’d like to chat about a project please fill in the form below
            and I’ll get back within 1 day.
          </h3>
        </div>
      </section>

      <section className="section-contact">
        <div className="form__container">
          <form action="/send" method="POST" className="form">
            <div className="form__input-container">
              <div className="form__input-container-1">
                <label for="name" className="form__name-label">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__name-input"
                  required
                  autocomplete="off"
                />
              </div>

              <div className="form__input-container-2">
                <label for="email" className="form__email-label">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form__email-input"
                  required
                  id="email"
                  autocomplete="off"
                />
              </div>

              <div className="form__input-container-3">
                <label for="help" className="form__text-label">
                  how can I help?
                </label>
                <textarea
                  name="help"
                  className="form__text-text"
                  required
                  id="text"
                ></textarea>
              </div>

              <button className="btn btn-submit" type="submit">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Contact
