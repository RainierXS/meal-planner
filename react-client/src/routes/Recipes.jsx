import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


@connect((store) => ({
  recipes: store.recipes,
  ingredients: store.ingredients,
}))
class Recipes extends Component{

  render() {
    return (
      <div className="root">
        Recipes
      </div>
    );
  }
};

Recipes.propTypes = {

};

export default Recipes;
