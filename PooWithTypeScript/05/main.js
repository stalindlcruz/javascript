// https://matiashernandez.dev/blog/post/types-vs-interfaces-cuando-utilizar-cada-una
// https://codigolinea.com/evite-usar-any-use-unknown-en-typescript/
// https://www.typescriptlang.org/docs/handbook/utility-types.html
/*
ABSTRACCION EN PROGRAMACION ORIENTADA A OBJETOS (POO)
-----------------------------------------------------

La abstracción en programación orientada a objetos (POO) es una técnica que simplifica la complejidad de un sistema de software. Permite centrarse en los aspectos más relevantes de un objeto, sin necesidad de conocer los detalles de su funcionamiento.

La abstracción en Programación Orientada a Objetos (POO) es un principio que consiste en ocultar los detalles internos de implementación de un objeto y mostrar únicamente lo que es relevante o esencial para su uso. Es una forma de simplificar la complejidad al enfocarse en las características importantes de un objeto en lugar de en su funcionamiento interno.

EJEMPLO SENCILLO:
------------------

• Como usuario, solo necesitas saber cómo encender el motor, acelerar, frenar, y apagar el motor.

• No necesitas saber cómo funciona el motor internamente o cómo el combustible se convierte en energía.

En POO, este concepto se implementa mediante clases y métodos que definen una interfaz clara para interactuar con un objeto, mientras que los detalles internos se mantienen ocultos.

VENTAJAS DE LA ABSTRACCION:
---------------------------

• SIMPLICIDAD: Permite a los usuarios enfocarse solo en lo que necesitan.

• REUTILIZACION: Facilita la creación de sistemas modulares y reutilizables.

• FLEXIBILIDAD: Los detalles internos pueden cambiar sin afectar a los usuarios del objeto.

• MANTENIMIENTO: Reduce el impacto de los cambios en el código, ya que solo necesitas modificar los detalles internos.

COMO IMPLEMENTAR LA ABSTRACCION:
--------------------------------

1. Clases abstractas:

    • Son clases que no se pueden instanciar directamente.

    • Pueden contener métodos abstractos (sin implementación) y métodos normales.

    • Las clases hijas deben proporcionar la implementación de los métodos abstractos.

2. Interfaces:

    • Definen un conjunto de métodos que una clase debe implementar.

    • Solo contienen la declaración de métodos (sin implementación).

DETALLES IMPORTANTES:
---------------------

1. Metodos abstractos:

    • Deben ser declarados dentro de una clase abstracta.

    • No tienen cuerpo (es decir, no tienen implementación).

    • Deben ser implementados obligatoriamente por cualquier clase derivada que no sea abstracta.

2. Propiedades abstractas:

    • También deben declararse dentro de una clase abstracta.

    • Solo se define su tipo, pero no se les asigna un valor.

    • Las clases derivadas deben proporcionar la implementación o asignación de valor.
*/
/*
// Clase abstracta
abstract class Vehiculo {
    // Método abstracto: no tiene implementación
    abstract encender(): void;
    abstract apagar(): void;

    // Método normal: tiene implementación
    estado(): void {
        console.log("El vehículo está listo.");
    }
}

class Automovil extends Vehiculo {
    encender(): void {
        console.log("El automóvil está encendido.");
    }

    apagar(): void {
        console.log("El automóvil está apagado.");
    }
}

const miAuto = new Automovil();
miAuto.encender();
miAuto.estado();
miAuto.apagar();
*/
/*
EN ESTE EJEMPLO

• La clase vehiculo abstrae el concepto de un vehiculo.

• La clase automovil implementa los detalles especificos de como encender y apagar el vehiculo.
*/
/*
class Persona {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    saludar(): void {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

class Estudiante extends Persona {
    grado: string;

    constructor(nombre: string, grado: string) {
        super(nombre); // Llamada al constructor de la clase padre
        this.grado = grado; // Inicialización de la propiedad de la clase hija
    }

    saludar(): void {
        super.saludar(); // Llama al método de la clase padre
        // Si olvidas llamar a super() en una clase hija que tiene un constructor, obtendrás un error del compilador:
        // Constructor of derived class must contain a 'super' call before accessing 'this' or returning from the constructor.
        // Esto ocurre porque el constructor de la clase padre es responsable de inicializar las propiedades heredadas. Sin esta llamada, la clase hija no puede ser correctamente inicializada.
        console.log(`Estoy en el grado ${this.grado}`);
    }
}

const estudiante = new Estudiante("Stalin", "10°");
estudiante.saludar();
*/
/* class Utilitys {
    static getFormattedDate(date: Date): string {
        return date.toISOString();
    }

    static getFormattedTime(date: Date): string {
        return date.toTimeString();
    }
}

class Registro {
    constructor(
        public id: number,
        public data: Date,
        public valor: number
    ) {  }

    public registrar(): void {
        console.log(`Data: ${Utilitys.getFormattedDate(this.data)}`);
        console.log(`Valor: ${this.valor}`);
    }
}

const registro = new Registro(1, new Date(), 100);
registro.registrar(); */
/*
Los métodos estáticos son accesibles directamente a través del nombre de la clase sin la necesidad de extenderla ni declararla explícitamente.

En TypeScript (y en JavaScript), los métodos marcados como static pertenecen directamente a la clase y no a las instancias de la clase. Esto significa que no necesitas crear un objeto de la clase ni extenderla para acceder a ellos. Solo tienes que usar el nombre de la clase seguido del nombre del método.

VENTAJAS DE LOS METODOS STATICOS:

• MODULARIDAD: Permiten crear funciones utilitarias que no dependen de ninguna instancia.

• NO NECESITAS HERENCIA: Puedes usar estos métodos desde cualquier parte del código siempre que tengas acceso a la clase.
*/
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Types and Interfaces */
// Un type en TypeScript es una forma de definir un alias para un tipo, ya sea un tipo primitivo, una unión, una intersección o incluso un objeto complejo. Los types permiten estructurar y reutilizar tipos en tu código, lo que facilita el mantenimiento y la legibilidad.
// Alias para un tipo primitivo
/* type ID = string | number; */
// Tipo para un objeto
/* type User = {
  id: ID;
  name: string;
  isAdmin: boolean;
}; */
// Uso
/* const user: User = {
  id: 1,
  name: "Stalin",
  isAdmin: true,
}; */
/* Extensibilidad */
// type no permite fusionarse
/* type Car = {
    make: string;
    model: string;
}; */
// Error si intentas añadir mas ropiedades en otro lugar.
// interface permite la fusion
/* interface Car1 {
    make: string;
    model: string;
};
interface Car1 {
    year: number;
};

const myCar1: Car1 = {
    make: 'Toyota',
    model: 'Hihlander',
    year: 2013,
    color: 'Red'
};

interface Car1 {
    color: string;
}; */
/* Unión de tipos */
// Posible con type
/* type Status = 'success' | 'error' | 'loading'; */
// Esto no funciona con interface.
/* Herencia / Extencion */
// Con type
/* type Animal = {
    name: string;
};
type X = {
    age: number;
};

type Dog = Animal & {
    breed: string;
};
type Dog1 = Animal & X & {
    breed: string;
}; */
/*
Intersection Type "&"
---------------------
En TypeScript, el símbolo "&" se llama operador de intersección (intersection type) y se utiliza para combinar varios tipos en uno solo.

El operador de intersección (&) combina las propiedades de dos (o más) tipos en un único tipo. Esto significa que el tipo resultante debe cumplir con las propiedades de todos los tipos involucrados.

CUANDO USAR CADA UNO:

USA TYPE:
    • Para tipos complejos como uniones, intersecciones o alias para tipos primitivos.

    • Cuando necesites combinaciones avanzadas de tipos.

USA INTERFACE:
    • Para definir estructuras de objetos, especialmente cuando trabajas con POO o necesitas extensibilidad.
*/
/* const myDog: Dog = {
    name: 'Buddy',
    breed: 'Golden Retriever'
};
const myDog1: Dog1 = {
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: 5,
};
*/
/* interface Platano {
    nombre : string;
    tipo: string
}

interface Platano1 {
    nombre : string;
    tipo: string
}

type Yuca = {
    nombre: string;
    tipo: string;
}

type papa = {
    nombre: string;
    tipo: string;
}

class Viberes {
    public platano: Platano = {
        nombre: 'Platano',
        tipo: 'Maduro'
    }
    public yuca: Yuca = {
        nombre: 'Platano',
        tipo: 'Maduro'
    }
    public _viberes: Yuca | Platano1 = {
        nombre: 'Platano',
        tipo: 'Maduro'
    }

    public getPlatano(): { nombre: string, tipo: string } {
        return this.platano
    }
    public getYuca(): Yuca {
        return this.yuca;
    }
} */
/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* Enums TypeScript */
/*
En TypeScript, los enums (enumeraciones) son una característica que permite definir un conjunto de constantes con nombre. Esto hace que el código sea más legible y mantenible, especialmente cuando se trabaja con valores fijos y conocidos.

TIPOS DE ENUMS EN TYPESCRIPT:

1. Enums Numericos
2. Enums de Cadenas
3. Enums Heterogéneos (mixtos)
4. Enums Constantes (const enum)
*/
// Enums Numericos: Los valores se asignan automáticamente desde 0, a menos que se especifique otro valor inicial.
/* enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Down;
console.log(move); */
// Tambien se pueden asignar valores personalizados.
/* enum Status {
    Success = 1,
    Failure = -1,
    Pending = 0
}

console.log(Status.Pending); */
// Enums de Cadenas: Se asignan valores de tipo string a cada opcion.
/* enum Color {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE'
}

console.log(Color.Green); */
// Enums Heterogéneos (mixtos): Se combinan valores numéricos y de cadena, pero no es recomendable usarlos a menos que sea necesario.
/* enum MixedEnum {
    Yes = 'YES',
    No = 0
}

console.log(MixedEnum.No); */
// Enums Constantes (const enum): Se eliminan en la compilación para optimizar el rendimiento.
/* const enum Sizes {
    Small = 1,
    Medium = 2,
    Large = 3,
    Other = 'Hola Soy 3 en String',
}

let mySize = Sizes.Other;
console.log(mySize); */
/* ---------------------------------------------------------------------------------------------------------------------------------- */
// Unknown
/*
En TypeScript, unknown es un tipo seguro que representa un valor cuyo tipo no se conoce en el momento de la asignación. Se introdujo para proporcionar una alternativa más segura a any.

unknown es un tipo de dato en TypeScript que se usa cuando no sabemos de antemano qué tipo de valor tendrá una variable. Es más seguro que any, porque obliga a hacer una verificación de tipo antes de usarlo.

En TypeScript, unknown es un tipo especial que te permite almacenar cualquier valor, pero NO puedes usar ese valor sin antes verificar su tipo.

Piensa en unknown como una caja cerrada. No puedes ver qué hay adentro hasta que la abras y revises su contenido.

REGLA DE UNKNOWN:
    • No puedes operar directamente con una variable de tipo unknown sin antes verificar su tipo.

Usa unknown si quieres mayor seguridad y necesitas validar el tipo antes de usarlo.

Usa any si realmente necesitas flexibilidad total y no te preocupan los riesgos de errores en tiempo de ejecución.

✅ unknown permite almacenar cualquier tipo de dato.
❌ No puedes usarlo directamente sin verificar su tipo antes.
✅ Debes hacer una verificación de tipo (typeof) antes de operar con él.
✅ Es más seguro que any porque obliga a validar los datos.
*/
/* // Entendiendo unknown paso a paso
let dato: unknown; // 🔹 Se declara una variable de tipo "unknown"

dato = "Hola, TypeScript"; // ✅ Se le asigna un string
dato = 42; // ✅ Se le asigna un número
dato = true; // ✅ Se le asigna un booleano

// ✅ Lo que sí puedes hacer: Asignar cualquier valor a dato.
// ❌ Lo que no puedes hacer: Usar métodos específicos sin verificar el tipo. */
/* // El problema de unknown sin verificacion
let dato: unknown = "Hola";

// ❌ ERROR: No se puede llamar a un método sin comprobar el tipo
console.log(dato.toUpperCase()); // ❌ Error: "dato" podría no ser un string.

// 🔴 ¿Por qué da error?
// Porque TypeScript no sabe si dato es un string, por lo que no permite usar .toUpperCase().
// ✅ Solución: Verificar el tipo antes de usarlo. */
/* // Verificando el tipo antes de usar unknown
let dato: unknown = "Hola, Stalin";

// El operador typeof en JavaScript y TypeScript siempre devuelve un string con el nombre del tipo de dato de la variable.
if (typeof dato === "string") {
    console.log(dato.toUpperCase()); // ✅ Ahora sí podemos usar toUpperCase()
} else {
    console.log("El valor no es un string");
}

// 🟢 ¿Por qué ahora sí funciona?
// Porque primero usamos typeof para verificar si dato es un string. Solo si la condición se cumple, usamos .toUpperCase(). */
/* // Usando unknown con numeros
let numero: unknown = 123.456;

if (typeof numero === "number") {
    console.log(numero.toFixed(2)); // ✅ Muestra "123.46"
} else {
    console.log("El valor no es un número");
}

// 🔹 Si numero es un number, entonces TypeScript nos deja usar .toFixed(2). */
// Unknown con funciones
/* // ❌ Código incorrecto (da error)
function mostrar(dato: unknown) {
    console.log(dato.toUpperCase()); // ❌ Error: "dato" podría no ser un string.
}

mostrar("Hola");
mostrar(42);
// 🔴 Error porque no verificamos el tipo antes de usar .toUpperCase(). */
/* // ✅ Código correcto con verificación de tipo
function mostrar(dato: unknown) {
    if (typeof dato === "string") {
        console.log(dato.toUpperCase()); // ✅ Ahora sí funciona
    } else {
        console.log("El dato no es un string.");
    }
}

mostrar("Hola"); // Muestra "HOLA"
mostrar(42); // Muestra "El dato no es un string."
// ✅ Aquí verificamos si dato es un string antes de usarlo. */
/*
Cuando usar unknown?
---------------------
Usa unknown cuando recibas datos de una fuente desconocida y quieras asegurarte de validarlos antes de usarlos.

Ejemplo típico: Datos de una API o entrada de usuario.
*/
/* // Ejemplo real: Recibiendo datos desconocidos
function procesarDato(dato: unknown) {
    if (typeof dato === "boolean") {
        console.log("Es un booleano:", dato);
    } else if (typeof dato === "number") {
        console.log("Es un número:", dato.toFixed(2));
    } else if (typeof dato === "string") {
        console.log("Es un texto:", dato.toUpperCase());
    } else {
        console.log("Tipo desconocido.");
    }
}

procesarDato(true); // "Es un booleano: true"
procesarDato(99.99); // "Es un número: 99.99"
procesarDato("stalin"); // "Es un texto: STALIN"
procesarDato({}); // "Tipo desconocido."
// ✅ Aquí comprobamos cada tipo posible antes de usarlo. */
// API y no conocemos su tipo
var apiBook = {
    author: "author name",
    isbn: "isbn value"
};
;
// definimos el tipo book
var x = apiBook;
console.log(x.author); // author name
// console.log(apiBook.author); // Error, object is of type "unknown"
/* ----------------------------------------------------------------------------------------------------------------------------------------------- */
/*
Que devuelve typeof?
--------------------
El operador typeof en JavaScript y TypeScript siempre devuelve un string con el nombre del tipo de dato de la variable.
*/
/* // typeof devuelve una cadena de texto.
console.log(typeof 123);        // "number"
console.log(typeof "Hola");     // "string"
console.log(typeof true);       // "boolean"
console.log(typeof {});         // "object"
console.log(typeof []);         // "object"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (esto es un error histórico de JavaScript)
console.log(typeof function () { }); // "function" */
/*
Conclusión
    •	typeof siempre devuelve un string con el nombre del tipo.
    •	Debes comparar con una cadena de texto (especificando dentro del string el tipo de dato), no con el tipo de dato literal.
    •	Esto permite verificar el tipo antes de usarlo en una operación.
*/
/* ----------------------------------------------------------------------------------------------------------------------------------------------- */
/*
toFixed()

El método toFixed() en JavaScript y TypeScript se usa para formatear un número decimal con una cantidad específica de decimales.

Ejemplo:
    numero.toFixed(cantidadDeDecimales)

📌 cantidadDeDecimales → Es un número entero que indica cuántos decimales queremos después del punto.
📌 Devuelve un string, no un number.
*/
/* let num = 3.1415926535;
console.log(num.toFixed(2)); // "3.14"
console.log(num.toFixed(4)); // "3.1416"
console.log(num.toFixed(0)); // "3" (redondea al entero más cercano)

// 🔹 Si el número tiene más decimales de los especificados, toFixed() redondea el valor.
// 🔹 Si el número tiene menos decimales de los especificados, agrega ceros a la derecha.

let num1 = 5;
console.log(num.toFixed(2)); // "5.00"

// ✅ Como 5 no tiene decimales, toFixed(2) le agrega .00. */
/* // Ejemplo con unknown (aplicación en TypeScript)
let valor: unknown = 123.456;

if (typeof valor === "number") {
    console.log(valor.toFixed(2)); // "123.46"
} else {
    console.log("No es un número");
}

// ✅ Solo podemos llamar toFixed(2) si verificamos que valor es un número. */
/*
Por qué toFixed() devuelve un string?
--------------------------------------

El método toFixed(n) devuelve un string y no un número porque su propósito es formatear. Si necesitas convertirlo a número nuevamente, puedes usar parseFloat():
*/
/* let num = 2.56789;
let strNum = num.toFixed(2); // "2.57" (string)
let floatNum = parseFloat(strNum); // 2.57 (number)

// ✅ Ahora floatNum es un número nuevamente. */
/*
Resumen

🔹 toFixed(n) sirve para redondear y formatear un número con n decimales.
🔹 Siempre devuelve un string, no un number.
🔹 Si faltan decimales, los agrega con ceros.
🔹 Si sobran decimales, redondea el número.
*/
/*
🚀 Ejemplo real en una calculadora

Si estás haciendo una calculadora en JavaScript, puedes usar toFixed(2) para que los resultados tengan solo 2 decimales:
*/
/* function sumar(a: number, b: number): string {
    return (a + b).toFixed(2);
}

console.log(sumar(10.456, 5.123)); // "15.58"
console.log(sumar(1.2, 2.3)); // "3.50"

// Así evitas resultados con demasiados decimales. */ 
