import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import '../routes/Routes.css';

const Day = styled.div`
  background: ${(props) => props.theme.accent};
  border-radius: .3rem .3rem 0 0;
  display: inline-block;
  min-height: 2rem;
  margin-bottom: 8px;
  padding: 1px;
  width: 49%;
  margin: .25%;

  @media (min-width: 50em) {
    max-width: calc((100%/7) - .8%);
    width: calc((100%/7) - .8%);
  }
`;

const BlankDay = styled(Day)`
  display: none;
  padding: 0;
  opacity: 0;
  @media (min-width: 50em) {
    display: inline-block;
    min-height: 0;
    max-width: calc((100%/7) - .8%);
    width: calc((100%/7) - .8%);
  }
`;

const Label = styled.div`
  background: ${(props) => props.theme.secondary};
  border-bottom: 1px solid ${(props) => props.theme.accent};
  border-radius: .3rem .3rem 0 0;
  color: ${(props) => props.theme.text};
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  padding: 2px 0;
  text-align: center;
  white-space: nowrap;
  width: 100%;
`;

const Data = styled.div`
  background: ${(props) => props.theme.tertiary};
  color: ${(props) => props.theme.text};
  float: left;
  font-size: 90%;
  padding: 2px 0;
  width: 100%;

  &:nth-child(even) {
    background: ${(props) => props.theme.fourth};;
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
  return !props.blank 
    ? (
      <Day className="day">
        <Label className="label">{date.day} {daysOfWeek[new Date(date.year, date.month, date.day).getDay()]}</Label>
        <Data className="data">+ -</Data>
        <Data className="data">+ -</Data>
        <Data className="data">+ -</Data>
      </Day>
    ) : (
      <BlankDay className="blank day" />
    )
};

// #region CalendarDay propTypes
CalendarDay.propTypes = {
  blank: PropTypes.bool,
  date: PropTypes.shape({
    day: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
  }),
};

CalendarDay.defaultProps = {
  blank: false,
  date: {
    day: 12,
    month: 31,
    year: 1999,
  }
}
// #endregion CalendarDay propTypes

export default CalendarDay;
