import React, { Component } from 'react'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Languages from '../components/Languages'
import CV from '../components/CV'
import Footer from '../components/Footer'

export default class Main extends Component {
  render() {
    return (
      <div className='content'>
        <Header />
        <Contact />
        <CV />
        <Languages />
        <Footer />
      </div>
    )
  }
}
