import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';
import { Label } from '../../components';

/* eslint-disable react/prefer-stateless-function */
function Input({
  type,
  onChange,
  style,
  inputStyle,
  placeholder,
  name,
  isValid,
  transparent,
  label,
  value,
  onKeyPressed,
}) {
  const realType = type || 'text';

  const stylesArray = [styles.input];
  if (!isValid) stylesArray.push(styles.inputError);
  if (transparent) stylesArray.push(styles.inputTransparent);

  const inputClasses = classNames(stylesArray);

  return (
    <div className={inputClasses} style={style}>
      {label ? <Label name={name} text={label} /> : null}
      <input
        type={realType}
        name={name}
        className={classNames(inputStyle)}
        value={value}
        onKeyDown={onKeyPressed}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

Input.propTypes = {
  type: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  placeholder: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  isValid: React.PropTypes.bool,
  label: React.PropTypes.string,
  transparent: React.PropTypes.bool,
  value: React.PropTypes.string,
  onKeyPressed: React.PropTypes.func,
  inputStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.string,
  ]),
};

export default Input;
