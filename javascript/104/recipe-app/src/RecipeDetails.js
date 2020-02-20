import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RecipeDetails extends Component {
    state = {
        showPicture: false
    };

    togglePicture = () => {
        this.setState({
            showPicture: !this.state.showPicture
        });
    }

    createList(items) {
        return (
            <ul className="bulletlessList">
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        )
    }

    render() {
        const { name, ingredients, directions, picture } = this.props.recipe;
        const pictureElem = this.state.showPicture ?
            <img className="d-block mx-auto rounded" src={picture} alt={name} style={{ width: 100, height: 100 }} /> :
            null;

        return (
            <>
                <h2>{name}</h2>
                <button onClick={this.togglePicture}>{this.state.showPicture ? 'Hide' : 'Show'} picture</button>
                {pictureElem}
                <h3>Ingredients</h3>
                {this.createList(ingredients)}
                <h3>Directions</h3>
                {this.createList(directions)}
            </>
        );
    }
}

// better would be typescript or flow
RecipeDetails.propTypes = {
    recipe: PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        ingredients: PropTypes.arrayOf(PropTypes.string),
        directions: PropTypes.arrayOf(PropTypes.string),
        picture: PropTypes.string
    }).isRequired
}