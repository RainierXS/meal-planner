import { ingredient, inventory } from './ReducerKeys';

import { ingredient as defaultState } from './StaticData'

const IngredientsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case inventory.add:
    case ingredient.add:
      const { id, name, type, unit } = action.payload;
      return state.concat({ id, name, type, unit }); // replace with api call in action
    case ingredient.remove:
      return state.filter(i => i.id !== action.payload); // replace with api call in action
    default:
      break;
  }
  return state;
};

export default IngredientsReducer;
