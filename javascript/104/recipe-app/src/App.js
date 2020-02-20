import React, { Component } from 'react';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './Header';
import AddRecipe from './AddRecipe';

export default class App extends Component {
  state = {
  }

  getRecipes = recipes => {
    this.setState({
      recipes: recipes
    })
    console.log(this.state.recipes);
  }

  // handleAddRecipe = recipe => {
  //   recipe.id = this.state.recipes.length + 1;
  //   const recipes = [...this.state.recipes, recipe];
  //   this.setState({
  //     recipes: recipes,
  //     selectedRecipe: recipe
  //   });
  // }

  handleAddRecipe = recipe => {
    const recipes = [...this.state.recipes, recipe];
    this.setState({
      recipes: recipes,
      selectedRecipe: recipe
    });
  }


  getRecipeDetails(match) {
    const selectedRecipe = this.state.recipes.find(r => r.id === +match.params.recipeId);
    return (
      selectedRecipe ?
        <RecipeDetails recipe={selectedRecipe} /> :
        <h3>Please choose one of our delicious recipes</h3>
    );
  }

  render() {

    return (
      <div className="container">
        <div>
          <Header />
          <Switch>
            <Route path="/recipes/" render={() =>
              <RecipeList onGetRecipes={this.getRecipes} />}
            />
            {this.state.recipes &&
              <Route path="/recipe/:recipeId" render={({ match }) => this.getRecipeDetails(match)} />}
            <Route path="/add" render={routeProps => <AddRecipe onAddRecipe={this.handleAddRecipe} {...routeProps} />} />
            <Redirect to="/recipes" />
          </Switch>
        </div>
      </div>
    );
  }
}