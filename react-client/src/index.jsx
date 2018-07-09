/* eslint-disable no-unused-expressions */
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { ThemeProvider, injectGlobal } from 'styled-components';
import App from './components/App';
import store from './reducers/Store';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const theme = {
  bg: '#202020',
  fg: 'rgba(32, 32, 32, 1)',
  text: 'rgba(254, 254, 254, 1)',
  placeholder: 'rgba(254, 254, 254, .5)',
  primary: 'darkslateblue',
  secondary: 'midnightblue',
  tertiary: 'rgba(148, 156, 157, 1)',
  fourth: 'rgba(128, 136, 137, 1)',
  accent: 'rgba(213, 241, 17, 1)',
  warning: 'orangered',
};

injectGlobal`
  html { height: 100%; width: 100%; }
  body {
    height: 100%; width: 100%;
    background: ${theme.bg};
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }
`;

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
document.getElementById('app'));
