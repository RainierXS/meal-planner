import ReducerKeys from "../reducers/ReducerKeys";
const { Ingredients } = ReducerKeys;

const addIngredient = (name, inventory, buyRate) => ({
  type: Ingredients.add,
  payload: {name, inventory, buyRate},
});


const removeIngredient = (id) => ({
  type: Ingredients.remove,
  payload: id,
});

export {
  addIngredient,
  removeIngredient
};
