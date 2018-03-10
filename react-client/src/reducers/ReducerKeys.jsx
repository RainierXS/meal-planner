const ingredients = {
  load: 'LOADING_INGREDIENTS',
  loaded: 'LOADING_INGREDIENTS_COMPLETE',
  add: 'ADD_INGREDIENT',
  remove: 'REMOVE_INGREDIENT',
  changeInventory: 'CHANGE_INVENTORY',
};

const recipes = {
  load: 'LOADING_RECIPES',
  loaded: 'LOADING_RECIPES_COMPLETE',
  add: 'ADD_RECIPE',
  remove: 'REMOVE_RECIPE',
  changeRecipe: 'CHANGE_RECIPE',
};

const calendar = {
  load: 'LOADING_CALENDAR',
  loaded: 'LOADING_CALENDAR_COMPLETE',
  add: 'ADD_CALENDAR',
  remove: 'REMOVE_CALENDAR',
  changeMeal: 'CHANGE_CALENDAR',
};

const key = {
  ingredients,
  recipes,
  calendar,
};

export {
  key as default,
  ingredients,
  recipes,
  calendar,
};
