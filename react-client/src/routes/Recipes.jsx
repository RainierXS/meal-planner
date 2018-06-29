import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Root } from '../components/SharedStyles';

@connect((store) => ({
  recipe: store.recipe,
  ingredient: store.ingredient,
}))
class Recipes extends Component{

  render() {
    return (
      <Root>
        Recipes <br />
        {JSON.stringify(this.props.recipe)}
      </Root>
    );
  }
};

Recipes.propTypes = {

};

export default Recipes;
