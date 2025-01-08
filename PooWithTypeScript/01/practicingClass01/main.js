var Car = /** @class */ (function () {
    function Car(comingModel, comingPlate, comingColor, comingYear) {
        this.model = comingModel;
        this.plate = comingPlate;
        this.color = comingColor;
        this.year = comingYear;
        this.carStatus('avanzando...');
    }
    Car.prototype.carStatus = function (status) {
        console.log(status);
    };
    return Car;
}());
var car01 = new Car('Toyota', 'NHL9053', 'Black', 2015);
console.log(car01);
