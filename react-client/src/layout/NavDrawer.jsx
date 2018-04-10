import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/Menu/MenuItem';

const NavDrawer = (props) => {
  const menuItems = [
    { title: 'Calendar', to: '/calendar' },
    { title: 'Inventory', to: '/inventory' },
    { title: 'Recipes', to: '/recipes' },
    { title: 'Shopping List', to: '/shopping-list' },
  ];

  return (
    <Drawer
      open={props.show}
      onClose={props.toggle}
    >
      {menuItems.map(i => (
        <Link to={i.to} href={i.to} key={i.to} onClick={props.toggle}>
          {i.title}
          {/*<MenuItem
            onClick={props.toggle}
          >
            {i.title}
          </MenuItem>*/}
        </Link>
      ))}
    </Drawer>
  );
};

export default NavDrawer;
