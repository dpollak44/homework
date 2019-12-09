import React, { Component } from 'react';
import './App.css';
import RecipeDetails from './RecipeDetails';

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        name: 'Quiche',
        ingredients: ['flour', 'eggs', 'broccoli'],
      },
      {
        id: 2,
        name: 'Blintzes',
        ingredients: ['flour', 'eggs', 'cheese'],
      }
    ]
  }

  handleSelectRecipe = (event, recipe) => {
    this.setState({
      selectedRecipe: recipe
    });
  }


  render() {

    const recipeList = <ul className="bulletlessList">{this.state.recipes.map(recipe => <li key={recipe.id} onClick={event => this.handleSelectRecipe(event, recipe)}>{recipe.name}</li>)}</ul>;
    const recipeDetails = this.state.selectedRecipe ?
      <RecipeDetails recipe={this.state.selectedRecipe} /> :
      <h3>Please choose one of our delicious recipes</h3>;
    return (
      <div className="App">
        <h1>Recipes</h1>
        {recipeList}
        {recipeDetails}
      </div>
    );
  }
}
export default App;
