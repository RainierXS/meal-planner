import { combineReducers } from 'redux';
import ingredient from './Ingredient';
import inventory from './Inventory';
import recipe from './Recipe';
import calendar from './Calendar';

const reducers = combineReducers({
  ingredient,
  inventory,
  recipe,
  calendar,
});

export default reducers;
