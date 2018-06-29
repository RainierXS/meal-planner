import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv4 from  'uuid/v4';

import { addInventory, removeInventory } from '../actions/Inventory';
import { Root } from '../components/SharedStyles';

@connect((store) => ({
  ingredient: store.ingredient,
  inventory: store.inventory,
}))
class Inventory extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      type: 'poultry',
      unit: 'count',
      buyRate: 'weekly',
    }
  }
  
  renderIngredients = () => this.props.inventory.map((i) => {
    const { id, quantity, unit, buyRate } = i;
    const { name, type } = this.props.ingredient.filter(n => n.id === i.id)[0];
    return (
      <div key={id}>
        <button
          onClick={() => this.props.dispatch(removeInventory(id))}
        >x</button>
        {name} {quantity} {type} {unit} {buyRate}
      </div>
    );
  })
  
  handleChange = name => e => {
    this.setState({
      [name]: e.target.value,
    });
  };
  
  handleSubmit = (e) => {
    const payload = {...this.state};
    e.preventDefault();
    if(payload.name && payload.quantity && payload.unit && payload.buyRate && payload.type) {
      payload.id = uuidv4();
      this.props.dispatch(addInventory(payload));
      this.setState({
        name: '',
        quantity: '',
        unit: '',
        buyRate: 'weekly',
      });
    }
  }
  
  render() {
    return (
      <Root className="root">
        Inventory
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            id="name"
            placeholder="Ingredient"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <input
            id="quantity"
            placeholder="Inventory"
            value={this.state.quantity}
            type="number"
            onChange={this.handleChange('quantity')}
            margin="normal"
          />
          <select
            id="type"
            placeholder="Type"
            value={this.state.type}
            onChange={this.handleChange("type")}
          >
            <option value="poultry">Poultry</option>
            <option value="fruit">Fruit</option>
            <option value="spice">Spice</option>
            <option value="misc">Misc</option>
          </select>
          <select
            id="unit"
            placeholder="Unit"
            value={this.state.unit}
            onChange={this.handleChange("unit")}
          >
            <option value="count">Count</option>
            <option value="serving">Serving</option>
            <option value="tsp">Teaspoon</option>
          </select>
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
