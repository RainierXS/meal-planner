import React from 'react';
import styled from 'styled-components';

const IconButton = styled.button`
  border: 0;
  background: none;
  padding: 0;
  margin: .5em;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 55px;
  background: darkviolet;
  align-items: center;
  border-bottom: 2px solid lime;
  z-index: 10;
`;

const Header = styled.h2`
  flex-grow: 1;
  text-align: center;
`;

const MenuIcon = styled.i`
  font-size: 2rem;
  padding: 0;
  margin: 0;
  box-shadow: black 0px 0px 1px 0px;
  vertical-align: middle;
`;

const MenuBar = (props) => {
  return (
    <FlexDiv>
      <IconButton
        className='icon-button'
        color="inherit"
        aria-label="Menu"
        onClick={() => props.showMenu('navDrawer')}
      >
        <MenuIcon class="material-icons">menu</MenuIcon>
      </IconButton>
      <Header className=''>
        Menu Planner
      </Header>
    </FlexDiv>
  )
}

export default MenuBar;
