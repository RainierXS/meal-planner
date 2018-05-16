import React from 'react';

const MenuBar = (props) => {
  return (
    <div>
      <div>
        <button
          className=''
          color="inherit"
          aria-label="Menu"
          onClick={() => props.showMenu('navDrawer')}
        >
          {/*<MenuIcon />*/}Menu
        </button>
        <h2 className=''>
          Menu Planner
        </h2>
      </div>
    </div>  
  )
}

export default MenuBar;
