const defaultState = [
  {
    id: 0,
    name: "Paprika Chickem",
    ingredients: [
      {
        id: 1,
        quantity: 1,
      },
      {
        id: 2,
        quantity: .5,
      }
    ]
  },
  {
    id: 1,
    name: "Salad",
    ingredients: [
      {
        id: 0,
        quantity: 1,
      },
      {
        id: 3,
        quantity: .5,
      },
      {
        id: 4,
        quantity: .25,
      },
    ]
  }
]

const Recipes = (state = defaultState, action) => {
  return state;
}

export default Recipes;