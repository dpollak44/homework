import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
    return (
        <div className="text-center">
            <h1>PCS Recipes</h1>
            <NavLink to="/recipes">recipe list</NavLink> | <NavLink to="/add">add a recipe</NavLink>
            <hr />
        </div>
    )
}