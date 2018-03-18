import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import RestaurantIcon from 'material-ui-icons/Restaurant';

import Routes from '../routes/Routes';
import IngredientsDrawer from '../partials/IngredientsDrawer';
import NavDrawer from '../layout/NavDrawer';

import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsDrawer: false,
      navDrawer: false,
    };
  }

  toggleDrawer = (drawer) => {
    const state = {};
    state[drawer] = !this.state[drawer];
    this.setState(state);
  }

  render() {
    return (
      <Router>
        <div className={styles.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className={styles.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={() => this.toggleDrawer('navDrawer')}
              >
                <MenuIcon />
              </IconButton>
              <Typography className={styles.flex} variant="title" color="inherit">
                Menu Planner
              </Typography>
              <IconButton
                color="inherit"
                aria-label="Ingredients"
                onClick={() => this.toggleDrawer('ingredientsDrawer')}
              >
                <RestaurantIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Route exact path="/" render={() => <Routes.Calendar />} />
          <Route path="/calendar" render={() => <Routes.Calendar />} />
          <Route path="/inventory" render={() => <Routes.Inventory />} />
          <Route path="/recipes" render={() => <Routes.Recipes />} />
          <Route path="/shopping-list" render={() => <Routes.ShoppingList />} />
          <NavDrawer
            show={this.state.navDrawer}
            toggle={() => this.toggleDrawer('navDrawer')}
          />
          <IngredientsDrawer
            show={this.state.ingredientsDrawer}
            toggle={() => this.toggleDrawer('ingredientsDrawer')}
          />
        </div>
      </Router>
    );
  }
}

export default App;
