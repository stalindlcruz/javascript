/* Consumir randomuser api */

// const URL = 'https://randomuser.me/api/'

// fetch(URL)
//     .then(result => result.json())
//     .then(data => {
//         console.log(data.results[0].name.title);
//     })

const userImage = document.querySelector('#userImage');
const fetchUserBtn = document.querySelector('#fetchUserBtn');
const userName = document.querySelector('#name');

async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const { name, picture } = data.results[0];
        // const user = data.results[0];
        // const userPicture = data.results[0].picture.large;
        // const firstName = data.results[0].name.first;
        // const lastName = data.results[0].name.last;
        // // const name = data.results[0].name.first + ' ' + data.results[0].name.last;
        // const name = `${firstName} ${lastName}`
        // const fullName = `${user.name.first} ${user.name.last}`
        const fullName = `${name.first} ${name.last}`;

        userName.innerHTML = fullName;
        userImage.src = picture.large;
    } catch (error) {
        console.error('Error fetching random user:', error);
    }
}

fetchUserBtn.addEventListener('click', fetchRandomUser);
window.addEventListener('load',fetchRandomUser)