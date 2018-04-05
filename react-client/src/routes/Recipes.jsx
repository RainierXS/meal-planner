import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

import styles from './Routes.css';

@connect((store) => ({
  recipes: store.recipes,
  ingredients: store.ingredients,
}))
class Recipes extends Component{

  render() {
    const {root} = styles;
    return (
      <div className={root}>
        Recipes
      </div>
    );
  }
};

Recipes.propTypes = {

};

export default Recipes;
