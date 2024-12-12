// var x = '';
// let getUser = ()=> {
//     // const result = await fetch('')
// }
var Persona = /** @class */ (function () {
    function Persona(nombrex, agex, genderx) {
        this.nombre = nombrex;
        this.age = agex;
        this.gender = genderx;
        this.comer('Platano');
    }
    Persona.prototype.comer = function (food) {
        console.log(food);
    };
    return Persona;
}());
var persona = new Persona("Stalin", 29, "M");
console.log(persona);
