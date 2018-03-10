import { calendar } from './ReducerKeys';

const defaultState = [];

const CalendarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case calendar.load:
      break;
    case calendar.loaded:
      break;
    case calendar.add:
      break;
    case calendar.remove:
      break;
    case calendar.changeMeal:
      break;
    default:
      break;
  }
  return state;
};

export default CalendarReducer;
