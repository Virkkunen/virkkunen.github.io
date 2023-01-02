import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className='header-name'>
          <span>Fred</span> <span className='nick'>"Virkkunen"</span>
          <p>Almeida</p>
        </div>
        <FontAwesomeIcon icon={faUser} size="2x" />
      </header>
    )
  }
}
