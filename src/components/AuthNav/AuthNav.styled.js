import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuLinkContainer = styled.div`
  display: flex;
`;
export const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  padding-bottom: 12px;
  margin: 12px;
  :hover {
    transition: text-shadow 250ms linear;
    
  }
  &.active {
   
    border-bottom: 1px solid white;
  }
`;
