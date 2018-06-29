import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import styled from 'styled-components';
// import '../routes/Routes.css';

const Day = styled.div`
  background: ${(props) => props.theme.accent};
  border-radius: .3rem .3rem 0 0;
  display: inline-block;
  min-height: 2rem;
  margin-bottom: 8px;
  padding: 1px;
  position: relative;
  width: 49%;
  margin: .25%;
  
  &.today {
    &::before, &::after {
      content: '';
      display: inline-block;
      width: 100%;
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: .3rem .3rem 0 0;
      pointer-events: none;
    }
    &::before {
      box-shadow: rgba(254,254,254,1) 0 0 6px 0;
    }
    &::after {
      box-shadow: rgba(254,254,254,1) 0 0 10px 0 inset;
    }
    >.label {
      background: ${(props) => props.theme.primary};
    }
  }

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
  const classes = Moment(date).isSame(Moment(), 'day') ? 'day today' : 'day';
  return !props.blank 
    ? (
      <Day className={classes}>
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
