import uuidv4 from 'uuid/v4';
import ReducerKeys from './ReducerKeys';

const { Ingredients } = ReducerKeys;

const defaultState = [
  // {
  //     id: 0,
  //     name: "Celery",
  //     inventory: 5,
  //     buyRate: "weekly"
  // },
  // {
  //     id: 1,
  //     name: "Chicken",
  //     inventory: 2,
  //     buyRate: "daily"
  // },
  // {
  //     id: 2,
  //     name: "Paprika",
  //     inventory: 50,
  //     buyRate: "on need"
  // },
  // {
  //     id: 3,
  //     name: "Onion",
  //     inventory: 2,
  //     buyRate: "weekly"
  // },
  // {
  //     id: 4,
  //     name: "Lettuce",
  //     inventory: 1, 
  //     buyRate: "weekly"
  // },
];

const IngredientsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Ingredients.add:
      const id = uuidv4();
      return state.concat({...action.payload, id}); // replace with api call in action
    case Ingredients.remove:
      return state.filter((i) => i.id !== action.payload); // replace with api call in action
    default:
    break;
  }
  return state;
}

export default IngredientsReducer;
