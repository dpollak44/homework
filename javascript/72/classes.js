(function () {
    'use strict';


    class Vehicle {
        constructor(color) {
            this.color = color;
        }

        go(speed) {
            this.speed = speed;
            console.log(`now going at speed ${this.speed}`);
        }
        print() {
            console.log(`color is ${this.color},current speed is ${this.speed}`);
        }

    }


    class Plane extends Vehicle {
        constructor(color) {
            super(color);
        }

        go(speed) {
            this.speed = speed;
            console.log(`now flying at speed ${this.speed}`);
        }
        print() {
            console.log(`color is ${this.color},current speed is ${this.speed}`);
        }
    }

    const veh1 = new Vehicle('blue');
    veh1.go(80);
    veh1.print();

    const Plane1 = new Plane('black');
    Plane1.go(500);
    Plane1.print();
}());