import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import '../routes/Routes.css';

const Day = styled.div`
  background: #aaa;
  border-radius: 2px;
  display: inline-block;
  min-height: 2rem;
  margin-bottom: 8px;
  margin-left: auto;
  margin-right: auto;
  padding: 2px;
  width: 50%;

  @media (min-width: 992px) {
    margin-left: .6%;
    max-width: 13.6%;
    width: 13.6%;
  }
`;

const Label = styled.div`
  background: rgb(0, 45, 96);
  border-radius: .25em;
  color: white;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  padding: 2px 0;
  text-align: center;
  white-space: nowrap;
  width: 100%;
`;

const Data = styled.div`
  background: #888;
  color: white;
  float: left;
  font-size: 90%;
  padding: 2px 0;
  width: 100%;

  &:nth-child(even) {
    background: #999;
  }
`;

const CalendarDay = (props) => {
  const daysOfWeek = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
  };

  const { date } = props;
  return (
    <Day className="day">
      <Label className="label">{date.day} {daysOfWeek[new Date(date.year, date.month, date.day).getDay()]}</Label>
      <Data className="data">+ -</Data>
      <Data className="data">+ -</Data>
      <Data className="data">+ -</Data>
    </Day>
  );
};

// #region CalendarDay propTypes
CalendarDay.propTypes = {
  date: PropTypes.shape({
    day: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};
// #endregion CalendarDay propTypes

export default CalendarDay;
