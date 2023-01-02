import React, { Component } from 'react'
import Button from './Button'

export default class Contact extends Component {
  render() {
    return (
      <div className='box'>
        {/* <h1>Contact me:</h1> */}
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
            color="mauve"
          />
          <Button
            name="@vrkknn"
            icon="telegram"
            iconType="fab"
            link="t.me/vrkknn"
            color="sapphire"
          />
          <Button
            name="Virkkunen"
            icon="github"
            iconType="fab"
            link="github.com/Virkkunen"
            color="grey"
          />
          <Button
            name="WhatsApp"
            icon="whatsapp"
            iconType="fab"
            link="https://wa.link/t1uuz0"
            color="green"
          />
        </div>
      </div>
    )
  }
}
