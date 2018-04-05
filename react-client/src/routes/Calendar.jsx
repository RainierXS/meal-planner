import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

import CalendarDay from '../partials/CalendarDay';

import styles from './Routes.css';

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

  monthInfo = (year, month) => {
    const data = {
      dayCount: new Date(year, month, 0).getDate(),
      firstDay: new Date(year, month - 1, 1).getDay(),
    };
    return data;
  }

// TODO: move day generation to its own component
  makeMonth = (y, m) => {
    const month = m - 1;
    const year = y;
    const { dayCount, firstDay } = this.monthInfo(y, m);
    const {blank, day, data, label} = styles;
    const grid = [];
    for(let i = 0; i < new Date(year, month, 1).getDay(); i++){
      grid.push(
        <div class={day+' '+blank}>
        </div>
      );
    }
    for(let i = 1; i <= dayCount; i++){
      grid.push(
        <CalendarDay date={{day: i, month, year}} />
      );
    }
    // for(let i = 6; i > new Date(year, month, dayCount).getDay(); i--){
    //   grid.push(
    //     <div class={day+' '+blank}>
    //     </div>
    //   );
    // }
    return grid;
  }

  render() {
    const {month, year} = this.state;
    const {calendarContainer, month: monthStyle, monthLabel, root} = styles;
    return (
      <div className={root}>
        <input type="number" onChange={({target}) => this.setState({ month: target.value < 1 || target.value > 12 ? month : target.value })} value={month}/>
        <div className={calendarContainer}>
          <div className={monthStyle}>
            <div className={monthLabel}>{this.months[month]} {year}</div>
              {this.makeMonth(year, month)}
          </div>
        </div>
      </div>
    );
  }
};

Calendar.propTypes = {

};

export default Calendar;
