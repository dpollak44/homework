(function () {
    'use strict';

    const colorTable = document.getElementById('colorTable');

    const colors = [];

    let intervalId;
    let i = 1;

    function colorChanger() {
        let j = i * 4;
        document.body.style.backgroundColor = `rgb(${i * 4},${(i * 2)},${(i * 5)})`;
        document.body.style.color = `rgb(${j},${(j * 2)},${(j * 5)})`;
        const now = new Date();

        const newColor = {
            backgroundColor: document.body.style.backgroundColor,
            textColor: document.body.style.color,
            dateTime: now.toLocaleString()
        };




        if (!colors.length) {
            colorTable.deleteRow(1);
        }

        colors.push(newColor);



        const row = colorTable.insertRow();
        const backgroundColorCell = row.insertCell();
        const textColorCell = row.insertCell();
        const dateTlimeCell = row.insertCell();

        row.addEventListener('click',

            () => {
                document.body.style.backgroundColor = backgroundColorCell.style.backgroundColor;
                document.body.style.backgroundColor = textColorCell.style.backgroundColor;
            });



        backgroundColorCell.style.backgroundColor = newColor.backgroundColor;
        textColorCell.style.backgroundColor = newColor.textColor;
        dateTlimeCell.innerHTML = newColor.dateTime;




        if (i < 250) {

            i++;
        }

        else { i = 0; }

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
            }
        }
    );
}());