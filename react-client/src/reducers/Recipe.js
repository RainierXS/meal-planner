import { recipe } from './ReducerKeys';

import { recipe as defaultState } from './StaticData'

const RecipesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case recipe.load:
      break;
    case recipe.loaded:
      break;
    case recipe.add:
      break;
    case recipe.remove:
      break;
    case recipe.changeRecipe:
      break;
    default:
      break;
  }
  return state;
};

export default RecipesReducer;
