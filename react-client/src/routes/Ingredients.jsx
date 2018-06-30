import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv4 from  'uuid/v4';

import { addIngredient } from '../actions/Ingredient';
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
      type: 'poultry',
      unit: 'count',
    }
  }
  
  renderIngredients = () => this.props.ingredient.map((i) => {
    const { id, name, quantity, type } = i;
    return (
      <div key={id}>
        {name} {quantity} {type}
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
    if(payload.name && payload.unit && payload.type) {
      payload.id = uuidv4();
      this.props.dispatch(addIngredient(payload));
      this.setState({
        name: '',
        type: 'poultry',
        unit: 'count',
      });
    }
  }
  
  render() {
    return (
      <Root className="root">
        Ingredients
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            id="name"
            placeholder="Ingredient"
            value={this.state.name}
            onChange={this.handleChange('name')}
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
