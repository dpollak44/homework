
window.pcs = window.pcs || {};

window.pcs = function (id) {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, style) {
        element.style[property] = style;
    }

    function getCss(element, property) {
        return getComputedStyle(element)[property];
    }

    const elem = get(id);

    return {

        keyValMaker: function (key, value) {
            elem.key = value;
            return this;
        },

        getKeyVal: function (key) {
            console.log(elem.key);
            return elem.key;
        },


        flashColors: function (interval, stopInterval) {
            function getColorPart() {
                return Math.floor(Math.random() * 256);
            }

            function getRandomColor() {
                const r = getColorPart();
                const g = getColorPart();
                const b = getColorPart();

                return `rgb(${r},${g},${b})`;
            }
            const colorInterval = setInterval(() => {
                elem.style.color = getRandomColor();
            }, interval);

            setTimeout(function () { clearInterval(colorInterval); }, stopInterval);
            return this;
        },

        css: function (property, style) {
            //console.log(arguments);
            if (arguments.length < 2) {
                return getCss(elem, property);
            }
            setCss(elem, property, style);
            return this;
        },
        hide: function () {
            setCss(elem, 'display', 'none');
            return this;
        },
        show: function () {
            setCss(elem, 'display', 'block');
            return this;
        },
        click: function (callback) {
            elem.addEventListener('click', callback);
            return this;
        }
    };
};