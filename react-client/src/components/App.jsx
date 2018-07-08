import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Routes from '../routes/Routes';
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
  max-width: 100vh;
   > * {
  transition: margin .5s ease-in;
    margin: 0em 2em;
   }
  @media (min-width: 1200px) {
    max-width: 1080px;
  }
  @media (min-width: 50em) {
     > * {
      margin: 0 1em 0 calc(64px + 1.5em);
     }
    max-width: 100vw;
    transition: margin .25s ease-in;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawer: false,
      route: '',
    };
  }

  toggleDrawer = (drawer, open = true) => {
    const state = {};
    state[drawer] = open;
    this.setState(state);
  }

  makeRoute = (r) => {
    return <Route key={r.to} path={r.to} render={() => <r.route {...this.props} title={r.title} />} />
  }

  render() {
    return (
      <Router>
        <FlexContainer className="app">
          <MenuBar onClick={this.toggleDrawer} show={this.state.navDrawer} />
          <Content>
            <Route exact path="/" render={() => <Redirect to="/inventory" />} />
            {Routes.map(this.makeRoute)}
          </Content>
        </FlexContainer>
      </Router>
    );
  }
}

export default App;
