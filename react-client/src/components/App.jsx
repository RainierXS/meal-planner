import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Routes from '../routes/Routes';
// import IngredientsDrawer from '../partials/IngredientsDrawer';
import NavDrawer from '../layout/NavDrawer';
import MenuBar from '../layout/MenuBar';

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
          <MenuBar showMenu={this.toggleDrawer}/>
          <Route exact path="/" render={() => <Routes.Inventory />} />
          <Route path="/calendar" render={() => <Routes.Calendar />} />
          <Route path="/inventory" render={() => <Routes.Inventory />} />
          <Route path="/recipes" render={() => <Routes.Recipes />} />
          <Route path="/shopping-list" render={() => <Routes.ShoppingList />} />
          <NavDrawer
            show={this.state.navDrawer}
            toggle={() => this.toggleDrawer('navDrawer')}
          />
          {/*<IngredientsDrawer
            show={this.state.ingredientsDrawer}
            toggle={() => this.toggleDrawer('ingredientsDrawer')}
          />*/}
        </div>
      </Router>
    );
  }
}

export default App;
