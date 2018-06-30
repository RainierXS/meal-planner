import { calendar } from './ReducerKeys';

import { calendar as defaultState } from './StaticData'

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
