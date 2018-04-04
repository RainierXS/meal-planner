import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers';
// import reduxLogger from 'redux-logger';

import { addIngredient } from '../actions/IngredientsActions';

// adds support for redux dev tools in chrome
// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middleware = applyMiddleware(thunk, reduxLogger);
const middleware = applyMiddleware(thunk);

const store = createStore(reducers, composeEnhancers(middleware));

store.dispatch(addIngredient('banana', 3, 'daily'));
store.dispatch(addIngredient('apple', 4, 'weekly'));
store.dispatch(addIngredient('banana', 3, 'daily'));
store.dispatch(addIngredient('apple', 4, 'weekly'));
store.dispatch(addIngredient('banana', 3, 'daily'));
store.dispatch(addIngredient('apple', 4, 'weekly'));


export default store;
