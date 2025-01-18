// class CustomMath {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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

En TypeScript, puedes declarar multiples firmas de función (overload signatures) y luego manejar una única implementación
que maneje todas esas firmas.

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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.hacerSonido = function () {
        console.log('El animal esta haciendo un sonido');
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.hacerSonido = function () {
        console.log('Ladrando');
    };
    return Perro;
}(Animal));
var miPerro = new Perro();
miPerro.hacerSonido();
// console.log();
// console.log(CustomMath.resta(30, 10));
// console.log(CustomMath.resta(30, 10, 5));
// console.log(CustomMath2.resta(40, 20, 10));
