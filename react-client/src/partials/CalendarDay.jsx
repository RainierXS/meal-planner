import React from 'react';

import styles from '../routes/Routes.css';

const CalendarDay = (props) => {
  const daysOfWeek = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
  }
  
  const { date } = props;
  const {day, data, label } = styles;
  return (
    <div class={day}>
      <div class={label}>{date.day} {daysOfWeek[new Date(date.year, date.month, date.day).getDay()]}</div>
      <div class={data}>+ -</div>
      <div class={data}>+ -</div>
      <div class={data}>+ -</div>
    </div>  
  )
}

export default CalendarDay;