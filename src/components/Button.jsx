import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

export default class Button extends Component {
  handleClick = () => {
    const { link } = this.props;
    window.location.assign(link);
  };

  render() {
    const { icon, iconType, name, color } = this.props;
    return (
      <button
        type='button'
        name={ name }
        className={ color }
        onClick={ this.handleClick }
      >
        { icon && <FontAwesomeIcon icon={[iconType, icon]} size="lg"/> }
        { name }
      </button>
    )
  }
}
 