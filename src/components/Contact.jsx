import React, { Component } from "react";
import Button from "./Button";
export default class Contact extends Component {
  render() {
    const json = require("../buttons.json");
    const buttons = json.contact;

    return (
      <div className="box">
        <h1>Contact me:</h1>
        <div className="buttons">
          {buttons.map((link) => (
            <Button
              key={link.name}
              name={link.name}
              icon={link.icon}
              iconType={link.iconType}
              link={link.icon}
              color={link.color}
            />
          ))}
        </div>
      </div>
    );
  }
}
