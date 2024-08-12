// let name = 'Dahiana'
// let lastName = 'Brens'

// console.log('Mi nombre es: ', name, lastName)


// let objeto = {
//     name: 'Engels',
//     lastName: 'Valdez',
//     age: '28'
// }

// objeto.nickname = 'EngelFlow'
// objeto['color'] = 'Indio'
// console.log(objeto);


// let arreglo = ['keloque', 'Manzana', 30, false];
// arreglo[1] = 'Fresa';
// arreglo[2] = 28;
// arreglo[3] = true;
// arreglo[4] = 'New Value'
// console.log(arreglo);


// let person = {
//     name: 'Israel',
//     action: function() { return 'corriedo'}
// }

// console.log(person.name, 'esta', person.action());


let container = document.getElementById('h3&img-container')
container.setAttribute('name', 'h3&imgcontainer')
container.style.backgroundColor = 'lightblue'
container.style.display = 'grid'
container.style.placeContent = 'center'
container.style.backgroundImage = "url('https://pbs.twimg.com/media/Fm8esk4aMAI7SOx?format=jpg&name=large')";
container.style.backgroundSize = 'cover'
container.style.backgroundPositionX = 'center'
console.log(container);


let h2tittle = document.getElementById('h3')
h2tittle.style.fontFamily = 'Trykker'
h2tittle.style.color = '#fff'
h2tittle.style.textShadow = '5px 15px 2px'
h2tittle.style.textAlign = 'center'
console.log(h2tittle);

let img = document.getElementById('img1')
img.style.width = '350px'
console.log(img);


const responseType = {
    info: 'blue',
    success: 'green',
    warn: 'yellow',
    danger: 'red'
}

