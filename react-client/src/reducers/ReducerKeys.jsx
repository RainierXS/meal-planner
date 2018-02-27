const ReducerKeys = {
  Ingredients: {
    load: "LOADING_INGREDIENTS",
    loaded: "LOADING_INGREDIENTS_COMPLETE",
    add: "ADD_INGREDIENT",
    remove: "REMOVE_INGREDIENT",
    changeInventory: "CHANGE_INVENTORY",
  },
  Recipes: {
    load: "LOADING_RECIPES",
    loaded: "LOADING_RECIPES_COMPLETE",
    add: "ADD_RECIPE",
    remove: "REMOVE_RECIPE",
    changeRecipe: "CHANGE_RECIPE",
  },
  MealPlan: {
    load: "LOADING_MEALS",
    loaded: "LOADING_MEALS_COMPLETE",
    add: "ADD_MEAL",
    remove: "REMOVE_MEAL",
    changeMeal: "CHANGE_MEAL",
  }
}

export default ReducerKeys;
