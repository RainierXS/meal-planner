import React from 'react';
import PropTypes from 'prop-types';
import { Root } from '../components/SharedStyles';
import Calendar from '../components/Calendar';
import ContentLabel from '../components/ContentLabel';

const CalendarRoute = (props) => (
  <Root className="root">
    <ContentLabel><h3>{props.title}</h3></ContentLabel>
    <Calendar />
  </Root>
);

CalendarRoute.propTypes = {
};

CalendarRoute.defaultProps = {
}

export default CalendarRoute;
