import { inventory } from './ReducerKeys';

import { inventory as defaultState } from './StaticData'

const InventoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case inventory.add: 
      const { id, quantity, unit, buyRate } = action.payload;
      return state.concat({ id, quantity, unit, buyRate }); // replace with api call in action
    case inventory.change:
      return state.map(i => i.id === action.payload.id ? {...action.payload} : {...i}); // replace with api call in action
    case inventory.remove:
      return state.filter(i => i.id !== action.payload); // replace with api call in action
    default:
      break;
  }
  return state;
};

export default InventoryReducer;
