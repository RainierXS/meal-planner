import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { RoutingIconButton } from '../components/SharedStyles';
import Drawer from '../components/Drawer';

const NavUl = styled.ul`
  padding: 0;
  margin: 0;
  
  >li{
    list-style: none;
  }
`;

const IconButton = styled(RoutingIconButton)`
  color: ${(props) => props.theme.text};
  >i::after {
    box-shadow: ${(props) => props.theme.text} 0 0 8px 0px;
  }
`;

const NavMenu = (props) => {
  const menuItems = [
    { title: 'Calendar', to: '/calendar', icon: 'calendar_today' },
    { title: 'Inventory', to: '/inventory', icon: 'fastfood' },
    { title: 'Recipes', to: '/recipes', icon: 'receipt' },
    { title: 'Shopping List', to: '/shopping-list', icon: 'list' },
  ];

  const { show, toggle } = props;

  return (
    <NavUl>
    {menuItems.map(i => (
      <div><li key={i.to}>
        <IconButton
          className='icon-button'
          color="inherit"
          aria-label={i.title}
          to={i.to}
          href={i.to}
          key={i.to}
          onClick={toggle}
          title={i.title}
        >
          <i class="material-icons">{i.icon}</i>
        </IconButton>
      </li></div>
    ))}
    </NavUl>
  );
}


export default NavMenu;
