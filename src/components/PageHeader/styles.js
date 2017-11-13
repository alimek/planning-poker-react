import styled from 'styled-components';

import PGSLogo from '../../assets/img/pgssoftware-logo-white-150px.png';

export const Header = styled.header`
position: absolute;
  top: 1rem;
  left: 1rem;
  color: white;
  font-size: 2.5rem;
  display: flex;
  flex-direction: row;
`;

export const Logo  = styled.div`
  background: url(${PGSLogo});
  width: 150px;
  height: 100px;
  display: inline-block;
`;

export const LogoText = styled.span`
  align-self: center;
`;
