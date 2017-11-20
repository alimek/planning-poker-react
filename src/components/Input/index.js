import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './styles.css';
import { Label } from '../../components';

const Input = ({
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
}) => {
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
};

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired,
  transparent: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onKeyPressed: PropTypes.func.isRequired,
  inputStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
};

Input.defaultProps = {
  type: 'text',
  style: null,
  placeholder: null,
  isValid: true,
  transparent: false,
  inputStyle: null,
};

export default Input;
