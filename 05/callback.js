/* Funciones que no reciben parametros en los callback. */


// let listeningMusic = (tys) => {
//     tys();
// }

// const tysSong = () => {
//     console.log('Estoy escuchando a TYS');
// }

// listeningMusic(tysSong);



// let watchingTv = (watching) => {
//     let movie = watching();
//     console.log(movie);
// }

// const fastFurios = () => {
//     return 'Im watching the movie Fast and Furios'
// }

// watchingTv(fastFurios);



// let lookingWater = (found) => {
//     let isFound = found();
//     console.log(isFound);
// }

// const waterFound = () => {
//     console.log('El agua fue encontrada');
//     return 'Buenas noticias...!!'
// }
    
// lookingWater(waterFound);



// let choosingPhone = (option) => {
//     option();
// }

// const iphone = () => {
//     console.log('Iphone is the best option');
// }

// const galaxy = () => {
//     console.log('Galaxy is a good option');
// }

// choosingPhone(galaxy);



// let learnigCallback = (decisions) => {
//     let decision = decisions();
//     console.log(decision);
    
// }

// const dificult = () => {
//     console.log('Es bien dificil aprender callback');
//     return 'No me gustan los callback'
// }

// const veryDificult = () => {
//     console.log('Super dificil los callback');
//     return 'Very Dificult'
// }

// learnigCallback(veryDificult);



// function suma (sumando) {
//     console.log(sumando());
// }

// suma( () => {return 2 + 4} );



// function saludo(saludar) {
//     saludar();
// }

// saludo(()=> {console.log('Hello! Good morning...')});



// function walking(walk) {
//     walk();
// }

// walking( () => {
//     console.log('Im walking to my home');
// } );



// let playingBasket = (mvpPlayer) => {
//     let player = mvpPlayer();
//     console.log(player);
    
// }

// playingBasket( () => { return 'Steph Curry'} );



// let writingCode = (write) => {
//     write();
// }

// writingCode( () => { console.log('Im writing my first code in JavaScript'); } );






/* Funciones que reciben parametros en los callback. */


// let playingBaseball = (firstBaseman, shortStop) => {
//     console.log('Las posiciones First Baseman y Short Stop, estaran ocupadas por Engels y Stalin');
//     firstBaseman('Engels esta jugando la primera base');
//     shortStop('Stalin esta jugando en el short stop');
// }

// let firstBaseman = (engels) => {
//     console.log(engels);
// }

// let shortStop = (stalin) => {
//     console.log(stalin);
// }

// playingBaseball(firstBaseman, shortStop);



// let cleaningHouse = (kitchen, bathroom) => {
//     kitchen('La cocina esta siendo limpianda por Florangel');
//     bathroom('The bathroom esta siendo limpiado por Engels');
// }

// const florangel = (floraTodo) => {
//     console.log(floraTodo);
// }

// const engels = (engelsTodo) => {
//     console.log(engelsTodo);
// }

// cleaningHouse(florangel, engels)



// let LookingBarbershop = (location) => {
//     let value = location('Welcome to The Lois BarberShop');
//     console.log(value);    
// }

// const theLoisBarberShop = (msj) => {
//     console.log(msj);
//     return 'This is the best BarberShop'
// }

// LookingBarbershop(theLoisBarberShop)



// let printResume = (develop) => {
//     console.log('Printinig the resume to be a developer');
//     develop('This is the resume to frotend developer');
// }

// printResume( (resume) => { console.log(resume); });



// let printResume = (develop) => {
//     console.log('Printinig the resume to be a developer');
//     let result = develop('This is the resume to frotend developer');
//     console.log(result);
// }

// printResume( (resume) => { return resume });



// let eating = (lunch, dinner) => {
//     lunch('Im eating my lunch');
//     dinner('Im eating my dinner');
// }

// eating( (havingLunch) => { console.log(havingLunch); }, (havingDinenr) => { console.log(havingDinenr); } );



// let eating = (lunch, dinner) => {
//     let firstFood = lunch('Im eating my lunch');
//     let secondFood = dinner('Im eating my dinner');
//     console.log(firstFood + '\n' + secondFood);
// }

// eating( (havingLunch) => { return havingLunch }, (havingDinenr) => { return havingDinenr } );



// let washingClothes = (white) => {
//     let whiteClothe = white('Im washing the white clothes first!');
//     console.log(whiteClothe);
// }

// washingClothes( (washing) => { return washing} );



// let buyingWater = (water) => {
//     let polandSpring = water('This is the best water option');
//     console.log(polandSpring);
// }

// buyingWater( (msj) => { return msj} );



// let dancing = (bachata, salsa) => {
//     danceBachata = bachata('I am dancing bachata...');
//     danceSalsa = salsa('I am dancing salsa...')
//     console.log(danceBachata + '\n' + danceSalsa);
// }

// dancing( (dance) => { return dance}, (dance) => { return dance});