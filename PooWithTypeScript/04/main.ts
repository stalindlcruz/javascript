// class CustomMath {

//     public static sumar(x: number, y: number):number {
//         return x + y;
//     }

// }

// class CustomMath2 extends CustomMath {

//     public static sumar(x: number, y: number): number {
//         const r = x+y;
//         console.log(r)
//         return r;
//     }
// }

// console.log(CustomMath2.sumar(2,3))
// overrride
// overload

// class Animal {
//     public name: string;
    
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// class Perro extends Animal {
     
//      constructor(name: string) {
//         super(name);
//      }

// }

// const animal: Animal = new Perro('')

// interface Animal {

//     nombre: string;
    
//     accion(): string;

// }

// class Gato implements Animal {

//     public nombre: string;

//     constructor(nombre: string) {
//         this.nombre = nombre;
//     }

//     public accion(): string {
//         return '';
//     }
// }

// class Gatico extends Gato{
//     public accion(): string {
//         //////////
//         const c = '';
//         return '';
//     }
// }


// interface Datos {
//     nombre:string;
//     apellido: string;
//     edad: number;
//     comer(): string;
// }

// class Solicitud {

//     public datos: Datos;

//     constructor() {
//         this.datos = {
//             nombre: 'Stalin',
//             apellido: 'De la Cruz',
//             edad: 29,
//             comer: ()=>'',
//         }
//     }
// }

// class Model {
//     constructor(
//         public nombre: string,
//         public edad: number
//     ) {}
// }

// class Model2 extends Model {}

// class X {

    // public persona: Model = {
    //     nombre: '',
    //     edad: 3
    // }

    // public persona: Model = new Model('', 2);
//     public persona: Model = new Model('', 2);



// }

// new X().persona

// abstract class Animal {

//     public abstract dormir(): void;

//     public abstract tipo: any;

//     constructor(public nombre: string) {}

//     public comer(): void {
//         console.log('------');
//     }

//     public abstract accionar(): void
// }

// class Perro extends Animal {

//     public tipo: any;

//     public dormir() {
       
//     }

//     public comer(): void {
//         console.log('------');
//         console.log('------');
//         console.log('------');
//     }

//     public accionar() {
//     console.log('////////')
//        console.log('Ladrar')
//     } 

// }

// class Gato extends Animal {

//     public tipo: any;

//     public dormir() {
       
//     }

//     public accionar() {
//        console.log('Maullar')
//     } 

// }


// class X{

//     public disparador(animal: Animal ) {
//         animal.accionar();
//     }
// }


// new X().disparador(new Gato(''))
// new X().disparador(new Perro(''))


// class X {

//     // constructor(public _generico: T){}

//     public comer<T>(value: T): T {
//         return value
//     }
// }

// new X().comer<string>('123')
// new X(2)
// new X(true)


interface DatosPersonales {
    nombre: string;
    edad: number;
}

interface DatosPersonales2 {
    nombre: string;
    edad: number;
    apellido: string;
}

class X <T>{
    

    public pepito: T;

    constructor(o: T) {
        this.pepito = o
    }

    public capturarDatos(datos:any): any {
 
        return datos;
    }

    public capturarDatos2<T>(datos:T ): T {
        return datos;
    }
}

new X<string>('')

// new X<string>().capturarDatos({nombre: '', edad: 123, q: 343, jhfjs: ''})
// new X().capturarDatos2<DatosPersonales>({nombre: '', edad: 12})
// new X().capturarDatos2<DatosPersonales2>({nombre: '', edad: 12, apellido:''})