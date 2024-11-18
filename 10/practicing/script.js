function sumar(num1, num2, callback) {
    return callback(num1, num2);
}

function sumOperation(num1, num2) {
    setTimeout(() => {
        const operation = num1 + num2;
        console.log(`El resultado de ${num1} + ${num2} = ${operation}`);
    }, 5000);
}

const result = sumar(10, 4, sumOperation);

console.log(result);

/* ----------------------------------------------------------------------------- */

let login = (user, pass, callback) => {

    verifyUser(user, (userExist) => {
        if (userExist) {
            console.log('Login Exitoso');
        } else {
            console.log('Login Fail');
        }
    });
}

let verifyUser = (user, callback) => {
    setTimeout(() => {
        const userName = 'stalin';
        if (userName !== user) {
            console.log(`El usuario "${user}" no existe`);
            callback(false);
            return;
        }

        console.log('login success!');
        callback(true);
    }, 5000);
}


login('stalin', 12345, (userExist) => {});

/* ----------------------------------------------------------------------------- */

function verificarUsuario(nombre) {
    return new Promise((resolve, reject) => {
        const usuarioValido = 'engels';

        console.log('verificando usuario...');
        
        // simulamos un proceso asincronico con setTimeout
        setTimeout(() => {
            if (nombre === usuarioValido) {
                resolve('usuario encontrado');
            } else {
                reject('usuario no encontrado');
            }
        }, 2000); // simula un retraso de 2 segundos
    });
}


// llamando a la funcion y manejando la promesa
verificarUsuario('engels')
    .then((mensaje) => {
        console.log('Exito:', mensaje);
    })
    .catch((error) => {
        console.log('Error:', error);
    })
    .finally(() => {
        console.log('proceso de verificacion completado');
    })


/* ----------------------------------------------------------------------------- */

// function verificarUsuario(nombre) {
//     return new Promise((resolve, reject) => {
//         const usuarioValido = 'stalin';

//         console.log('verificando usuario...');
        
//         setTimeout(() => {  // simulacion de proceso asincronico
//             if (nombre === usuarioValido) {
//                 resolve('usuario encontrado');  // resuelve la promesa
//             } else {
//                 reject('usuario no encontrado') // rechaza la promesa
//             }
//         }, 2000);
//     });
// }

// async function verificar() {
//     try {
//         const resultado = await verificarUsuario('stalin'); // esperamos la resolucion de la promesa
//         console.log('Exito:', resultado);   // se ejecuta si la promesa se resuelve
//     } catch (error) {
//         console.log('Error:', error);   // se ejecuta si la promesa es rechazada
//     } finally {
//         console.log('proceso de verificacion completado.');
//     }
// }

// verificar();


function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        console.log('verificando edad...');
        
        setTimeout(() => {  // Simula un retraso en la operación
            if (edad >= 18) {
                resolve('acceso permitido');  // resuelve la promesa
            } else {
                reject('acceso denegado, debes ser mayor de edad') // rechaza la promesa
            }
        }, 2000);   // Retraso de 2 segundos
    });
}

async function procesarAcceso(edad) {
    try {
        const resultado = await verificarEdad(edad); // esperamos la resolucion de la promesa
        console.log('Resultado:', resultado);   // se ejecuta si la promesa se resuelve
    } catch (error) {
        console.log('Error:', error);   // se ejecuta si la promesa es rechazada
    } finally {
        console.log('proceso de verificacion completado.');
    }
}

// llama a la funcion
procesarAcceso(10);