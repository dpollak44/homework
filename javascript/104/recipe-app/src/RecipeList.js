import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RecipeList extends Component {
    state = {
        recipes: null,
        error: null
    };

    componentDidMount() {

        fetch('http://localhost:4300/recipes')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load recipe list');
                }
                return response.json();
            })
            .then(recipes => {
                this.setState({
                    recipes: recipes
                });

            })
            .then(this.props.onGetRecipes(this.setState.recipes))
            .catch(err => {
                console.error(err);
                this.setState({
                    loading: false,
                    error: err.message ? err.message : 'Failed to load'
                });
            });
    }



    render() {
        const { error, recipes } = this.state;





        if (error) {
            return <h4 className="error">{error}</h4>
        }

        return (
            <>
                {recipes &&
                    <ul className="bulletlessList">
                        {recipes.map(recipe =>
                            <li key={recipe.id}>
                                <Link to={`"/recipe/${recipe.id}"`}>{recipe.name}</Link>
                            </li>)}
                    </ul>}
            </>
        );
    }
}