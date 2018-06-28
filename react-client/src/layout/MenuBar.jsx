import React from 'react';
import styled from 'styled-components';

import { IconButton } from '../components/SharedStyles';
import NavMenu from './NavMenu';

const FlexDiv = styled.div`
  background: ${(props) => props.theme.primary};
  border-right: 2px solid ${(props) => props.theme.accent};
  display: flex;
  flex-flow: column wrap;
  flex-basis: 100vh;
  height: 100vh;
  position: fixed;
  transition: all .5s ease-in-out;
  width: 64px;
  z-index: 10;  
  @media (max-width: 50em) {
    background: none;
    border-right: 2px solid transparent;
  }
`;

const FloatIconButton = styled(IconButton)`
  position: fixed;
  float:right;
  color: ${(props) => props.theme.text};
  >i::after {
    box-shadow: ${(props) => props.theme.text} 0 0 8px 0px;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-basis: 100vh;
  height: 100vh;
  margin-top: 64px;
  position: fixed;
  width: 64px;
  z-index: 10;
  transition: inherit;
  @media (max-width: 50em) {
    opacity:0;
    pointer-events: none;
  }
`;

const MenuButton = styled.div`
  transition: inherit;
`;

const MenuBar = (props) => {
  return (
    <FlexDiv>
      <MenuButton>
        <FloatIconButton
          className='icon-button'
          color="inherit"
          aria-label="Menu"
          onClick={() => props.showMenu('navDrawer')}
        >
          <i class="material-icons">menu</i>
        </FloatIconButton>
      </MenuButton>
      <Nav>
        <NavMenu />
      </Nav>
    </FlexDiv>
  )
}

export default MenuBar;
