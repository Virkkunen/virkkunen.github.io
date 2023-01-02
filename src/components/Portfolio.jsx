import React, { Component } from 'react'
import Button from './Button'

export default class Portfolio extends Component {
  

  render() {
    return (
      <div className='box hidden'>
        <h1>Stuff I made:</h1>
        <div className='buttons'>
        <Button
            name="Art portfolio"
            icon="behance"
            iconType="fab"
            link="https://www.behance.net/vrkknn"
            color="blue"
          />
          <Button
            name="Trybe Projects: Fundaments"
            icon="html5"
            iconType="fab"
            link="https://github.com/Virkkunen/trybe/tree/master/fundamentos/projetos"
            color="green"
          />
          <Button
            name="Trybe Projects: Frontend"
            icon="react"
            iconType="fab"
            link="https://github.com/Virkkunen/trybe/tree/master/frontend/projetos"
            color="green"
          />
          <Button
            name="Timer"
            icon="clock"
            iconType="fas"
            link="/timer"
            color="red"
          />
        </div>
      </div>
    )
  }
}
