// Funciones que no reciben parametros en los callback.


/* let listeningMusic = (tys) => {
    tys();
}

const tysSong = () => {
    console.log('Estoy escuchando a TYS');
}

listeningMusic(tysSong); */



/* let watchingTv = (watching) => {
    let movie = watching();
    console.log(movie);
}

const fastFurios = () => {
    return 'Im watching the movie Fast and Furios'
}

watchingTv(fastFurios); */



/* let lookingWater = (found) => {
    let isFound = found();
    console.log(isFound);
}

const waterFound = () => {
    console.log('El agua fue encontrada');
    return 'Buenas noticias...!!'
}
    
lookingWater(waterFound); */



/* let choosingPhone = (option) => {
    option();
}

const iphone = () => {
    console.log('Iphone is the best option');
}

const galaxy = () => {
    console.log('Galaxy is a good option');
}

choosingPhone(galaxy); */



/* let learnigCallback = (decisions) => {
    let decision = decisions();
    console.log(decision);
    
}

const dificult = () => {
    console.log('Es bien dificil aprender callback');
    return 'No me gustan los callback'
}

const veryDificult = () => {
    console.log('Super dificil los callback');
    return 'Very Dificult'
}

learnigCallback(veryDificult); */





/* Funciones que reciben parametros en los callback. */


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



/* let cleaningHouse = (kitchen, bathroom) => {
    kitchen('La cocina esta siendo limpianda por Florangel');
    bathroom('The bathroom esta siendo limpiado por Engels');
}

const florangel = (floraTodo) => {
    console.log(floraTodo);
}

const engels = (engelsTodo) => {
    console.log(engelsTodo);
}

cleaningHouse(florangel, engels) */



/* let LookingBarbershop = (location) => {
    let value = location('This is the Best BarberShop');
    console.log(value);    
}

const theLoisBarberShop = (msj) => {
    console.log(msj);
    return 'Welcome to The Lois BarberShop'
}

LookingBarbershop(theLoisBarberShop) */



