import React, { Component } from 'react'
import Button from './Button'

export default class Info extends Component {
  render() {
    return (
      <div className='infobox'>
        <h1>Contact me:</h1>
        <div className='buttons'>
          <Button
            name="fredalmeida-"
            icon="linkedin"
            iconType="fab"
            link="https://www.linkedin.com/in/fredalmeida-/"
            color="blue"
          />
          <Button
            name="fred@vrkknn.net"
            icon="envelope"
            iconType="fas"
            link="mailto:vrkknn@vrkknn.net"
            color="teal"
          />
          <Button
            name="@vrkknn"
            icon="telegram"
            iconType="fab"
            link="t/me/vrkknn"
            color="sapphire"
          />
        </div>
      </div>
    )
  }
}
