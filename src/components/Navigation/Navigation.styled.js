import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  padding-bottom: 10px;
  margin: 10px;
  :hover {
    transition: text-shadow 250ms linear;
   
  }
  &.active {
   
    border-bottom: 1px solid white;
  }
`;
