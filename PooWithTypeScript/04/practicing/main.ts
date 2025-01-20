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


class Animal {
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
miPerro.hacerSonido();
// console.log(miPerro.hacerSonido();


// console.log(CustomMath.resta(30, 10));
// console.log(CustomMath.resta(30, 10, 5));
// console.log(CustomMath2.resta(40, 20, 10));