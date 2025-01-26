// https://matiashernandez.dev/blog/post/types-vs-interfaces-cuando-utilizar-cada-una
// https://codigolinea.com/evite-usar-any-use-unknown-en-typescript/
// https://www.typescriptlang.org/docs/handbook/utility-types.html
/*
ABSTRACCION EN PROGRAMACION ORIENTADA A OBJETOS (POO)
-----------------------------------------------------

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
var Utilitys = /** @class */ (function () {
    function Utilitys() {
    }
    Utilitys.getFormattedDate = function (date) {
        return date.toISOString();
    };
    Utilitys.getFormattedTime = function (date) {
        return date.toTimeString();
    };
    return Utilitys;
}());
var Registro = /** @class */ (function () {
    function Registro(id, data, valor) {
        this.id = id;
        this.data = data;
        this.valor = valor;
    }
    Registro.prototype.registrar = function () {
        console.log("Data: ".concat(Utilitys.getFormattedDate(this.data)));
        console.log("Valor: ".concat(this.valor));
    };
    return Registro;
}());
var registro = new Registro(1, new Date(), 100);
registro.registrar();
