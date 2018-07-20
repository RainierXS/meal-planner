import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import styled from 'styled-components';

import { addInventory, removeInventory } from '../../actions/Inventory';
import { Root } from '../SharedStyles';
import HeaderForm from '../HeaderForm';
import ContentLabel from '../ContentLabel';

const Container = styled.div`
  min-height: 2rem;
  max-width: 1040px
  padding:0;
  display: flex;
  flex-flow: row wrap;
  flex-basis: 100%;
`;

@connect(store => ({
  ingredient: store.ingredient,
  inventory: store.inventory,
}))
class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      type: '',
      unit: '',
      buyRate: '',
      showButton: false,
    };
  }

  handleChange = key => (e) => {
    let showButton = true;
    this.setState({
      [key]: e.target.value,
      showButton,
    }, () => {
      const { name, type, unit } = this.state;
      if (!name && !type && !unit) {
        showButton = false;
        this.setState({ showButton });
      }
    });
  };

  handleSubmit = (e) => {
    const payload = { ...this.state };
    e.preventDefault();
    if (payload.name && payload.quantity && payload.unit && payload.buyRate && payload.type) {
      payload.id = uuidv4();
      this.props.dispatch(addInventory(payload));
      this.setState({
        name: '',
        quantity: '',
        type: '',
        unit: '',
        buyRate: '',
      });
    }
  }

  renderIngredients = () => this.props.inventory.map((i) => {
    const { id, quantity, unit, buyRate } = i;
    const { name, type } = this.props.ingredient.filter(n => n.id === i.id)[0];
    return (
      <div key={id}>
        <button
          onClick={() => this.props.dispatch(removeInventory(id))}
        >x
        </button>
        {name} {quantity} {type} {unit} {buyRate}
      </div>
    );
  })

  render() {
    const formFields = [
      {
        id: 'name',
        type: 'text',
        value: this.state.name,
        placeholder: 'Ingredient Name',
        width: 'auto',
      },
      {
        id: 'quantity',
        type: 'number',
        value: this.state.quantity,
        placeholder: 'Quantity',
        width: '15%',
      },
      {
        id: 'type',
        type: 'select',
        value: this.state.type,
        options: [],
        placeholder: 'Type',
        width: '15%',
      },
      {
        id: 'unit',
        type: 'select',
        value: this.state.unit,
        options: [
          'count', 'serving', 'teaspoon',
        ],
        placeholder: 'Default Unit',
        width: '15%',
      },
      {
        id: 'buyRate',
        type: 'select',
        value: this.state.buyRate,
        options: [],
        placeholder: 'Rate',
        width: '15%',
      },
    ];
    const { showButton } = this.state;
    return (
      <Container>
        <ContentLabel><h3>{this.props.title}</h3></ContentLabel>
        <HeaderForm onSubmit={this.handleSubmit} onChange={this.handleChange} fields={formFields} showButton={showButton} />
        {this.renderIngredients()}
      </Container>
    );
  }
}

Inventory.propTypes = {

};

export default Inventory;
