/*global $*/

(function () {
    'use strict';


    const form = $('#form');


    const recipeDisplay = $('#recipeDisplay');


    const fetchRecipe = function (url) {
        fetch(url)
            .then(r => {
                if (r.ok) {
                    return r.json();
                } else {
                    throw new Error(r.status);
                }
            })
            .then(json => recipeDisplay.html(json))

            .catch(err => console.error('Failure', err));
    };






    fetch('recipes.json')
        .then(r => {
            if (r.ok) {
                return r.json();
            } else {
                throw new Error(r.status);
            }
        })
        .then(json => {
            form.change(() => {

                const radioVal = $('[type=radio]').val();

                json.forEach(element => {

                    if (element.name === radioVal) {
                        fetchRecipe(element.url);
                    }
                });
            })
                .catch(err => console.error('Failure', err));

        });




}());