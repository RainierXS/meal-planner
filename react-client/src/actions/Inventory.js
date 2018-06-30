import uuidv4 from 'uuid/v4';
import { inventory } from '../reducers/ReducerKeys';

const addInventory = (payload) => (dispatch) => {
  dispatch({
    type: inventory.add,
    payload: {
      ...payload,
      id: uuidv4(),
    }
  });
};

const changeInventory = payload => ({
  type: inventory.change,
  payload,
});

const removeInventory = payload => ({
  type: inventory.remove,
  payload,
});

export {
  addInventory,
  changeInventory,
  removeInventory,
};
