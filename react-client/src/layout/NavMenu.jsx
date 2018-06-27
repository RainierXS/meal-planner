import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { RouterIconButton } from '../components/Styles';
import Drawer from '../components/Drawer';

const NavUl = styled.ul`
  padding: 0;
  margin: 0;
  
  >li{
    list-style: none;
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
      <li key={i.to}>
        <RouterIconButton
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
        </RouterIconButton>
      </li>
    ))}
    </NavUl>
  );
}


export default NavMenu;
