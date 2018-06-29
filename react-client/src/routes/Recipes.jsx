import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Root } from '../components/SharedStyles';

@connect((store) => ({
  recipes: store.recipes,
  ingredients: store.ingredients,
}))
class Recipes extends Component{

  render() {
    return (
      <Root>
        Recipes
      </Root>
    );
  }
};

Recipes.propTypes = {

};

export default Recipes;
