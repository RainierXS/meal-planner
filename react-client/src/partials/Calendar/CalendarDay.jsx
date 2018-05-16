import React from 'react';

// import '../routes/Routes.css';

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
  return (
    <div className="day">
      <div className="label">{date.day} {daysOfWeek[new Date(date.year, date.month, date.day).getDay()]}</div>
      <div className="data">+ -</div>
      <div className="data">+ -</div>
      <div className="data">+ -</div>
    </div>  
  )
}

export default CalendarDay;