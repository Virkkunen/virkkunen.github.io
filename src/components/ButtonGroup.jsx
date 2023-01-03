import React, { Component } from 'react'
import Button from "./Button";

export default class ButtonGroup extends Component {
  render() {
    const { type } = this.props;
    const json = require("../data/buttons.json");
    const buttons = (json[type]);
    return (
      <div className='buttons'>
        {buttons.map((link) => (
            <Button
              key={link.name}
              name={link.name}
              icon={link.icon}
              iconType={link.iconType}
              link={link.link}
              color={link.color}
            />
          ))}
      </div>
    )
  }
}
