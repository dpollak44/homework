
(function () {
    'use strict';

    import $ from "jquery";
    let pick;

    function numPicker() {
        pick = Math.round(Math.random() * 10);
    }

    numPicker();


    $('#number').on('input', () => {
        let guess = $('#number').val();
        console.log(guess);
        if (guess > pick) {
            $('#feedback').html("guess lower");
        }
        else if (guess < pick) {
            $('#feedback').html("guess higher");
        }
        else {
            $('#feedback').html("you got it");
            numPicker();

        }

    }
    );

}());