/*global $*/

(async function () {
    'use strict';


    const theInput = $('#theInput');

    const theTable = $('#theTable tbody');


    try {
        let res = await fetch('/app.js');

        if (!res.ok) {
            throw new Error(` ${res.error}`);
        }

        let fruitsAndVeggies = await res.json();

        fruitsAndVeggies.forEach(fv => {
            $(`<tr>
            <td>${fv.name}</td>
            <td>
                <button class="edit">edit</button>
                <button class="delete">delete</button>
            </td>
         </tr>`).appendTo(theTable);
        });


    } catch (error) {
        console.log(error);
    };

}());


