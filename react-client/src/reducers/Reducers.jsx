import { combineReducers } from 'redux';
import ingredients from './Ingredients';
import recipes from './Recipes';
import calendar from './Calendar';

const reducers = combineReducers({
  ingredients,
  recipes,
  calendar,
})

export default reducers;
