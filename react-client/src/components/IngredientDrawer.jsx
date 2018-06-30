import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeIngredient } from '../actions/Ingredient';

@connect(store => ({
  ingredients: store.ingredients,
}))
class IngredientsDrawer extends Component {
  renderIngredients = () => this.props.ingredients.map((i) => {
    const { id } = i;
    return (
      <li key={id}>
        {i.name}
        <button
          style={{ float: 'right' }}
          onClick={() => this.props.dispatch(removeIngredient(id))}
        >X</button>
      </li>
    );
  })

  render = () => (
    <div anchor="right" open={this.props.show} onClose={this.props.toggle}>
      <li disabled>Ingredients</li>
      <div>{this.renderIngredients()}</div>
    </div>
  )
}

export default IngredientsDrawer;
