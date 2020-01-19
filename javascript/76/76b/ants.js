
(function () {
    'use strict';
    const canvas = document.getElementById('theCanvas');
    const defultContext = canvas.getContext('2d');
    const size = 4;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class NewAnt {
        constructor(context, color, speed) {
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.context = context;
            this.color = color;
            this.speed = speed;
            this.brains = 0;
            this.draw();
        }
        move(time) {
            if (--this.brains <= 0) {
                this.brains = NewAnt.randNum(1, 100);
                this.moveX = NewAnt.randNum(-1, 1);
                this.moveY = NewAnt.randNum(-1, 1);
            }



            this.x += (this.moveX * (time * this.speed));
            this.y += (this.moveY * (time * this.speed));


            if (this.x < 0) {
                this.x = 0;
            } else if (this.x > canvas.width - size) {
                this.x = canvas.width - size;
            }

            if (this.y < size) {
                this.y = 0;
            } else if (this.y > canvas.height - size) {
                this.y = canvas.height - size;
            }

            this.draw();
        }

        draw() {
            this.context.fillStyle = this.color;
            this.context.fillRect(this.x, this.y, size, size);
        }
        static randNum(min, max) {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        }
    }

    const ants = [];

    const numInput = document.getElementById('number');
    const colorInput = document.getElementById('color');
    const speedInput = document.getElementById('speed');

    document.getElementById('add').addEventListener('click', () => {
        for (let i = 0; i < numInput.value; i++) {
            ants.push(new NewAnt(defultContext, colorInput.value, speedInput.value));
        }

        let lastTimeStamp;
        function drawAnts(timestamp) {

            if (!lastTimeStamp) {
                lastTimeStamp = timestamp;
            }
            const time = timestamp - lastTimeStamp;


            defultContext.clearRect(0, 0, canvas.width, canvas.height);
            ants.forEach(ant => ant.move(time));

            lastTimeStamp = timestamp;
            requestAnimationFrame(drawAnts);
        }

        requestAnimationFrame(drawAnts);

    })

}());