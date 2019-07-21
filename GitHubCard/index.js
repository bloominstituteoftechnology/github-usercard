/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// .then(data => {
//     console.log('Success!', data)
//     const cards = document.querySelector('.cards');
//     cards.appendChild(createCard(data.data));
// })
// .catch(function(err) {
//     console.log('error', err);
// })


// Make a request for a user with a given ID

axios.get('https://api.github.com/users/dmunter2')
    .then(data => {
        console.log(`Sucess!`, data);
        const cards = document.querySelector('.cards');
        cards.appendChild(createCard(data.data));
    })
    .catch(function(err) {
        console.log(`error`, err);
    })


const followersArray = [];
axios.get(`https://api.github.com/users/dmunter2/followers`)
    .then(data => {
        console.log('Works! Here is the list of your followers: ', data.data);
        const followersData = data.data;
        followersData.forEach(followerData => {
            followersArray.push(followerData.login);
        })

        followersArray.forEach(follower => {
            axios.get(`https://api.github.com/users/${follower}`)
                .then(data => {
                    console.log('Follower info: ', data.data);
                    const cards2 = document.querySelector('.cards');
                    cards2.appendChild(createCard(data.data));
                })
                .catch(err => {
                    console.log('Could not retrieve follower info: ', err);
                })
        })

    })

.catch(err => {
    console.log('There was a problem retrieving your list of followers: ', err);
})



function createCard(data) {
    const divContainer = document.createElement('div');
    const headerImg = document.createElement('img');
    const infoContainer = document.createElement('div');
    const name = document.createElement('h1');
    const userName = document.createElement('h2');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');

    divContainer.classList.add('card');
    name.classList.add('name');
    userName.classList.add('username')



    divContainer.appendChild(headerImg);
    divContainer.appendChild(infoContainer);
    infoContainer.appendChild(name);
    infoContainer.appendChild(userName);
    infoContainer.appendChild(location);
    infoContainer.appendChild(profile);
    infoContainer.appendChild(followers);
    infoContainer.appendChild(following);
    infoContainer.appendChild(bio);


    headerImg.src = data.avatar_url;
    name.textContent = `${data.name}`;
    userName.textContent = data.login;
    profile.textContent = `Profile:${data.html_url}`;
    location.textContent = `My location is ${data.location}`;
    followers.textContent = `Followers: ${data.followers}`;
    following.textContent = `Followers: ${data.following}`;
    bio.textContent = `MY bio is null ${data.bio}`
        // profile.textContent = data.url;



    return divContainer





}