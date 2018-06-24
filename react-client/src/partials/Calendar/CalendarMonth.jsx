import React from 'react';
import styled from 'styled-components';
import CalendarDay from './CalendarDay';

const BlankDay = styled.div`
  background: #aaa;
  border-radius: 2px;
  display: none;
  width: 100%;

  @media (min-width: 992px) {
    display: inline-block;
    margin-left: .6%;
    max-width: 13.6%;
    min-height: 0;
    width: 13.6%;
  }
`;

const CalendarMonth = (props) => {
  const month = props.month - 1;
  const { year } = props;

  const monthInfo = (y, m) => {
    const data = {
      dayCount: new Date(y, m, 0).getDate(),
      // firstDay: new Date(y, m - 1, 1).getDay(),
    };
    return data;
  };

  const { dayCount } = monthInfo(year, props.month);
  const grid = [];
  for (let i = 0; i < new Date(year, month, 1).getDay(); i += 1) {
    grid.push(<BlankDay className="day blank" key={`blankpre${i}`} />);
  }
  for (let i = 1; i <= dayCount; i += 1) {
    grid.push(<CalendarDay date={{ day: i, month, year }} key={i} />);
  }
  for (let i = 6; i > new Date(year, month, dayCount).getDay(); i -= 1) {
    grid.push(<BlankDay className="day blank" key={`blankpost${i}`} />);
  }
  return grid;
};

export default CalendarMonth;
