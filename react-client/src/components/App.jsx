import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Routes from '../routes/Routes';
import IngredientsDrawer from './IngredientsDrawer';
import MenuBar from '../layout/MenuBar';

const FlexContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 100vh;
`;

const Content = styled.div`
  max-width: 100%;
  margin-left: calc(64px + 1em);
  max-width: 90vw;
  @media (min-width: 1200px) {
    max-width: 1080px;
  }
`;

const ContentLabel = styled.div`
  max-width: 100%;
  max-width: 90vw;
  text-align: center;
  padding-top: 16px;
  align-items: stretch;
  flex-flow: row nowrap;
  display: flex;
  flex-basis: 100%;
  @media (min-width: 1200px) {
    max-width: 1080px;
  }

  >* {
    flex-grow: 1;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsDrawer: false,
      navDrawer: false,
    };
  }

  toggleDrawer = (drawer, open = true) => {
    const state = {};
    state[drawer] = open;
    this.setState(state);
  }

  render() {
    return (
      <Router>
        <FlexContainer className="app">
          <MenuBar showMenu={this.toggleDrawer} />
          <Content>
            <ContentLabel><h3>Meal Planner!</h3></ContentLabel>
            <Route exact path="/" render={() => <Routes.Inventory />} />
            <Route path="/calendar" render={() => <Routes.Calendar />} />
            <Route path="/inventory" render={() => <Routes.Inventory />} />
            <Route path="/recipes" render={() => <Routes.Recipes />} />
            <Route path="/shopping-list" render={() => <Routes.ShoppingList />} />
          </Content>
        </FlexContainer>
      </Router>
    );
  }
}

export default App;
