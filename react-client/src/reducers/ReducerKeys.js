const ingredient = {
  load: 'LOADING_INGREDIENTS',
  loaded: 'LOADING_INGREDIENTS_COMPLETE',
  add: 'ADD_INGREDIENT',
  remove: 'REMOVE_INGREDIENT',
};

const inventory = {
  load: 'LOADING_INVENTORY',
  loaded: 'LOADING_INVENTORY_COMPLETE',
  add: 'ADD_INVENTORY',
  remove: 'REMOVE_INVENTORY',
  changeInventory: 'CHANGE_INVENTORY',
};

const recipe = {
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
  ingredient,
  recipe,
  calendar,
};

export {
  key as default,
  ingredient,
  inventory,
  recipe,
  calendar,
};
