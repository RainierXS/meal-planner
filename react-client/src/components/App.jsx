import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';

import IngredientsDrawer from '../partials/IngredientsDrawer';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: false,
    };
  }

  toggleDrawer = (drawer) => {
    const state = {};
    state[drawer] = !this.state[drawer];
    this.setState(state);
  }

  render() {
    return (
      <div className="app">
        <AppBar
          title="Menu Planner"
          onLeftIconButtonClick={() => this.toggleDrawer('ingredients')}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <IngredientsDrawer show={this.state.ingredients} toggle={() => this.toggleDrawer('ingredients')} />
      </div>
    );
  }
}

export default App;
