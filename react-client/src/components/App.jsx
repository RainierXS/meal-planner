import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Routes from '../routes/Routes';
import IngredientsDrawer from './IngredientsDrawer';
import MenuBar from '../layout/MenuBar';

const FlexContainer = styled.div`
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  display: flex;
  flex-flow: column wrap;
  height: 100vh;
`;

const Content = styled.div`
  color: ${(props) => props.theme.text};
  margin: 0 1em 0 calc(64px + 1em);
  max-width: 90vw;
  transition: margin .25s ease-in;
  @media (min-width: 1200px) {
    max-width: 1080px;
  }
  @media (max-width: 50em) {
    margin: 0em 1em;
    max-width: 100vh;
    transition: margin .5s ease-in;
  }
`;

const ContentLabel = styled.div`
  max-width: 100%;
  max-width: 90vw;
  height: 5em;
  text-align: center;
  align-items: stretch;
  flex-flow: row nowrap;
  display: flex;
  flex-basis: 100%;
  @media (min-width: 1200px) {
    max-width: 1080px;
  }

  >* {
    flex-grow: 1;
    align-self: center;
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
            <ContentLabel><h3>Header1</h3></ContentLabel>
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
