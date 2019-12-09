import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import { NavLink } from 'react-router-dom';

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
    const recipeDetails = this.state.selectedRecipe ?
      <RecipeDetails recipe={this.state.selectedRecipe} /> :
      <h3>Please choose one of our delicious recipes</h3>;
    const recipeList = <ul className="bulletlessList">{this.state.recipes.map(recipe => <li key={recipe.id} onClick={event => this.handleSelectRecipe(event, recipe)}>{recipe.name}</li>)}</ul>;

    return (
      <BrowserRouter >
        <div className="App">
          <h1>Recipes</h1>

          <nav>
            <li><NavLink to="/recipeDetails/recipe">{recipeList}</NavLink></li>
          </nav>
          <Route path="/recipeDetails/recipe" component={RecipeDetails} />
        </div>

      </BrowserRouter>

    );
  }
}
export default App;
