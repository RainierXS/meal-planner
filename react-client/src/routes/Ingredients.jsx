import React from 'react';
import PropTypes from 'prop-types';
import { Root } from '../components/SharedStyles';
import Ingredients from '../components/Ingredients';
import ContentLabel from '../components/ContentLabel';

const IngredientsRoute = (props) => (
  <Root className="root">
    <ContentLabel><h3>{props.title}</h3></ContentLabel>
    <Ingredients />
  </Root>
);

IngredientsRoute.propTypes = {

};

export default IngredientsRoute;