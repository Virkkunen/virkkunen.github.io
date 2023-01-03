import React, { Component } from 'react'
import 'devicon';

export default class Devicon extends Component {
  render() {
    const { name, iconStyle, svgStyle = 'original', size = '1rem', color = '', svg } = this.props;
    
    if (svg) {
      const srcLink = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${svgStyle}.svg`;
      return (
        <img
          src={srcLink}
          alt={name}
          width={size}
          height={size}
        />
      )
    };
    
    // <i class="devicon-adonisjs-original"></i>
    // <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" />
    // <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
          
    const iconClass = `devicon-${name}-${iconStyle} colored`;
   
    let style = {
      fontSize: size,
    };
    if (size) style.fontSize = size;
    if (color) style.color = color;

    return (
      <i
        className={iconClass}
        style={style}
      />
    )
  }
}
