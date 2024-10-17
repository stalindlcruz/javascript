// Events
// No todos los elementos tienen la misma cantidad de eventos o comparten lo mismo eventos

// https://dbchung3.medium.com/add-event-listener-dom-event-types-6c10a844c9d8
// https://www.freecodecamp.org/espanol/news/lista-de-codigos-de-teclas-en-javascript/

let btn = document.querySelector("#btn");
let imp = document.querySelector("#imp");

btn.addEventListener("click", (e) => {
  console.log("click: paso algo!", e);
});

btn.addEventListener("mouseenter", (e) => {
    console.log("mouse enter: paso algo!", e);
});

// imp.addEventListener('input', (e)=>{
//     console.log('Entrando datos', e.target.value);
// })

imp.addEventListener('keydown', (e)=>{
    // console.log('tecla presionada', e);
    switch (e.keyCode) {
        case 87:
            console.log('Estoy avanzando');
            break;

            case 65:
            console.log('Moviendome hacia la izquierda');
            break;

            case 68:
            console.log('EMoviendome hacia la derecha');
            break;

            case 83:
            console.log('Estoy retrocediendo');
            break;
    
        default:
            console.log('N/A');
            break;
    }
})

// imp.addEventListener('keyup', (e)=>{
//     console.log('tecla soltada', e);
// })