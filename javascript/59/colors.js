(function () {
    'use strict';

    const theBody = document.getElementById('theBody');

    const colorButton = document.getElementById('colorButton');

    colorButton.addEventListener('click', () => {
        const backgroundColor = document.getElementById('backgroundColorSet').value;
        const textColor = document.getElementById('textColorSet').value;
        theBody.style.backgroundColor = backgroundColor.toString();
        theBody.style.color = textColor.toString();
    }

    );








})();