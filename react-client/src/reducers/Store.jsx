import { createStore, applyMiddleware } from 'redux';
import Reducers from './Reducers';
import thunk from 'redux-thunk';

import {addIngredient, removeIngredient} from '../actions/IngredientsActions';
//const Store = createStore(Reducers);


const logger = store => next => (action) => {
  console.log("action dispatched", action);
  next(action);
}

const Middleware = applyMiddleware(logger, thunk);

const Store = createStore(Reducers, Middleware);

Store.subscribe(() =>
  console.log("Store updated", Store.getState())
)

Store.dispatch(addIngredient("banana", 3, "daily"));
Store.dispatch(addIngredient("apple", 4, "weekly"));
Store.dispatch(addIngredient("banana", 3, "daily"));
Store.dispatch(addIngredient("apple", 4, "weekly"));
Store.dispatch(addIngredient("banana", 3, "daily"));
Store.dispatch(addIngredient("apple", 4, "weekly"));
//Store.dispatch(removeIngredient("aa"));


export default Store;
