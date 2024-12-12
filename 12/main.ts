// var x = '';

// let getUser = ()=> {
//     // const result = await fetch('')
// }

class Persona {
  nombre: string;
  age: number;
  gender: string;

  constructor(nombrex: string, agex: number, genderx: string) {
    this.nombre = nombrex;
    this.age = agex;
    this.gender = genderx;
    this.comer('Platano')
  }

  comer(food: string) {
    console.log(food);
    
  }
}

const persona = new Persona("Stalin", 29, "M");
console.log(persona);

