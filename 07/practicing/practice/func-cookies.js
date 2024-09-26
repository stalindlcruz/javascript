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
const addingCookie = (name, value, date = 'Fri, 27 Sep 2024 12:00:00 UTC') => {
    document.cookie = `${name}=${value}; expires=${date}; path=/`;
}

// No debes eliminar algo para luego actualizarlo, debes filtrarlo para saber si existe y luego actulizarlo
// Lo mismo que te dije arriba aplica para aca
// Tambien debes evaluar que la cookie exista, porque no vas a actualizar algo que no existe, en su defecto se creara una nueva
const updatingCookie = (name, value, date = 'Fri, 27 Dec 2024 12:00:00 UTC') => {
    deletingCookie(name);
    addingCookie(name, value, date);
}

// Esta forma de eliminar una cookie no es entendible, no es optima y no esta bien aunque te funcione.
// Si lo que quieres es que el user elimine una cookie pasandole solo el nombre, puedes poner la fecha actual menos uno o mas dias atras para asegurarte que efectivamente se vaya a eliminar
// Tambien debes evaluar que la cookie exista, porque no vas a eliminar algo que no existe
const deletingCookie = (name) => {
    document.cookie = `${name}=; expires=Mon, 10 Jan 1920 12:00:00 UTC; path=/`;
}

addingCookie('USER1', 'Dahiana Brens', 'Fri, 28 Sep 2024 12:00:00 UTC');
updatingCookie('USER2', 'Florangel Moya', 'Fri, 30 Sep 2024 12:00:00 UTC');
deletingCookie('USER1');