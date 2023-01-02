import React, { Component } from 'react'
import Header from '../components/Header'
import Contact from '../components/Contact'

export default class Main extends Component {
  render() {
    return (
      <div className='content'>
        <Header />
        <Contact />
      </div>
    )
  }
}
