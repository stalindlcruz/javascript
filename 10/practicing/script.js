function sumar(num1, num2, callback) {
    const resultado = num1 + num2;
    callback(num1, num2, resultado);
    return resultado;
}

const result = sumar(2, 4, (num1, num2, resultado) => {
    setTimeout(() => {
        console.log(`El resultado de ${num1} + ${num2} = ${resultado}`);
    }, 5000);
} );

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

