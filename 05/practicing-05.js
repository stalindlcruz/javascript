/* function exercises (monday) {
    console.log(monday);
}

let mondayExercise = exercises;

mondayExercise('the monday exercise is run') */



/* function cooking(mainMeal) {
    mainMeal('The rice is the main meal!'); 
}

function cookingRice(message) {
    console.log(message);
}

cooking(cookingRice) */



/* let playingBaseball = (firstBaseman, shortStop) => {
    console.log('Las posiciones First Baseman y Short Stop, estaran ocupadas por Engels y Stalin')
    firstBaseman('Engels esta jugando la primera base')
    shortStop('Stalin esta jugando en el short stop')
}

let firstBaseman = (engels) => {
    console.log(engels);
}

let shortStop = (stalin) => {
    console.log(stalin);
}

playingBaseball(firstBaseman, shortStop); */



/* ----------------------------------------------------------------------------- */

/* const carList = [
    {
        tesla: 'Model X',
        honda: 'CRV 2024',
        toyota: 'Highlander 2024',
    },
    true,
    'Hola!',
]

let carSelections  = () => {
    return carList
}

let selection = carSelections();
console.log(selection[0].tesla); */



/* // let fecha = Date();
// let fecha = new Date('2024/10/20');
let currentDate = new Date();

console.log(currentDate.getMinutes()); */



/* --------------------------------------------------------------------- */


/* const myList = [
    'Im a string',
    90,
    true,
    false,
    [],
    {},
    () => {
        return 'Hola'
    }
]

console.log(myList[6]()); */



/* --------------------------------------------------------------- */

// let personalList = ['Laptop', 'Monitor', 'Phone', 'Mouse', 'Keyboard'];

// personalList.forEach((position) => console.log(position));


// let returnValue = personalList.find((position) => position == 'Phone');
// console.log(returnValue);


// let returnValue = personalList.filter((position) => position == 'Phone');
// console.log(returnValue);

// let returnValue = personalList.filter((position) => position == 'Phone' || position == 'Monitor');
// console.log(returnValue);

// let newList = ['Phone', 'Monitor'];
// let returnValue = personalList.filter((position) => newList.includes(position));
// console.log(returnValue);

// let exist = personalList.includes('Monitor', 1);
// console.log(exist);


/* ----------------------------------------------------------------- */


// console.log(personalList.join('-'));
// personalList.push('SSD');
// console.log(personalList);
// console.log(personalList.push('SSD')); //Devuelve la nueva longitud del arreglo
// personalList.pop();
// personalList.shift();
// personalList = personalList.filter( (position) => position !== 'SSD' );



// console.log(personalList);