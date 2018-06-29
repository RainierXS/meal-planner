import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import styled from 'styled-components';

import CalendarMonth from './CalendarMonth';

const Button = styled.button`
  border: 0;
  background: none;
  color: inherit;
  font-weight: inherit;
  height: 3em;
  width: 20%;
  transition: box-shadow .25s ease-in;
  border-radius: ${props => props.right ? '0 1rem 0 0' : '1rem 0 0 0'};
  &:hover, &:focus {
    color: ${(props) => props.theme.fg};
    outline: 0;
    box-shadow: ${(props) => props.theme.text} 0 0 15px 0;
  }
`;
const CalendarContainer = styled.div`
  min-height: 2rem;
  max-width: 1040px
  padding:0;
  text-align: center;
`;
const Icon = styled.i`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
`;
const Label = styled.div`
  background: ${(props) => props.theme.fourth};
  border-radius: 1rem 1rem 0 0;
  border-bottom: 1px solid ${(props) => props.theme.accent};
  color: ${(props) => props.theme.text};
  font-size: 16px;
  font-weight: bold;
  margin: auto;
  margin-bottom: 8px;
  width: 100%
  @media (min-width: 50em) {
    font-size: 2vw;
  }  
  @media (min-width: 75em) {
    font-size: 1.5em;
  }
`;
const LabelButton = styled.button`
  border: 0;
  background: none;
  color: inherit;
  font-weight: inherit;
  height: 3em;
  margin: 0 1%;
  width: 58%;
  transition: box-shadow .25s ease-in;
  &:hover, &:focus {
    color: ${(props) => props.theme.fg};
    outline: 0;
    box-shadow: ${(props) => props.theme.text} 0 0 15px 0;
  }
`;
const Month = styled.div`
  background: darkslateblue;
  border-radius: 1rem 1rem 0 0;
  min-height: 2rem;
  padding:0;
  padding-bottom: .75em;
`;

const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Moment().startOf('month'),
      showReset: false,
    };
  }

  componentDidMount = () => {
    this.setState({ date: Moment().startOf('month') }, () => this.props.onChange(this.state.date.format('YYYY-MM-DD')));
  }

  handleChange = (dir) => {
    let date = Moment(this.state.date).startOf('month');
    if (dir === '=') {
      date = Moment().startOf('month');
    } else if (dir === '+') {
      date.add(1, 'M');
    } else {
      date.subtract(1, 'M');
    }
    this.setState({ date }, () => this.props.onChange(this.state.date.format('YYYY-MM-DD')));
  }

  render() {
    const { month, year } = this.props;
    return (
      <CalendarContainer className="calendarContainer">
        <Month className="month">
          <Label className="monthLabel">
            <Button onClick={() => this.handleChange('-')}>
              <Icon className="material-icons">skip_previous</Icon>
            </Button>
            <LabelButton onMouseEnter={() => this.setState({showReset: true})} onMouseLeave={() => this.setState({showReset: false})}>
              { this.state.showReset
                ? <Icon className="material-icons">replay</Icon>
                : `${months[month]} ${year}`
              }
            </LabelButton>
            <Button onClick={() => this.handleChange('+')} right>
              <Icon className="material-icons">skip_next</Icon>
            </Button>
          </Label>
          <CalendarMonth month={month} year={year} />
        </Month>
      </CalendarContainer>
    );
  }
}

Calendar.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Calendar;
