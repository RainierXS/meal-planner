export const ingredient = [
  {id: 0, name: 'boneless chicken breast', type: 'poultry', unit: 'count'},
  {id: 1, name: 'salt', type: 'spice', unit: 'tsp'},
  {id: 2, name: 'pepper', type: 'spice', unit: 'tsp'},
  {id: 3, name: 'honey', type: 'misc', unit: 'serving'},
  {id: 4, name: 'lemon', type: 'fruit', unit: 'count'},
]

export const inventory = [
  {id: 0, quantity: 2, unit: 'count', buyRate: 'weekly'},
  {id: 1, quantity: 999, unit: 'tsp', buyRate: 'seldom'},
  {id: 2, quantity: 999, unit: 'tsp', buyRate: 'seldom'},
  {id: 3, quantity: 20, unit: 'serving', buyRate: 'seldom'},
  {id: 4, quantity: 1, unit: 'count', buyRate: 'daily'},
]

export const recipe = [
  {
    id: 0,
    name: 'honey lemon chicken',
    ingredients: [
      {id: 0, quantity: 1, unit: 'count'},
      {id: 1, quantity: 1, unit: 'tsp'},
      {id: 2, quantity: .5, unit: 'tsp'},
      {id: 3, quantity: 1, unit: 'serving'},
      {id: 4, quantity: 1, unit: 'count'},
    ]
  }
]

export const calendar = [
  {
    date: '2018-06-30',
    recipe: 0,
    meal: 0,
  }
]