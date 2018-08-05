import React from 'react';
import PropTypes from 'prop-types';

import { Root } from '../components/SharedStyles';
import SelectDropdown from '../components/SelectDropdown';
import ContentLabel from '../components/ContentLabel';

const ShoppingList = (props) => {
  return (
    <Root>
      <ContentLabel><h3>{props.title}</h3></ContentLabel>
      {/* <SelectDropdown title="Select Dropdown"/> */}
      NYI
    </Root>
  );
};

ShoppingList.propTypes = {

};

export default ShoppingList;
