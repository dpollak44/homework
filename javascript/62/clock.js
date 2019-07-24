(function () {
    'use strict';


    let second = 1000;

    function pad(num) {
        return ('0' + num).slice(-2);
    }

    let timer = function () {
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();

        document.getElementById("clock").innerHTML = pad(h) + ':' + pad(m) + ':' + pad(s);

    };



    setInterval(timer, second);

})();

//////////////////////////////////////

window.pcs = {};
window.pcs.util = (function () {
    'use strict';


    let leftMargin = 0;


    return function () {


        const clock = document.createElement('div');
        clock.style.position = 'fixed';
        clock.style.bottom = '0';

        clock.style.margin = 'auto';
        clock.style.border = '7px solid lightgray';
        clock.style.backgroundColor = 'black';
        clock.style.color = 'lawngreen';
        clock.style.fontSize = '3em';
        clock.style.width = '200px';
        clock.style.height = '2em';
        clock.style.left = `${leftMargin}px`;
        clock.style.textAlign = 'center';
        document.body.appendChild(clock);

        leftMargin += 200;



        let second = 1000;

        let s = 0;
        let m = 0;
        let h = 12;

        function pad(num) {
            return ('0' + num).slice(-2);
        }



        let timer = function () {

            if (s > 59) {
                s = 0;
                if (m > 59) {
                    m = 0;
                    if (h > 12) {
                        h = 1;
                    }
                } else { m++; }
            }
            else { s++; }




            clock.innerHTML = pad(h) + ':' + pad(m) + ':' + pad(s);

        };


        return setInterval(timer, second);
    };



})();





