import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Root } from '../components/SharedStyles';
import ContentLabel from '../components/ContentLabel';

@connect((store) => ({
  recipe: store.recipe,
  ingredient: store.ingredient,
}))
class Recipes extends Component{

  render() {
    return (
      <Root>
        <ContentLabel><h3>{this.props.title}</h3></ContentLabel>
        {/* <div>{JSON.stringify(this.props.recipe)}</div> */}
        NYI
      </Root>
    );
  }
};

Recipes.propTypes = {

};

export default Recipes;
