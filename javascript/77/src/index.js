/*global $*/
// (function () {
'use strict';
import $ from 'jquery';
import webpack from 'webpack';
new webpack.BannerPlugin({
    banner: 'hello world'
});
let nameInput = $("#nameInput");
nameInput.change(() => {
    $("#name").html(nameInput.val());
    console.log(nameInput.val());
});


// }());