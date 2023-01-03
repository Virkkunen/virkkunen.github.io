import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer hidden'>
        <a
          className='footer-item a-footer'
          href="https://github.com/Virkkunen"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
          <span>@Virkkunen</span>
        </a>
        <span>•</span>
        <a
          className='footer-item a-footer'
          href="https://github.com/Virkkunen/virkkunen.github.io"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={['fas', 'code']} size="lg" />
          <span>source</span>
        </a>
      </div>
    )
  }
}
