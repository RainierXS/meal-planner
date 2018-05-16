import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CalendarDay from '../partials/Calendar/CalendarDay';
import CalendarMonth from '../partials/Calendar/CalendarMonth';

// import './Routes.css';
 
@connect((store) => ({
  calendar: store.calendar,
}))
class Calendar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      month: 1,
      year: 2018,
    }
  }
  
  months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',

  }

  render() {
    const {month, year} = this.state;
    return (
      <div className="root">
        <input type="number" onChange={({target}) => this.setState({ month: target.value < 1 || target.value > 12 ? month : target.value })} value={month}/>
        <div className="calendarContainer">
          <div className="month">
            <div className="monthLabel">{this.months[month]} {year}</div>
              <CalendarMonth month={month} year={year} />
          </div>
        </div>
      </div>
    );
  }
};

Calendar.propTypes = {

};

export default Calendar;
