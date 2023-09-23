import React from 'react'
import Episodes from './Episodes'
import Header from './Header'
import Podcast from './Podcast'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Header />
      <Podcast />
      <Episodes />
      <Footer />
    </div>
  )
}

export default Home
