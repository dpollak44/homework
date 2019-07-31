/*global $*/
(function () {
    'use strict';



    $('#loadButton').click(event => {

        const fileText = $('#fileText');
        const myFile = $('#fileLoader').val();

        fetch(myFile)
            .then(r => {
                if (r.ok) {
                    return r.text();
                } else {
                    throw new Error(r.status);
                }
            })
            .then(text => {
                console.log('it loaded', text);
                fileText.text(text);
            })
            .catch(err => console.error('Failure', err));

        event.preventDefault();
    });

}());