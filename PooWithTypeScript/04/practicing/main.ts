// class CustomMath {

//     public static resta(x: number, y: number): number {
//         return x - y;
//     }

//     public static resta(x: number, y: number, z: number): number {
//         return x - y;
//     }
// }

// console.log(CustomMath.resta(30, 10));


/* 
TypeScript permite realizar sobrecarga de funciones (overload), pero de manera diferentes a lenguajes como Java o C#.

En TypeScript, puedes declarar multiples firmas de función (overload signatures) y luego manejar una única implementación que maneje todas esas firmas.

En TypeScript, no puedes no puedes definir multiples implementaciones del mismo método o función dentro
de una clase. Esto generara un error porque estarías
intentando implementar el método multiples veces.
*/


/* class CustomMath {
    // overload
    public static resta(x: number, y: number): number;
    public static resta(x: number, y: number, z?: number): number;

    public static resta(x: number, y: number, z?: number): number {
        if (z !== undefined) {
            return x - y - z;
        } else {
            return x - y;
        }
    }
}

class CustomMath2 extends CustomMath {
    // override
    public static resta(x: number, y: number, z?: number): number {
        if (z !== undefined) {
            console.log('Im override');
            return x - y + z;
        } else {
            return x - y;
        }
    }
} */



/* 
Modificador override
--------------------

Usar el modificador override es una forma de garantizar que
un metodo en una clase derivada realmente sobreescribe un
metodo de su clase base.

• Confirma la sobreescritura: Garantiza que el metodo o propiedad en la clase derivada esta sobre escribiendo uno definido en la clase base.

• Evita errores accidentales: Si no existe un metodo o propiedad con el mismo nombre en la clase base, TypeScript lanzara un error en tiempo de compilacion.

No es obligatorio usar override, pero es altamente recomendable, porque:

• Ayuda a evitar errores, como escribir mal el nombre en la
clase derivada.

• Mejora la claridad del codigo al indicar explicitamente que el metodo sobreescribe uno existetnte.

Sin override, el codigo funcionara igual, pero no tendra la validacion adicional.

*** El modificador override solo es aplicable a metodos o propiedades NO ESTATICAS definidos en una clase base y sobre escritos en una clase derivada.

• Metodos Estaticos no permiten override.

• Si necesitas redefinir un método estático en una clase derivada, simplemente redefínelo sin override.

• Si es posible, considera usar métodos de instancia si deseas aprovechar el comportamiento de override.
*/


/* class Animal {
    hacerSonido(): void {
        console.log('El animal esta haciendo un sonido');
    }
}

class Perro extends Animal {
    override hacerSonido(): void {
        console.log('Ladrando');
    }
}

const miPerro = new Perro();
miPerro.hacerSonido(); */
// console.log(miPerro.hacerSonido();


// console.log(CustomMath.resta(30, 10));
// console.log(CustomMath.resta(30, 10, 5));
// console.log(CustomMath2.resta(40, 20, 10));



/* ------------------------------------------------------------------ */
// Interface

/* interface Car {
    brand: string;
    model: string;
    year: number;
    plate: string;
    color: string;

    break?(): string;
}

class Tesla {
    public propertys: Car;

    constructor () {
        this.propertys = {
            brand: 'Tesla',
            model: 'Tesla X',
            year: 2025,
            plate: 'NHL8967',
            color: 'White',

            break: () => {
                return 'Im breaking my new Tesla model X'
            }
        }
    }
}

const teslaX = new Tesla();
console.log(teslaX.propertys.break?.()); */



/* class Tesla implements Car {
    public brand: string;
    public model: string;
    public year: number;
    public plate: string;
    public color: string;

    // constructor(brand: string, model: string, year: number, plate: string, color: string) {
    //     this.brand = brand;
    //     this.model = model;
    //     this.year = year;
    //     this.plate = plate;
    //     this.color = color;
    // }

    constructor(carDetails: Car) {
        this.brand = carDetails.brand;
        this.model = carDetails.model;
        this.year = carDetails.year;
        this.plate = carDetails.plate;
        this.color = carDetails.color;
    }

    break(): string {
        return 'Tesla is breaking!';
    }
} */

// const teslaX = new Tesla(
//     'Tesla',
//     'Model X',
//     2025,
//     'NHL8567',
//     'White'
// );

// const teslaX = new Tesla({
//     brand: 'Tesla',
//     model: 'Model X',
//     year : 2025,
//     plate: 'NHL4055',
//     color: 'White',

//     break() {
//         return this.break()
//     },
// });

/* const teslaDetails: Car = {
    brand: 'Tesla',
    model: 'Model X',
    year : 2025,
    plate: 'NHL4055',
    color: 'White',
};

const teslaX = new Tesla(teslaDetails);

console.log(teslaX.break()); */


/* class People {
    constructor (
        public nombre: string,
        public edad: number
    ) {}
}

class Person1 {
    // public person: People = {
    //     nombre: 'Engels',
    //     edad: 29
    // }

    public person: People = new People('Stalin', 29);
}

const x = new Person1().person.nombre;
console.log(x); */



/* ------------------------------------------------------------------ */
// Polimorfismo

/* 
En la Programacion orientada a objetos (POO), el polimorfismo es la capacidad de un objeto para responder de manera diferente a un mismo mensaje. Esto significa que los objetos pueden adoptar distintas formas, o ejecutar diferentes operaciones, dependiendo del cotexto.

El polimorfismo es un concepto fundamental en POO, ya que permite que el codigo sea mas flexible y adaptable a diferentes situaciones.

VENTAJAS DEL POLIMORFISMO

• Permite expandir la funcionalidad del programa sin modificar el codigo existente.

• Simplifica la logica del codigo, lo que mejora su legibilidad y claridad.

• Fomenta la desacoplacion y la modularidad del codigo.

COMO FUNCIONA EL POLIMORFISMO

• El polimorfismo se puede lograr a traves de la sobreescritura de metodos.

• En la sobreescritura de metodos, una subclase proporciona su propia implementacion de un metodo que ya ha sido definido en su superclase.
*/

/* 
Polimorfismo en tiempo de compilacion (estatico)

• Este tipo de polimorfismo ocurre en el momento de la compilacion y se implementa mediante sobrecargas de metodos o sobre carga de operadores.
*/

/* class Calculadora {
    sumar(a: number, b: number): number;
    sumar(a: number, b: number, c: number): number;
    sumar(a: number, b: number, c?: number): number {
        return c !== undefined ? a + b + c : a + b;
    }
}

const calc = new Calculadora();
console.log(calc.sumar(2, 3));
console.log(calc.sumar(2, 3, 4)); */


/* 
Polimorfismo en tiempo de ejecucion (dinamico)

• Este tipo ocurre durante la ejecucion del programa y se logra mediante la herencia y sobreescritura de metodos.

• Es cuando una clase hija redefine un metodo de su clase padre para proporcionar su propia implementacion, pero puede ser llamada de manera uniforme a traves de la referencia del padre.
*/

/* class Animal {
    hacerSonido(): void {
        console.log("Sonido genérico de un animal");
    }
}

class Perro extends Animal {
    hacerSonido(): void {
        console.log("Guau guau");
    }
}

class Gato extends Animal {
    hacerSonido(): void {
        console.log("Miau miau");
    }
}

const animales: Animal[] = [new Perro(), new Gato(), new Animal()];

animales.forEach((animal) => animal.hacerSonido()); */


/* 
Ventajas del polimorfismo

• Flexibilidad: Permite escribir codigo generico que puede trabajar con diferentes tipos de objetos.

• Reutilizacion: El mismo metodo o interfaz se puede usar para diferentes implementaciones.

• Excalabilidad: Facilita la ampliacion del sistema al agregar nuevas clases sin cambiar el codigo existente.
*/



/* ------------------------------------------------------------------ */
// Clases Abstractas

/* 
En la programación orientada a objetos (POO), las clases abstractas son clases que no pueden ser instanciadas directamente, pero que sirven como base para crear otras clases.

Las clases abstractas se utilizan para definir un comportamiento general que las clases que las heredan deben implementar.

CARACTERISTICAS DE LAS CLASES ABSTRACTAS

• No pueden ser instanciadas, es decir, no se pueden crear objetos a partir de ellas.

• Representan la funcionalidad comun de un cojunto de tipos de objetos.

• Se utilizan como clases base de una jerarquia.

• Permiten reutilizar el codigo de una forma eficiente.

COMO UTILIZAR UNA CLASE ABSTRACTA

Para utilizar una clase abstracta, se debe heredar de ella y proporcionar una implementación para todos los métodos abstractos definidos en la clase.
*/

/* abstract class Animal {
    constructor(public nombre: string) {}

    // Método abstracto: debe ser implementado en clases hijas
    public abstract hacerSonido(): void;

    // Método con implementación
    public comer(): void {
        console.log(`${this.nombre} está comiendo`);
    }
}

class Perro extends Animal {
    public hacerSonido(): void {
        console.log('Guau Guau');
    }
}

const perro = new Perro('Firulais');
perro.hacerSonido();
perro.comer(); */



/* ------------------------------------------------------------------ */
// Genericos

/* 
Los genericos permiten que un componente (funcion, clase o interfaz) trabaje con tipos diferentes, pero de una manera que garantiza que el tipo que uses sea consistente en toda la implementacion.

Los genericos en TypeScript son una forma de escribir codigo reutilizable y flexible, que puede trabajar con multiples tipos mientras mantiene la seguridad de tipos.

Son utiles cuando no sabes de antemano que tipo de datos manejara tu codigo.

POR QUE SON UTILES LOS GENERICOS?

• Reutilizables: Escribes codigo una vez y lo puedes usar con diferentes tipos.

• Consistencia: Garantiza que los tipos son consistentes dentro de la logica.

• Seguridad de tipos: Evitan errores al garantizar que los tipos coincidan.
*/

/*
// USO DE GENERICOS EN FUNCIONES
// Sin genericos
function person(name:any) {
    return name;
}

const result = person(20); // "any", pierde el tipo original
console.log(result);
// Aqui usamos any, pero TypeScript no sabe que tipo retorna la funcion. Podrias terminar con errores porque se pierde la seguridad de tipos.

// Con genericos
function tipo <T> (valor: T): T {
    return valor
}

const numero = tipo <number> (50);
const texto = tipo <string> ('Texto');
console.log(numero);
console.log(texto);
*/


/*
// USO DE GENERICOS EN CLASES
class Caja <T> {
    private contenido: T;

    constructor(contenido: T) {
        this.contenido = contenido;
    }

    obtenerContenido(): T {
        return this.contenido;
    }
}

// Crear una caja de números
const cajaNumero = new Caja <number> (123);
console.log(cajaNumero.obtenerContenido());

// Crear una caja de cadenas
const cajaTexto = new Caja <string> ('Hola');
console.log(cajaTexto.obtenerContenido());
*/



/*
//USO DE GENERICOS EN INTERFACES
interface Par <K, V> {
    clave: K;
    valor: V;
}

const par: Par <string, number> = {
    clave: 'edad',
    valor: 30,
}

console.log(par.clave);
console.log(par.valor);
*/



// RESTICCONES DE GENERICOS
/* Cuando usas genéricos en TypeScript, puedes trabajar con cualquier tipo. Sin embargo, a veces necesitas limitar el conjunto de tipos permitidos para garantizar que tu código solo funcione con tipos que tengan ciertas propiedades o comportamientos.

Esto se logra usando la palabra clave extends, que actúa como una restricción para el tipo genérico. */

/*
function imprimirId <T extends { id: number }> (objeto: T): string {
    return `El ID es: ${objeto.id}`
}

console.log(imprimirId({ id: 1}));
*/



/* // GENERICOS CON MULTIPLES PARAMETROS
function combinar<T, U>(primero: T, segundo: U): [T, U] {
    return [primero, segundo];
}

const resultado = combinar<string, number>('Hola', 42);
console.log(resultado); */



// CLASES GENERICAS
interface Producto {
    id: number;
    nombre: string;
}

interface Usuario {
    id: number;
    nombre: string;
    edad: number;
}

class Caja<T> {
    public contenido: T;

    constructor(valor: T) {
        this.contenido = valor; // El contenido será del tipo definido al crear la instancia
    }

    public obtenerContenido(): T {
        return this.contenido;
    }

    public actualizarContenido<U>(nuevoValor: U): U {
        // Este método usa un genérico independiente de la clase
        return nuevoValor;
    }
}

// 1. Instanciamos la clase usando un tipo específico (Producto)
const cajaProducto = new Caja<Producto>({ id: 1, nombre: 'Laptop' });
console.log(cajaProducto.obtenerContenido()); // { id: 1, nombre: 'Laptop' }

// 2. Actualizamos el contenido usando un tipo independiente (Usuario)
const nuevoUsuario = cajaProducto.actualizarContenido<Usuario>({ id: 2, nombre: 'Stalin', edad: 30 });
console.log(nuevoUsuario); // { id: 2, nombre: 'Stalin', edad: 30 }

// 3. Instanciamos la clase sin especificar el tipo genérico (asume any)
const cajaGenerica = new Caja('Cualquier cosa');
console.log(cajaGenerica.obtenerContenido()); // 'Cualquier cosa'

// 4. Llamamos al método con un genérico independiente
const nuevoValor = cajaGenerica.actualizarContenido<number>(42);
console.log(nuevoValor); // 42