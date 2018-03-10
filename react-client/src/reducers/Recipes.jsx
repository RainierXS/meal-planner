import { recipes } from './ReducerKeys';

const defaultState = [];

const RecipesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case recipes.load:
      break;
    case recipes.loaded:
      break;
    case recipes.add:
      break;
    case recipes.remove:
      break;
    case recipes.changeRecipe:
      break;
    default:
      break;
  }
  return state;
}

export default RecipesReducer;
