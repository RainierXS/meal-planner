import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addIngredient, removeIngredient } from '../../actions/Ingredient';
import IngredientForm from './IngredientForm';
import Ingredient from './Ingredient';

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
class Inventory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      unit: '',
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
    const { name, type, unit } = this.state;
    if (e) { e.preventDefault(); }
    if (name && type && unit) {
      this.props.dispatch(addIngredient({ name, type, unit }));
      this.setState({
        name: '',
        type: '',
        unit: '',
        showButton: false,
      });
    }
  }

  renderIngredients = () => this.props.ingredient.map((i) => {
    const { id } = i;
    return <Ingredient {...i} onClickRemove={() => this.props.dispatch(removeIngredient(id))} key={id} />;
  })

  render() {
    const formFields = [
      {
        id: 'name',
        type: 'text',
        value: this.state.name,
        placeholder: 'Ingredient Name',
        width: '50%',
      },
      {
        id: 'type',
        type: 'select',
        value: this.state.type,
        options: [
          'poultry', 'fruit', 'poultry', 'fruit', 'spice', 'misc',
        ],
        placeholder: 'Type',
        width: '25%',
      },
      {
        id: 'unit',
        type: 'select',
        value: this.state.unit,
        options: [
          'count', 'serving', 'teaspoon',
        ],
        placeholder: 'Default Unit',
        width: '25%',
      },
    ];
    const { showButton } = this.state;
    return (
      <Container>
        <IngredientForm onSubmit={this.handleSubmit} onChange={this.handleChange} fields={formFields} showButton={showButton} />
        {this.renderIngredients()}
      </Container>
    );
  }
}

// #region Inventory propTypes
Inventory.propTypes = {
  dispatch: PropTypes.func,
  ingredient: PropTypes.arrayOf(PropTypes.shape({})),
};

Inventory.defaultProps = {
  dispatch: () => console.warn('no redux dispatch found, check redux setup'),
  ingredient: [],
};
// #endregion Inventory propTypes

export default Inventory;
