import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { icon, iconType, name, color, link } = this.props;
    return (
      <a
        type='button'
        name={ name }
        className={ color }
        href={ link }
        target="_blank"
        rel="noreferrer noopener"
      >
        { icon && <FontAwesomeIcon icon={[iconType, icon]} size="lg"/> }
        { name }
      </a>
    )
  }
}
 