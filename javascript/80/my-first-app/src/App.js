import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipeg';

class App extends Component {
  state = {
    recipes: [
      {
        name: 'Quiche',
        ingredients: ['flour', 'eggs', 'broccoli']
      },
      {
        name: 'Blintzes',
        ingredients: ['flour', 'eggs', 'cheese']
      }
    ]
  }

  getRecipes() {
    return this.state.recipes.map(recipe => <Recipe recipe={recipe} />);
  }

  render() {

    const recipes = this.getRecipes();



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {recipes}
      </div>
    );
  }
}
export default App;
