import React from 'react';
import PropTypes from 'prop-types';

import { CenterContainer } from './styles';

const Center = ({ children }) => (
  <CenterContainer>
    {children}
  </CenterContainer>
);

Center.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Center;
