/*global $*/

(async function () {
    'use strict';


    const theInput = $('#theInput');

    const theTable = $('#theTable tbody');

    let fruitsAndVeggies

    try {
        let res = await fetch('/');
        if (!res.ok) {
            const result = await res.json();
            throw new Error(` ${result.error}`);
        }

        let fruitsAndVeggies = await res.json;
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
    }
});

}());