import { ingredients } from './ReducerKeys';

const defaultState = [];

const IngredientsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ingredients.add: {
      return state.concat({ ...action.payload }); // replace with api call in action
    }
    case ingredients.remove:
      return state.filter(i => i.id !== action.payload); // replace with api call in action
    default:
      break;
  }
  return state;
};

export default IngredientsReducer;
