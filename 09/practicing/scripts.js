let btn = document.querySelector('#btn');
let imp = document.querySelector('#imp');

btn.addEventListener('click', (event) => {
    console.log('click: --> Boton presionado', event);
});

btn.addEventListener('mouseenter', (event) => {
    console.log('mouse enter: --> el mouse entro', event);
});

// imp.addEventListener('click', () => {
//     console.log('click on imput');
// });

// imp.addEventListener('input', (e) => {
//     console.log('Entrando datos', e);
// });

imp.addEventListener('keydown', (event) => {
    // console.log('tecla presionada', event);
    switch (event.key) {
        case 'w':
            console.log('Estoy avanzando');
            break;
        
        case 's':
            console.log('Estoy retrocediendo');
            break

        case 'a':
            console.log('moving to left');
            break;
        
        case 'd':
            console.log('moving to rigth');
            break
            
        default:
            console.log('N/A');
            break;
    }
})

/* 

Para identicar cada tecla se puede usar el keyCode y which de cada una, pero una forma mas moderna es solo usar el key, porque keycode y which ya esta quedando obsoleto y la gran mayoria de los navegadores modernos, ya soportan el 'key'

*/

imp.addEventListener('keyup', (e) => {
    console.log('tecla soltada', e);
})