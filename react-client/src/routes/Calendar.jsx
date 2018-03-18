import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import styles from './Routes.css';

const Calendar = (props) => {

  const daysOfWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  }

  const monthInfo = (year, month) => {
    const data = {
      dayCount: new Date(year, month, 0).getDate(),
      firstDay: new Date(year, month - 1, 1).getDay(),
    };
    return data;
  }

  // TODO: move away from built in grid to custom one?
  const makeMonth = (year, month) => {
    const { dayCount, firstDay } = monthInfo(year, month);
    const grid = [];
    grid.push((
      <Grid item lg={firstDay+2} xs={7}/>
    ));
    for (let i = 1; i <= dayCount; i++) {
      if ((i - firstDay) % 7 === 0) {
        grid.push((
          <Fragment>
            <Grid item lg={3} xs={12} />
            <Grid item lg={2} xs={12} />
          </Fragment>
        ));
      }
      grid.push((
        <Grid item lg={1} xs={12} >
          <Paper className={styles.paper}>
            <h6>{daysOfWeek[new Date(year, month - 1, i).getDay()]}</h6>
            <p>Testing</p>
          </Paper>
        </Grid>
      ));
    }
    return grid;
  }

  return (
    <div className={styles.root}>
      <Grid container spacing={16}>
        <Grid item lg={2} xs={7}/>
        <Grid item lg={7} xs={12}>
          <Paper className={styles.paper}>CALENDAR</Paper>
        </Grid>
        <Grid item lg={3} />
        {makeMonth(2018, 2)}
      </Grid>
    </div>
  );
};

Calendar.propTypes = {

};

export default Calendar;
