/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios'
const entryPoint = document.querySelector('div.cards');


const getCard = () => {axios.get('https://api.github.com/users/jpjacques')
    .then(({data}) => {
    return newCard(data);
})
    .catch(err => console.log(err))
                      }
getCard()



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'];

const arrInfo = (arr) => {
    arr.forEach(e => {
        {axios.get('https://api.github.com/users/' + e)
            .then(({data}) => {
            return newCard(data);
        })
            .catch(err => console.log(err))
        }}
               )

}


arrInfo(followersArray)

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const newCard = (obj) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');    

    const image = document.createElement('img');
    image.src = obj.avatar_url;
    
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const headingThree = document.createElement('h3');
    headingThree.classList.add('name');
    headingThree.textContent = obj.name;

    const usernameP = document.createElement('p');
    usernameP.classList.add('username'); 
    usernameP.textContent = obj.login;

    const locationP = document.createElement('p');
    locationP.textContent = 'Location: ' + obj.location;

    const profileP = document.createElement('p');
    profileP.textContent = 'Profile: '

    const anchor = document.createElement('a');
    anchor.href = obj.html_url;
    anchor.textContent = obj.html_url;

    const followersP = document.createElement('p');
    followersP.textContent = 'Followers: ' + obj.followers;

    const followingP = document.createElement('p');
    followingP.textContent = 'Following: ' + obj.following;

    const bioP = document.createElement('p');
    bioP.textContent = 'Bio: ' + obj.bio;

    entryPoint.appendChild(cardDiv)
    cardDiv.appendChild(image);
    cardDiv.appendChild(cardInfo)
    cardInfo.appendChild(headingThree);
    cardInfo.appendChild(usernameP);
    cardInfo.appendChild(locationP);
    cardInfo.appendChild(profileP);
    profileP.appendChild(anchor);
    cardInfo.appendChild(followersP);
    cardInfo.appendChild(followingP);
    cardInfo.appendChild(bioP);
    
    /*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

    console.log(cardDiv)   
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
