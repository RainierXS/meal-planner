import React from 'react';
import { Link } from 'react-router-dom';

const NavDrawer = (props) => {
  const menuItems = [
    { title: 'Calendar', to: '/calendar' },
    { title: 'Inventory', to: '/inventory' },
    { title: 'Recipes', to: '/recipes' },
    { title: 'Shopping List', to: '/shopping-list' },
  ];

  return (
    <div
      open={props.show}
      onClose={props.toggle}
    >
      {menuItems.map(i => (
        <Link to={i.to} href={i.to} key={i.to} onClick={props.toggle}>
          {i.title}
        </Link>
      ))}
    </div>
  );
};

export default NavDrawer;
