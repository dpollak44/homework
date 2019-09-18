(function () {
    'use strict';



    function Vehicle(color) {
        this.color = color;

    }

    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log('now going at speed', this.speed);
    };

    Vehicle.prototype.print = function () {
        console.log(this.color, this.speed);

    };

    function Plane(color) {
        this.color = color;
    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log('now flying at speed', this.speed);
    };

    const jumboJet = new Plane('blue');
    jumboJet.go(100);
    jumboJet.print();

    const car = new Vehicle('black');
    car.go(50);
    car.print();

}());