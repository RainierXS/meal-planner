import React from 'react';

// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
// import RestaurantIcon from 'material-ui-icons/Restaurant';

import styles from '../components/App.css';

const MenuBar = (props) => {
  return (
    <div>
      <div>
        <button
          className={styles.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={() => props.showMenu('navDrawer')}
        >
          {/*<MenuIcon />*/}Menu
        </button>
        <h2 className={styles.flex}>
          Menu Planner
        </h2>
        {/*<button
          color="inherit"
          aria-label="Ingredients"
          onClick={() => props.showMenu('ingredientsDrawer')}
        >
          {<RestaurantIcon />}Food
        </button>*/}
      </div>
    </div>  
  )
}

export default MenuBar;
