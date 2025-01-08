class Car {
    model: string;
    plate: string;
    color: string;
    year: number;

    constructor(comingModel: string, comingPlate: string, comingColor: string, comingYear: number) {
        this.model = comingModel;
        this.plate = comingPlate;
        this.color = comingColor;
        this.year = comingYear;
        this.carStatus('avanzando...')
    }

    carStatus(status: string) {
        console.log(status);
        
    }
}

const car01 = new Car('Toyota', 'NHL9053', 'Black', 2015);
console.log(car01);