window.pcs = window.pcs || {};

window.pcs.messageBox = (function () {
    'use strict';

    const offset = 40;
    const initialTopOffset = -75;
    const initialLeftOffset = -150;
    const width = 300;
    const height = 150;
    let currentTopOffset = initialTopOffset;
    let currentLeftOffset = initialLeftOffset;
    let numberOfOpenMessages = 0;
    let nextZIndex = 1;


    // function buttonChooser() {
    //     // let buttons = new Array(document.getElementById('numButtons').value);

    // }

    function show(msg) {
        const messageBoxDiv = document.createElement('div');
        const span = document.createElement('span');
        span.innerHTML = msg;
        messageBoxDiv.appendChild(span);


        const buttonDiv = document.createElement('div');

        const buttonChooser = document.getElementById('buttonChooser');
        const functionChooser = document.getElementById('functionChooser');
        if (buttonChooser.value === 'yes') {
            let yesButton = document.createElement("button");
            yesButton.innerHTML = 'Yes';
            let noButton = document.createElement("button");
            yesButton.innerHTML = 'No';
            let maybeButton = document.createElement("button");
            yesButton.innerHTML = 'Maybe';
            let buttons = [yesButton, noButton, maybeButton];
            buttons.forEach(element => {
                buttonDiv.appendChild(element);
                if (functionChooser.value === 'yes') {
                    element.addEventListener('click', () => {
                        console.log(element.innerHTML);
                        document.body.removeChild(messageBoxDiv);
                    });
                }
                else {
                    document.body.removeChild(messageBoxDiv);
                }


            });
        } else {
            const okButton = document.createElement('button');
            okButton.innerHTML = 'ok';
            buttonDiv.appendChild(okButton);

            okButton.addEventListener('click', () => {
                if (--numberOfOpenMessages === 0) {
                    //if (!--numberOfOpenMessages) {
                    currentLeftOffset = initialLeftOffset;
                    currentTopOffset = initialTopOffset;
                }
                document.body.removeChild(messageBoxDiv);
            });
        }
        // const button = document.createElement('button');
        // const okButton = document.createElement("button");
        // okButton.innerHTML = 'ok';
        // buttonDiv.appendChild(okButton);
        messageBoxDiv.appendChild(buttonDiv);

        document.body.appendChild(messageBoxDiv);

        // doing css here, could do in css file users should load
        messageBoxDiv.style.backgroundColor = 'lightblue';
        messageBoxDiv.style.position = 'absolute';
        messageBoxDiv.style.top = '50%';
        messageBoxDiv.style.left = '50%';
        messageBoxDiv.style.width = `${width}px`;
        messageBoxDiv.style.height = `${height}px`;
        messageBoxDiv.style.marginLeft = `${currentLeftOffset}px`;
        messageBoxDiv.style.marginTop = `${currentTopOffset}px`;
        messageBoxDiv.style.border = '1px solid black';
        messageBoxDiv.style.boxSizing = 'border-box';
        messageBoxDiv.style.padding = '4px';
        messageBoxDiv.style.textAlign = 'center';
        messageBoxDiv.style.paddingBottom = '30px';

        span.style.overflow = 'auto';
        span.style.height = '100%';
        span.style.display = 'inline-block';

        buttonDiv.style.position = 'absolute';
        buttonDiv.style.bottom = '0';
        buttonDiv.style.left = '0';
        buttonDiv.style.width = '100%';
        buttonDiv.style.marginBottom = '4px';

        // okButton.addEventListener('click', () => {
        //     if (--numberOfOpenMessages === 0) {
        //         //if (!--numberOfOpenMessages) {
        //         currentLeftOffset = initialLeftOffset;
        //         currentTopOffset = initialTopOffset;
        //     }
        //     document.body.removeChild(messageBoxDiv);
        // });

        messageBoxDiv.addEventListener('click', () => {
            messageBoxDiv.style.zIndex = nextZIndex++;
        });

        currentLeftOffset += offset;
        currentTopOffset += offset;

        //if (/*messageBoxDiv.style.left*/(window.innerWidth / 2) + currentLeftOffset + width > window.innerWidth) {
        if (parseInt(getComputedStyle(messageBoxDiv).left, 10) + currentLeftOffset + width > window.innerWidth) {
            currentLeftOffset -= (window.innerWidth - width);
        }
        if (parseInt(getComputedStyle(messageBoxDiv).top, 10) + currentTopOffset + height > window.innerHeight) {
            currentTopOffset -= (window.innerHeight - height);
        }

        numberOfOpenMessages++;
    }

    return {
        show: show
    };
}());