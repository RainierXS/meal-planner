import React, { Component } from 'react';
import {connect} from 'react-redux';

import {removeIngredient} from '../actions/IngredientsActions';

@connect(state => ({
    Ingredients: state.Ingredients
}))
class App extends Component {
  
  renderIngredients = () => {
    return this.props.Ingredients.map((i) => {
      const { id } = i;
      return <p key={id}>{JSON.stringify(i)}<button onClick={() => this.props.dispatch(removeIngredient(id))}>X</button></p>
    })
  }
    
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.renderIngredients()}
        </div>
      </div>
    );
  }
}

export default App;
