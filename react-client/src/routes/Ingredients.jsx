import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Root } from '../components/SharedStyles';
import Ingredients from '../components/Ingredients';
import ContentLabel from '../components/ContentLabel';


class Inventory extends Component {
  render() {
    return (
      <Root className="root">
        <ContentLabel><h3>{this.props.title}</h3></ContentLabel>
        <Ingredients />
      </Root>
    );
  }
}

Inventory.propTypes = {

};

export default Inventory;
