import uuidv4 from 'uuid/v4';
import { Ingredients } from '../reducers/ReducerKeys';

const addIngredient = (name, inventory, buyRate) => (dispatch) => {
  dispatch({
    type: Ingredients.add,
    payload: {
      id: uuidv4(),
      name,
      inventory,
      buyRate,
    },
  });
};

const removeIngredient = id => ({
  type: Ingredients.remove,
  payload: id,
});

export {
  addIngredient,
  removeIngredient,
};
