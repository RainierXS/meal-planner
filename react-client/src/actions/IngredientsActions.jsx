import uuidv4 from 'uuid/v4';
import { ingredients } from '../reducers/ReducerKeys';

const addIngredient = (name, inventory, buyRate) => (dispatch) => {
  dispatch({
    type: ingredients.add,
    payload: {
      id: uuidv4(),
      name,
      inventory,
      buyRate,
    },
  });
};

const removeIngredient = id => ({
  type: ingredients.remove,
  payload: id,
});

export {
  addIngredient,
  removeIngredient,
};
