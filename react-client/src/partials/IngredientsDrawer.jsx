import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import DeleteForeverIcon from 'material-ui/svg-icons/action/delete-forever';


import { removeIngredient } from '../actions/IngredientsActions';

@connect(store => ({
  ingredients: store.ingredients,
}))
class IngredientsDrawer extends Component {
  renderIngredients = () => this.props.ingredients.map((i) => {
    const { id } = i;
    return (
      <MenuItem key={id}>
        <DeleteForeverIcon
          style={{ verticalAlign: 'middle' }}
          tooltip="Remove Item"
          onClick={() => this.props.dispatch(removeIngredient(id))}
          disableTouchRipple
        />
        {i.name}
      </MenuItem>
    );
  })

  render = () => (
    <Drawer
      docked={false}
      open={this.props.show}
      onRequestChange={this.props.toggle}
    >
      <div>{this.renderIngredients()}</div>
    </Drawer>
  )
}

export default IngredientsDrawer;
