import React, { Component } from "react";
import ButtonGroup from "./ButtonGroup";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="box hidden">
        <h1>Stuff I made:</h1>
        <ButtonGroup type="portfolio" />
      </div>
    );
  }
}
