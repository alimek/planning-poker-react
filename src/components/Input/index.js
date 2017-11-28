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
  label: PropTypes.string,
  transparent: PropTypes.bool,
  value: PropTypes.string,
  inputStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
};

Input.defaultProps = {
  type: 'text',
  label: null,
  style: null,
  placeholder: null,
  isValid: true,
  transparent: false,
  inputStyle: null,
  value: '',
};

export default Input;
