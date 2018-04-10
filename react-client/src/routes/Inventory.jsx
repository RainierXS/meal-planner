import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
// import TextField from 'material-ui/TextField';
// import { InputLabel } from 'material-ui/Input';
// import { MenuItem } from 'material-ui/Menu';
// import { FormControl } from 'material-ui/Form';
// import Select from 'material-ui/Select';
// import Button from 'material-ui/Button';
// import DeleteForeverIcon from 'material-ui-icons/DeleteForever';
import { connect } from 'react-redux';

import { addIngredient, removeIngredient } from '../actions/IngredientsActions';

import styles from './Routes.css';

@connect((store) => ({
  ingredients: store.ingredients,
}))
class Inventory extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      inventory: '',
      buyRate: 'weekly',
    }
  }
  
  renderIngredients = () => this.props.ingredients.map((i) => {
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
    const {root} = styles;
    return (
      <div className={root}>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <input
            value={this.state.inventory}
            type="number"
            onChange={this.handleChange('inventory')}
            margin="normal"
          />
          {/*<FormControl style={{minWidth:'200px'}}>
            <InputLabel htmlFor="buyRate">Buy Rate</InputLabel>
            <Select
              value={this.state.buyRate}
              onChange={this.handleChange("buyRate")}
              inputProps={{
                name: 'buyRate',
                id: 'buyRate',
              }}
            >
              <MenuItem value={''}>
                <em>None</em>
              </MenuItem>
              <MenuItem value="always">Always</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="daily">Daily</MenuItem>
            </Select>
          </FormControl>*/}
          <select
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
      </div>
    );
  }
};

Inventory.propTypes = {

};

export default Inventory;
