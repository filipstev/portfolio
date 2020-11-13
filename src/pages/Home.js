import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'

const Home = () => {
  useEffect(() => window.scrollTo(0, 0), [])
  return (
    <React.Fragment>
      <Header />
      <HomeContent />
      <Footer />
    </React.Fragment>
  )
}

export default Home
