import React, { Component } from 'react'
import Devicon from './Devicon';
// import { ReactOriginal, Html5Original, Css3Original, JavascriptOriginal, PythonOriginal, GitOriginal, BootstrapOriginal, MarkdownOriginal, JiraOriginal, DockerOriginal, DjangoPlain, VscodeOriginal, PhotoshopLine, PremiereproOriginal, LinuxOriginal, Windows8Original, AppleOriginal, AndroidOriginal, BashOriginal, GithubOriginal, RaspberrypiOriginal, ReduxOriginal, TrelloPlain } from 'devicons-react'

export default class Languages extends Component {
  render() {
    const size = "48px";
    const json = require("../data/buttons.json");
    const icons = json.devicons;

    return (
      <div className='box'>
        <h1>Stuff I know:</h1>
        <div className='buttons-small'>
          {icons.map((icon) => (
            <Devicon
              name={icon.name}
              iconStyle={icon.iconStyle}
              svgStyle={icon.svgStyle}
              size={size}
              key={icon.name}
              svg={true}
            />
          ))}
        </div>
      </div>
    )
  }
}
