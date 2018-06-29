import React from 'react';
import styled from 'styled-components';
import Routes from '../routes/Routes'

import { RoutingIconButton } from '../components/SharedStyles';

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
  &.active
`;

const NavMenu = (props) => {
  // const menuItems = [
  //   { title: 'Calendar', to: '/calendar', icon: 'calendar_today' },
  //   { title: 'Inventory', to: '/inventory', icon: 'fastfood' },
  //   { title: 'Recipes', to: '/recipes', icon: 'receipt' },
  //   { title: 'Shopping List', to: '/shopping-list', icon: 'list' },
  // ];
  const { path, onClick } = props;
  return (
    <NavUl>
    {Routes.map(i => (
      <div key={i.to}>
        <li>
          <IconButton
            className={`icon-button${i.to === path ? ' active' : '0'}`}
            color="inherit"
            aria-label={i.title}
            to={i.to}
            href={i.to}
            key={i.to}
            onClick={onClick}
            title={i.title}
          >
            <i class="material-icons">{i.icon}</i>
          </IconButton>
        </li>
      </div>
    ))}
    </NavUl>
  );
}


export default NavMenu;
