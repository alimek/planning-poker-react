/**
 *
 * Button
 *
 */

import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
class Button extends React.Component {

  static propTypes = {
    text: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    borderColor: React.PropTypes.string,
    textColor: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    style: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array,
    ]),
    isDisabled: React.PropTypes.bool,
  };

  render() {
    const tmpArray = [styles.button];

    if (this.props.borderColor) {
      tmpArray.push(styles.border);
    }

    const normalStyle = Object.assign({
      borderColor: this.props.borderColor,
      color: this.props.textColor || null,
      background: this.props.backgroundColor || null,
    }, this.props.style);

    const style = classNames(tmpArray, this.props.style);

    return (
      <button
        disabled={this.props.isDisabled}
        onClick={this.props.onClick}
        className={style}
        style={normalStyle}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
