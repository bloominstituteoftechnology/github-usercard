import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
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


function getCardData(username) {
  axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      document.querySelector('.cards').insertAdjacentHTML('beforeend', cardCreator(response.data));
    })
    .catch(err => {
      console.log(err);
    })
}

getCardData('christophersutton');

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
followersArray.forEach(e => getCardData(e));


//  STEP 3: Create a function that accepts a single object as its only argument.
//    Using DOM methods and properties, create and return the following markup:

function cardCreator(data) {
  const card =
    `<div class='card'>
      <img src=${data.avatar_url} />
      <div class="card-info">
        <h3 class="name">${data.name}</h3>
        <p class="username">${data.login}</p>
        <p>Location: ${data.location}</p>
        <p>Profile:
          <a href=${data.html_url}>${data.html_url}</a>
        </p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <p>Bio: ${data.bio}</p>
      </div>
    </div>`
  return card;
}