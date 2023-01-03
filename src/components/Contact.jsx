import React, { Component } from "react";
import ButtonGroup from "./ButtonGroup";
export default class Contact extends Component {
  render() {
    return (
      <div className="box hidden">
        <h1>Contact me:</h1>
        <ButtonGroup type="contact" />
      </div>
    );
  }
}
