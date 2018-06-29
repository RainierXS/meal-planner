import React from 'react';
import { withRouter } from 'react-router'
import styled from 'styled-components';

import { IconButton } from '../components/SharedStyles';
import NavMenu from './NavMenu';


const FlexBase = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-basis: 100vh;
  width: 64px;
  position: fixed;
  z-index: 10;
`;

const FlexDiv = styled(FlexBase)`
  background: ${({theme}) => theme.primary};
  border-right: 2px solid ${({theme}) => theme.accent};
  height: 100vh;
  transition: all .5s ease-in-out;
  ${(props) => props.show 
    ? ''
    : `@media (max-width: 50em) {
      pointer-events: none; 
      width: 1em;
    }` 
  }
`;

const FloatIconButton = styled(IconButton)`
  position: fixed;
  float:right;
  color: ${({theme}) => theme.text};
  pointer-events: all;
  >i::after {
    box-shadow: ${({theme}) => theme.text} 0 0 8px 0px;
  }
`;

const Nav = styled(FlexBase)`
  height: 100vh;
  margin-top: 64px;
  transition: inherit;
  ${(props) => props.show 
    ? '' 
    :`@media (max-width: 50em) {
      opacity:0; 
      pointer-events: none;
    }`
  }
  @media (min-width: 50em) {
    transform: translateY(-64px);
  }
`;

const MenuButton = styled.div`
  transition: inherit;
  @media (min-width: 50em) {
    transform: translateY(-64px);
  }
  
  ${({show}) => show ? 'transform: translateX(0)' : 'transform: translateX(1em)'};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${({theme}) => theme.primary};
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: all .5s ease-in;  
  ${(props) => props.show 
    ? `@media (max-width: 50em) {
      opacity: 0.2;
      pointer-events: all;
    }` 
    : ``
  }
`;

const MenuBar = (props) => {
  const { location: { pathname }, onClick, show } = props;
  return (
    <FlexDiv show={show}>
      <MenuButton show={show}>
        <FloatIconButton
          className='icon-button'
          color="inherit"
          aria-label="Menu"
          onClick={() => onClick('navDrawer')}
        >
          <i class="material-icons">menu</i>
        </FloatIconButton>
      </MenuButton>
      <Nav show={show}>
        <NavMenu path={pathname} onClick={() => onClick('navDrawer', false)} />
      </Nav>
      <Overlay show={show} onClick={() => onClick('navDrawer', false)} />
    </FlexDiv>
  )
}

export default withRouter(MenuBar);
