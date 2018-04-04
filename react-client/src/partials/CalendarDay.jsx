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
  
  const {day, month, year} = props;
  const {day: dayStyle, data, label } = styles;
  return (
    <div class={dayStyle}>
      <div class={label}>{day} {daysOfWeek[new Date(year, month, day).getDay()]}</div>
      <div class={data}>+ -</div>
      <div class={data}>+ -</div>
      <div class={data}>+ -</div>
    </div>  
  )
}

export default CalendarDay;