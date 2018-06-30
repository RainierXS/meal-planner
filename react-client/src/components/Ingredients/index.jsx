import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addIngredient, removeIngredient } from '../actions/Ingredients';
import { Root } from '../components/SharedStyles';

@connect((store) => ({
  ingredient: store.ingredient,
  inventory: store.inventory,
}))
class Inventory extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      unit: '',
    }
  }
  
  renderIngredients = () => this.props.ingredient.map((i) => {
    const { id, name, inventory, buyRate } = i;
    return (
      <div key={id}>
        <button
          onClick={() => this.props.dispatch(removeIngredient(id))}
        >x</button>
        {name} {inventory} {buyRate}
      </div>
    );
  })
  
  handleChange = name => e => {
    this.setState({
      [name]: e.target.value,
    });
  };
  
  handleSubmit = (e) => {
    const {name, inventory, buyRate} = this.state;
    e.preventDefault();
    if(name && inventory && buyRate) {
      this.props.dispatch(addIngredient(name, inventory, buyRate));
      this.setState({
        name: '',
        inventory: '',
        buyRate: 'weekly',
      });
    }
  }
  
  render() {
    return (
      <Root className="root">
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            id="name"
            placeholder="Ingredient"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <input
            id="inventory"
            placeholder="Inventory"
            value={this.state.inventory}
            type="number"
            onChange={this.handleChange('inventory')}
            margin="normal"
          />
          <select
            id="buyRate"
            placeholder="Buy Rate"
            value={this.state.buyRate}
            onChange={this.handleChange("buyRate")}
          >
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
          </select>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        {this.renderIngredients()}
      </Root>
    );
  }
};

Inventory.propTypes = {

};

export default Inventory;
