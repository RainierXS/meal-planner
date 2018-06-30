import uuidv4 from 'uuid/v4';
import { ingredient } from '../reducers/ReducerKeys';

const addIngredient = (payload) => (dispatch) => {
  dispatch({
    type: ingredient.add,
    payload: {
      ...payload,
      id: uuidv4(),
    },
  });
};

const removeIngredient = id => ({
  type: ingredient.remove,
  payload: id,
});

export {
  addIngredient,
  removeIngredient,
};
