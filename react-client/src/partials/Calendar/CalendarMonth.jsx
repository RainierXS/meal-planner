 import React from 'react';
 import CalendarDay from './CalendarDay';
 
 const CalendarMonth = (props) => {
    const month = props.month - 1;
    const year = props.year;
    
    const monthInfo = (year, month) => {
      const data = {
        dayCount: new Date(year, month, 0).getDate(),
        firstDay: new Date(year, month - 1, 1).getDay(),
      };
      return data;
    }
    
    const { dayCount, firstDay } = monthInfo(props.year, props.month);
    const grid = [];
    for(let i = 0; i < new Date(year, month, 1).getDay(); i++){
      grid.push(
        <div className="day blank">
        </div>
      );
    }
    for(let i = 1; i <= dayCount; i++){
      grid.push(
        <CalendarDay date={{day: i, month, year}} key={i} />
      );
    }
    for(let i = 6; i > new Date(year, month, dayCount).getDay(); i--){
      grid.push(
        <div className="day blank">
        </div>
      );
    }
    return grid;
  }
  
  
  export default CalendarMonth;