import React, { Component } from 'react'
import Header from '../components/Header'
import Info from '../components/Info'

export default class Main extends Component {
  render() {
    return (
      <div className='content'>
        <Header />
        <Info />
      </div>
    )
  }
}
