// CRUD

// put / path   --> Actualizar completamente un recurso
// get  --> Obtener datos
// post --> Enviar datos para crear algo nuevo
// delete   --> Eliminar un recurso

// ENDPOINT
 
// async function getUser() {
//     try {
//         const result = await fetch('https://randomuser.me/api/',{ method: 'get' });
//         const convertToJson = result.json();
//         return convertToJson
        
//     } catch (error) {
//         throw error;
//     }
// }

// getUser().then((data)=>{
//     const name = document.querySelector('#Name');
//     const r = data.results[0];
//     console.log(r);
//     name.innerHTML = r.name.first
// })

// https://developer.mozilla.org/es/docs/Web/HTTP/Status

// entrypoint = punto de entrada
// endpoint = punto final

 
// async function getUser() {
//     try {
//         const result = await fetch('https://jsonplaceholder.typicode.com/posts/3',{ 
//             method: 'post', 
//             body : {  },
//             headers: []
//         });
//         const convertToJson = result.json();
//         return convertToJson
        
//     } catch (error) {
//         throw error;
//     }
// }

// getUser().then((data)=>{

//     const r = data
//     console.log(r);
// })


// 11 / 12/ 24

// put / path
// get 
// post
// delete

// CRUD: funcionalidad basica de un app 

// ENDPOINT

 
// async function getUser() {
//     try {
//         const result = await fetch('https://randomuser.me/api/',{ method: 'get' });
//         const convertToJson = result.json();
//         return convertToJson
        
//     } catch (error) {
//         throw error;
//     }
// }

// getUser().then((data)=>{
//     const name = document.querySelector('#Name');
//     const r = data.results[0];
//     console.log(r);
//     name.innerHTML = r.name.first
// })

// https://developer.mozilla.org/es/docs/Web/HTTP/Status

// entrypoint = punto de entrada
// endpoint = punto final

// https://jsonplaceholder.typicode.com/
// async function getUser() {
//     try {
//         const result = await fetch('https://jsonplaceholder.typicode.com/posts/1',{ 
//             method: 'delete'
//         });
//         const convertToJson = await result.json();
//          console.log(convertToJson);
         
        
//     } catch (error) {
//         throw error;
//     }
// }

// getUser().then((data)=>{

//     const r = data
//     console.log(r);
// })


// let getPokemon = ()=> {
//     const apiUrlBase = 'https://pokeapi.co/api/v2';
//     fetch(`${apiUrlBase}/pokemon/pichu`)
//         .then((pokemon)=> pokemon.json())
//         .then((result)=>{
//             console.log(result);
            
//         })
// }

// getPokemon()

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// let getPokemon = async ()=> {
//    try {
//     const apiUrlBase = 'https://pokeapi.co/api/v2';
//     const result = await fetch(`${apiUrlBase}/pokemon/pichu`, {method:'get'})
//     const pokemon = await result.json();
//     console.log(pokemon);
//    } catch (error) {
//     console.log(error);
    
//    } finally {
//     console.log('final');
//    }
    
// }
// getUser()
// getPokemon()