/*global $*/
(function () {
    'use strict';

    const spinner = $('.spinner-border');
    spinner.hide();

    $('#loadButton').click(event => {

        const fileText = $('#fileText');
        const myFile = $('#fileLoader').val();
        spinner.show();

        fetch(myFile)
            .then(r => {
                if (r.ok) {
                    return r.text();
                } else {
                    throw new Error(r.status);
                }
            })
            .then(text => {
                fileText.text(text);
            })
            .catch(err => console.error('Failure', err));

        event.preventDefault();
        // get correct code from class fileshv
        // .finally(() => spinner.hide());
    });

}());