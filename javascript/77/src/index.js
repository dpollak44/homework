/*global $*/
// (function () {
'use strict';
import $ from 'jquery';
let nameInput = $("#nameInput");
nameInput.change(() => {
    $("#name").html(nameInput.val());
    console.log(nameInput.val());
});


// }());