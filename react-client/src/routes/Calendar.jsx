import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'moment';
import styled from 'styled-components';

import { fadeInBottom } from '../components/Animations';
import CalendarContainer from '../components/Calendar';

const Root = styled.div`
  margin: auto;
  animation: ${fadeInBottom} .5s ease-in-out;
`;

@connect(store => ({
  calendar: store.calendar,
}))
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 1,
      year: 2018,
    };
  }

  handleChange = (date) => {
    const month = Number(Moment(date).format('MM'));
    const year = Number(Moment(date).format('YYYY'));
    this.setState({ month, year });
  }

  render() {
    const { month, year } = this.state;
    return (
      <Root className="root">
        <CalendarContainer
          month={month}
          year={year}
          value={this.state.month}
          onChange={this.handleChange}
        />
      </Root>
    );
  }
}

Calendar.propTypes = {
  calendar: PropTypes.arrayOf(PropTypes.shape({})),
};

Calendar.defaultProps = {
  calendar: [],
}

export default Calendar;
