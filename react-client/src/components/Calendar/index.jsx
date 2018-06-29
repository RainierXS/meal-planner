import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import styled, {keyframes} from 'styled-components';

import CalendarMonth from './CalendarMonth';

const Button = styled.button`
  border: 0;
  background: rgba(255,255,255,0);
  color: inherit;
  font-weight: inherit;
  height: 3em;
  width: 20%;
  transition: box-shadow .5s ease-in, background .25s ease-in-out;
  border-radius: ${props => {
    if(props.right) return '0 1rem 0 0';
    if(props.left) return '1rem 0 0 0 ';
    return '0';
  }};
  &:hover {
    color: ${(props) => props.theme.fg};
    box-shadow: black 3px 3px 20px -7px inset;
  }
  &:focus, &:hover {
    outline: 0;
  }
  &:active {
    background: rgba(255, 255, 255, .3);
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
const LabelButton = styled(Button)`
  margin: 0 1%;
  width: 58%;
  &>i { display: none; }
  &::before {
    ${({data, theme}) => `
      content: '${data}';
    `}
  }
  &:hover>i { display: inherit; }
  &:hover::before { content: ' '; }
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
    };
  }

  componentDidMount = () => {
    this.props.onChange(this.state.date.format('YYYY-MM-DD'));
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
    const { date } = this.state;
    const YMD = date.format('YYYY/MM/DD').split('/').map((n) => Number(n));
    return (
      <CalendarContainer className="calendarContainer">
        <Month className="month">
          <Label className="monthLabel">
            <Button onClick={() => this.handleChange('-')} left>
              <Icon className="material-icons">skip_previous</Icon>
            </Button>
            <LabelButton data={`${months[YMD[1]]} ${YMD[0]}`} onClick={() => this.handleChange('=')}>
              <Icon className="material-icons">replay</Icon>
            </LabelButton>
            <Button onClick={() => this.handleChange('+')} right>
              <Icon className="material-icons">skip_next</Icon>
            </Button>
          </Label>
          <CalendarMonth month={YMD[1]} year={YMD[0]} />
        </Month>
      </CalendarContainer>
    );
  }
}

Calendar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Calendar;
