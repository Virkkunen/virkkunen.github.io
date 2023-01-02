import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { icon, iconType, name, link, color } = this.props;
    return (
      <button
        type='button'
        name={ name }
        className={ color }
      >
        <FontAwesomeIcon icon={[iconType, icon]} size="lg"/>
        { name }
      </button>
    )
  }
}
 