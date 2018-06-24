import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'moment';
import styled from 'styled-components';

import CalendarContainer from '../partials/Calendar';

const Root = styled.div`
  flex-grow: 1;
  max-width: 80%;
  margin: auto;
  padding-top: 16px;
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
  calendar: PropTypes.arrayOf().isRequired,
};

export default Calendar;
