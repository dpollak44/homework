(function () {
    'use strict';

    const colorTable = document.getElementById('colorTable');



    let intervalId;

    let i = 1;

    let colors = [];

    function colorChanger() {

        let j = i * 4;
        document.body.style.backgroundColor = `rgb(${i * 4},${(i * 2)},${(i * 5)})`;
        document.body.style.color = `rgb(${j},${(j * 2)},${(j * 5)})`;


        const newColor = {
            backgroundColor: document.body.style.backgroundColor,
            textColor: document.body.style.color,
        };


        colors.push(newColor);



        if (i < 250) {

            i++;
        }

        else { i = 0; }

    }

    function colorChangerTable(colors) {
        const row = colorTable.insertRow();
        const backgroundColorCell = row.insertCell();
        const textColorCell = row.insertCell();

        // const dateTimeCell = row.insertCell();


        colors.forEach(newColor => {
            backgroundColorCell.insertAdjacentHTML('beforeend', newColor.backgroundColor);
            textColorCell.insertAdjacentHTML('beforeend', newColor.textColor);
        });



    }







    const startButton = document.getElementById('start');

    startButton.addEventListener('click',

        () => {
            if (!intervalId) {
                intervalId = setInterval(colorChanger, 100);
                startButton.innerHTML = 'Stop';
            } else {
                clearTimeout(intervalId);
                intervalId = 0;
                startButton.innerHTML = 'Start';
                colorChangerTable(colors);

            }
        }
    );
}());

