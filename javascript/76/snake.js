(function () {
    'use strict';



    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    //const img = document.getElementById('theImage');

    // img.addEventListener('load', e => {
    //console.log(e);
    // context.drawImage(img, 0, 0);
    //});

    function getRandomNumber() {
        return Math.floor((Math.random() * 10));

    }
    console.log(Math.floor((Math.random() * 10)));


    const APPLE_SIZE = 64;
    let apX = (getRandomNumber() * 64);
    console.log(getRandomNumber() * 64);

    let apY = (getRandomNumber() * 64);



    const apple = new Image();
    apple.src = "images/apple.png";
    context.drawImage(apple, apX, apY, APPLE_SIZE, APPLE_SIZE);

    // const apple2 = new Image();
    // apple2.src = "images/apple.png";
    // context.drawImage(apple2, 20, 20, APPLE_SIZE, APPLE_SIZE);


    const SNAKE_SIZE = 64;
    let direction = 'ArrowRight';
    let snX = -SNAKE_SIZE;
    let snY = 0;
    const snake = new Image();
    snake.src = "images/snakehead.png";

    snake.addEventListener('load', () => {
        setInterval(() => {
            context.clearRect(snX, snY, SNAKE_SIZE, SNAKE_SIZE);
            switch (direction) {
                case 'ArrowLeft':
                    snX -= SNAKE_SIZE;
                    break;
                case 'ArrowRight':
                    snX += SNAKE_SIZE;
                    break;
                case 'ArrowUp':
                    snY -= SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                    snY += SNAKE_SIZE;
                    break;
            }

            context.drawImage(snake, snX, snY, SNAKE_SIZE, SNAKE_SIZE);
            context.drawImage(apple, apX, apY, APPLE_SIZE, APPLE_SIZE);
            bite();
        }, 200);
    });
    snake.addEventListener('error', () => {
        context.strokeText('OOPS', 250, 250);
    });


    document.addEventListener('keydown', event => {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                direction = event.key;
        }
    });

    let score = 0;

    function bite() {
        let bitten = false;
        if (snX === apX && snY === apY) {
            bitten = true;
            console.log(bitten);
            let sound = document.createElement("audio");
            sound.src = ("sounds/snakebite2.m4a");
            sound.setAttribute("preload", "auto");
            sound.setAttribute("controls", "none");
            sound.style.display = "none";
            sound.play();
            score++;
            context.fillText("Score: " + score, 10, 50);

        }
        return bitten;
    }

    context.font = "30px Arial";
    context.fillText("Score: " + score, 10, 50);
    context.textAlign = "center";

}());