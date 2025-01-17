// class Car {
//     public brand: string;
//     public plate: string;

//     constructor(comingBrand: string, comingPlate: string) {
//         this.brand = comingBrand;
//         this.plate = comingPlate;
//     }
// }

// const car = new Car('Toyota', 'NHL8092');
// console.log(car.brand);


// class Car {

//     constructor(public comingBrand: string,public comingPlate: string) {
//     }

//     public breaking(x:any): void {

//     }
// }

// const car = new Car('Toyota', 'NHL8092');
// console.log(car.comingBrand);


// class Login {
//     private user: string = 'admin';
//     private pass: number = 1234;

//     signIn(user: string, pass: number) {
//         if (user === this.user && pass === this.pass) {
//             console.log('Success Sign In');
//         } else {
//             console.log('Failed Sign In');
//         }
//     }

//     // public setUser(value: string) {
//     //     this.user = value;
//     // }

//     // public getUser() {
//     //     return this.getUser
//     // }

//     set _user(value: string) {
//         this.user = value
//     }

//     get _user() {
//         return this.user
//     }
// }

// const login = new Login();

// // login.setUser('Juan')

// login._user = 'Juan'

// login.signIn('Juan', 1234);

// console.log(login);



// class Person {
//     constructor(private nombre: string) {}

//     public getNombre() {
//         return this.nombre;
//     }
// }

// const persona = new Person('Engels');

// console.log(persona.getNombre());


class Person {
    constructor(private nombre: string) {}

    // public static getNombre() {
    //     return this.nombre;
    // }

    public static getNombre() {
        return 'empty string';
    }
}

// const persona = new Person('Engels');

console.log(Person.getNombre());