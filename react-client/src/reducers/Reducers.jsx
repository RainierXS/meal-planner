import { combineReducers } from 'redux';
import Ingredients from './Ingredients';
import Recipes from './Recipes';
import MealPlan from './MealPlan';

const Reducers = combineReducers({
  Ingredients,
  Recipes,
  MealPlan,
})

export default Reducers;
