import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

import styles from './Routes.css';

const ShoppingList = (props) => {
  const {root} = styles;
  return (
    <div className={root}>
      Shopping List
    </div>
  );
};

ShoppingList.propTypes = {

};

export default ShoppingList;
