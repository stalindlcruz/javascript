// class CustomMath {
var Caja = /** @class */ (function () {
    function Caja(valor) {
        this.contenido = valor; // El contenido será del tipo definido al crear la instancia
    }
    Caja.prototype.obtenerContenido = function () {
        return this.contenido;
    };
    Caja.prototype.actualizarContenido = function (nuevoValor) {
        // Este método usa un genérico independiente de la clase
        return nuevoValor;
    };
    return Caja;
}());
// 1. Instanciamos la clase usando un tipo específico (Producto)
var cajaProducto = new Caja({ id: 1, nombre: 'Laptop' });
console.log(cajaProducto.obtenerContenido()); // { id: 1, nombre: 'Laptop' }
// 2. Actualizamos el contenido usando un tipo independiente (Usuario)
var nuevoUsuario = cajaProducto.actualizarContenido({ id: 2, nombre: 'Stalin', edad: 30 });
console.log(nuevoUsuario); // { id: 2, nombre: 'Stalin', edad: 30 }
// 3. Instanciamos la clase sin especificar el tipo genérico (asume any)
var cajaGenerica = new Caja('Cualquier cosa');
console.log(cajaGenerica.obtenerContenido()); // 'Cualquier cosa'
// 4. Llamamos al método con un genérico independiente
var nuevoValor = cajaGenerica.actualizarContenido(42);
console.log(nuevoValor); // 42
