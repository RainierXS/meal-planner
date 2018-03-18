import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/Menu/MenuItem';
import DeleteForeverIcon from 'material-ui-icons/DeleteForever';


import { removeIngredient } from '../actions/IngredientsActions';

@connect(store => ({
  ingredients: store.ingredients,
}))
class IngredientsDrawer extends Component {
  renderIngredients = () => this.props.ingredients.map((i) => {
    const { id } = i;
    return (
      <MenuItem key={id}>
        {i.name}
        <DeleteForeverIcon
          style={{ float: 'right' }}
          tooltip="Remove Item"
          onClick={() => this.props.dispatch(removeIngredient(id))}
        />
      </MenuItem>
    );
  })

  render = () => (
    <Drawer anchor="right" open={this.props.show} onClose={this.props.toggle}>
      <MenuItem disabled>Ingredients</MenuItem>
      <div>{this.renderIngredients()}</div>
    </Drawer>
  )
}

export default IngredientsDrawer;
