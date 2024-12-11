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
