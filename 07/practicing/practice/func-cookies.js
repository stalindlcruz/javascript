/* Create three functions to work with cookies: ( add, update and delete).
    The add function must receive three parameters:
        1. field name
        2. value and expiration date
        3. the last one should be a default value
            (The default value is tomorrow's date). */



// Ese no puede ser el valor por defecto. 
// Que pasa si hoy fuese 29 y yo ejecuto la funcion de agregar y no le paso la fecha?
// La idea es tener la fecha actual + un dia para que se siempre sea el dia de manana el parametro por defecto
// Tambien debes evaluar que la cookie exista, porque no vas a agregar algo que existe en su defecto vas actulizar algo que ya existe

/* const addingCookie = (user, name, days = 1) => {
    const getCookies = document.cookie.split(';');

    let cookieCreated = false

    getCookies.forEach((cookie) => {
        const [existingUser, existingName] = cookie.trim().split('=');
        // const existingUser = getCookies[0];
        // const existingName = getCookies[1];
        if (existingUser === user || existingName === name) {
            cookieCreated = true
        }
    })

    if (cookieCreated) {
        console.log('La cookie ya existe');
    } else {
        console.log('La cookie se agrego correctamente');

        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + days);
        const expires = currentDate.toUTCString();
        document.cookie = `${user}=${name}; expires=${expires}; path=/`;
    }
} */

const addingCookie = (name, value, expirationDays = 1) => {

    if (!name && !value) {
        console.warn('No pueden haber campos vacios');
        return
    }

    const cookiesSplited = document.cookie.split(';');

    let cookiesWithoutSpace = cookiesSplited.map((cookieToSplit) => {
        const cookieWithoutSpace = cookieToSplit.trim();
        const cookieSpliter = cookieWithoutSpace.split('=');
        return cookieSpliter
    })

    let existCookie = cookiesWithoutSpace.filter((cookie) => {
        const [cookieName] = cookie;
        if (cookieName === name) {
            return cookie
        }
    });

    if (!existCookie.length) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + expirationDays);
        const converToUTCDate = currentDate.toUTCString();
        document.cookie = `${name}=${value}; expires=${converToUTCDate};  path=/`;
  
        console.log("Cookie creada exitosamente");
  
        return;
    }
}


// No debes eliminar algo para luego actualizarlo, debes filtrarlo para saber si existe y luego actulizarlo
// Lo mismo que te dije arriba aplica para aca
// Tambien debes evaluar que la cookie exista, porque no vas a actualizar algo que no existe, en su defecto se creara una nueva

// const updatingCookie = (user, newName, days = 1) => {
//     const getCookies = document.cookie.split(';');

//     let cookieCreated = false

//     getCookies.forEach((cookie) => {
//         const [existingUser, existingName] = cookie.trim().split('=');
//         if (existingUser === user) {
//             cookieCreated = true
//         }
//     })

//     if (cookieCreated) {
//         console.log('La cookie ya existe y se actualizara');

//         const currentDate = new Date();
//         currentDate.setDate(currentDate.getDate() + days);
//         const expires = currentDate.toUTCString();
//         document.cookie = `${user}=${newName}; expires=${expires}; path=/`;

//         console.log(`La cookie '${user}' ha sido actualizada a: ${newName}`);
        
//     } else {
//         console.log('La cookie no puede ser actualizada, porque no existe');

//     }
// }

const updatingCookie = (newName, newValue, expirationDays = 1) => {

    if (!newName && !newValue) {
        console.warn('No pueden haber campos vacios');
        return
    }

    const cookiesSplited = document.cookie.split(';');

    let cookiesWithoutSpace = cookiesSplited.map((cookieToSplit) => {
        const cookieWithoutSpace = cookieToSplit.trim();
        const cookieSpliter = cookieWithoutSpace.split('=');
        return cookieSpliter
    })

    let existCookie = cookiesWithoutSpace.filter((cookie) => {
        const [cookieName, cookieValue] = cookie;
        if (cookieName || cookieValue === newName || newValue) {
            return cookie
        }
    });

    if (existCookie.length) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + expirationDays);
        const converToUTCDate = currentDate.toUTCString();
        document.cookie = `${newName}=${newValue}; expires=${converToUTCDate};  path=/`;
  
        console.log("Cookie actualizada");
  
        return;
    }
}

// Esta forma de eliminar una cookie no es entendible, no es optima y no esta bien aunque te funcione.
// Si lo que quieres es que el user elimine una cookie pasandole solo el nombre, puedes poner la fecha actual menos uno o mas dias atras para asegurarte que efectivamente se vaya a eliminar
// Tambien debes evaluar que la cookie exista, porque no vas a eliminar algo que no existe

// const deletingCookie = (user) => {
//     const getCookies = document.cookie.split(';');

//     let cookieCreated = false

//     getCookies.forEach((cookie) => {
//         const [existingUser] = cookie.trim().split('=');
//         if (existingUser === user) {
//             cookieCreated = true
//         }
//     })

//     if (cookieCreated) {
//         document.cookie = `${user}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
//         console.log(`La cookie ${user} ha sido eliminada`);
        
//     } else {
//         console.log('La cookie no puede ser eliminada, porque no existe');

//     }
// }

const deletingCookie = (name) => {

    if (!name && !value) {
        console.warn('No pueden haber campos vacios');
        return
    }

    const cookiesSplited = document.cookie.split(';');

    let cookiesWithoutSpace = cookiesSplited.map((cookieToSplit) => {
        const cookieWithoutSpace = cookieToSplit.trim();
        const cookieSpliter = cookieWithoutSpace.split('=');
        return cookieSpliter
    })

    let existCookie = cookiesWithoutSpace.filter((cookie) => {
        const [cookieName] = cookie;
        if (cookieName === name) {
            return cookie
        }
    });

    if (existCookie.length) {
        // const currentDate = new Date();
        // currentDate.setDate(currentDate.getDate() + expirationDays);
        // const converToUTCDate = currentDate.toUTCString();
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  
        console.log(`La cookie ${name} fue eliminada`);
  
        return;
    }
}

addingCookie('user', 'engels');
addingCookie('user1', 'stalin');
addingCookie('user2', 'dahiana');
addingCookie('user3', 'florangel');

updatingCookie('user3', 'flora');
updatingCookie('user2', 'dayi');

deletingCookie('user1');