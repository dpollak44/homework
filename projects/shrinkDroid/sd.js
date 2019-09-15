/* global $ */

(function () {
    'use strict';
    const screen = $('#screen');

    screen.text('Welcome');

    setTimeout(function () {
        screen.text('What can I help you with today?');
    }, 5000);

    setTimeout(function () {
        const ul = $("<ul><li>Anxiety?</li><li>PTSD?</li><li>Depression?</li>Eating Disorder?</ul>");
        ul.css("list-style", "none");

        ul.each(() => $(this).click($(this).css("color", "red")));
        // $.each(ul, $(this).click($(this).css("color", "red")));

        // $.each(myArray, function (index, value) {
        // });



        screen.html(ul);
    }, 7000);







}());