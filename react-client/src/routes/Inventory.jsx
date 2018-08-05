import React from 'react';
import PropTypes from 'prop-types';
import { Root } from '../components/SharedStyles';
import Inventory from '../components/Inventory';
import ContentLabel from '../components/ContentLabel';

const InventoryRoute = (props) => (
  <Root className="root">
    <ContentLabel><h3>{props.title}</h3></ContentLabel>
    {/* <Inventory /> */}
    NYI
  </Root>
);

InventoryRoute.propTypes = {

};

export default InventoryRoute;
