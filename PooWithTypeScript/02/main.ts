class Person {
    name: string;
    age: number;

    constructor( inComingName:string, inComingAge: number ) {
        this.name = inComingName;
        this.age = inComingAge;
    }

    run() {
        console.log("the people is run");
    }

}

class Teacher extends Person {

    person: Person;
    
    type: string;

    constructor(type: string, name:string, age: number) {
        super(name, age);
        this.type = type;
        this.person = new Person(name, age)
    }

    enseñar() {
        console.log("El teacher enseña!");
        
    }
}

const teacher = new Teacher('english', 'Stalin', 29);
const teacher2 = new Teacher('Soft', 'Engels', 29);
// console.log(teacher2.name);

/////////////////////

class Dog {

    public name: string;
    private readonly SECRET: string = "l234h2k3j4h32";
    protected age: number = 10;

    constructor(name: string) {
        this.name = name;
    }

    public run(): void {
        this.SECRET;
    }

}

const dog = new Dog('Poppy')

class Dog2 extends Dog {
    constructor() {
        super('Jau');
        this.age = 3
    }
}

const dog2 = new Dog2();







