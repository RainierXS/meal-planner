import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'moment';

import { Root } from '../components/SharedStyles';
import CalendarContainer from '../components/Calendar';
import ContentLabel from '../components/ContentLabel';

@connect(store => ({
  calendar: store.calendar,
}))
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.date = Moment().startOf('month').format('YYYY-MM-DD');
    this.path = '/calendar';

  }

  handleChange = (date) => {
    console.log(date);
    this.date = date;
  }

  render() {
    const { month, year } = this.state;
    return (
      <Root>
        <ContentLabel><h3>{this.props.title}</h3></ContentLabel>
        <CalendarContainer
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
