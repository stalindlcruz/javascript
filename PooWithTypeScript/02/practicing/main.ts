class Home {
    street: string;
    num: number;

    constructor ( inComingStreet: string, inComingNum: number ) {
        this.street = inComingStreet;
        this.num = inComingNum
    }

    open() {
        return 'The door is open'
    }
}

class Crurch extends Home {
    // home: Home;
    color: string;
    
    constructor(street: string, num: number, color: string) {
        super(street, num)
        this.color = color;
        // this.home = new Home(street, num);
    }

    onLights() {
        return 'Las luces estan encendidas';
    }
}

const home = new Home('Radcliffe Dr', 10);
const cruch = new Crurch('Concord St', 180, 'white');
// console.log(home);
// console.log(cruch.onLights());



/* ------------------------------------------------------ */

/*

Modificadores de acceso
-----------------------

public --> Siempre esta por defecto publico.

private --> Solo puedo acceder desde la misma clase.

protected --> Protege la propiedad a nivel de la clase, osea
a nivel de la clase se puede accedera ella, pero a nivel de
las instancias NO. Solo puede acceder y modificarlo quien
extiende de esa clase.

*/

class Cat {
    public name: string;
    private SECRET: string;
    private readonly SECRET2: string;
    protected age: number;

    constructor (name: string, secret: string, secret2: string, age: number) {
        this.name = name;
        this.SECRET = secret;
        this.SECRET2 = secret2;
        this.age = age;
    }

    public talk() {
        // return this.SECRET;
        return this.SECRET2;
    }
}

class Cat2 extends Cat {
    constructor(name: string, secret: string, secret2: string, age: number) {
        super(name, secret, secret2, age);
        this.age = 50;
    }
}

const cat = new Cat('Gato', 'Soy feo', 'Soy feo feo', 20);
const cat2 = new Cat2('gato2', 'Soy mas feo', 'Doble feo', 30);

console.log(cat.talk());
console.log(cat2.talk());