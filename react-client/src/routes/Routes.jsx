import Calendar from './Calendar';
import Ingredients from './Ingredients';
import Inventory from './Inventory';
import Recipes from './Recipes';
import ShoppingList from './ShoppingList';

class Routes {}

Routes.Calendar = Calendar;
Routes.Ingredients = Ingredients;
Routes.Inventory = Inventory;
Routes.Recipes = Recipes;
Routes.ShoppingList = ShoppingList;

export default [
  { title: 'Calendar', to: '/calendar', icon: 'calendar_today', route: Calendar },
  { title: 'Ingredients', to: '/ingredients', icon: 'fastfood', route: Ingredients },
  { title: 'Inventory', to: '/inventory', icon: 'account_balance', route: Inventory },
  { title: 'Recipes', to: '/recipes', icon: 'receipt', route: Recipes },
  { title: 'Shopping List', to: '/shopping-list', icon: 'list', route: ShoppingList },
]

// export default Routes;
