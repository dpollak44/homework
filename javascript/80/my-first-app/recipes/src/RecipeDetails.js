
import React, { Component } from 'react';


export default class RecipeDetails extends Component {

    createList(items) {
        return (
            <ul className="bulletlessList">
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        )
    }

    render() {
        const { name, ingredients } = this.props.recipe;

        return (
            <>
                <h2>{name}</h2>
                <h3>Ingredients</h3>
                {this.createList(ingredients)}
            </>
        );
    }
}
