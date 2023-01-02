import React, { Component } from 'react'
import { ReactOriginal, Html5Original, Css3Original, JavascriptOriginal, PythonOriginal, GitOriginal, BootstrapOriginal, MarkdownOriginal, JiraOriginal, DockerOriginal, DjangoPlain, VscodeOriginal, PhotoshopLine, PremiereproOriginal, LinuxOriginal, Windows8Original, AppleOriginal, AndroidOriginal, BashOriginal, GithubOriginal, RaspberrypiOriginal, ReduxOriginal, TrelloPlain } from 'devicons-react'

export default class Languages extends Component {
  render() {
    const size = "48px";
    return (
      <div className='box'>
        <h1>Stuff I know:</h1>
        <div className='buttons-small'>
          <AndroidOriginal size={size} />
          <AppleOriginal size={size} />
          <BashOriginal size={size} />
          <BootstrapOriginal size={size} />
          <Css3Original size={size} />
          <DjangoPlain size={size} />
          <DockerOriginal size={size} />
          <GitOriginal size={size} />
          <GithubOriginal size={size} />
          <Html5Original size={size} />
          <JavascriptOriginal size={size} />
          <JiraOriginal size={size} />
          <LinuxOriginal size={size} />
          <MarkdownOriginal size={size} />
          <PhotoshopLine size={size} />
          <PremiereproOriginal size={size} />
          <PythonOriginal size={size}/>
          <RaspberrypiOriginal size={size} />
          <ReactOriginal size={size} />
          <ReduxOriginal size={size} />
          <TrelloPlain size={size} />
          <VscodeOriginal size={size} />
          <Windows8Original size={size} />
        </div>
      </div>
    )
  }
}
