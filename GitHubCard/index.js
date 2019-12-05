/* Step 1: using axios, send a GET request to the following URL 
          (replacing the palceholder with your Github name):
*/
// const axios = require('axios');

axios.get('https://api.github.com/users/wesley-moody')
  .then (response => {
    // console.log(response.data)
    // const myInfo = response.data;
    gitHubFollowers(response.data);
    // const mainCard = document.querySelector('.cards');
    // const cardInfo = document.gitHubFollowers(myInfo);
    // console.log(myInfo);
    // mainCard.appendChild(cardInfo);
  })
  .catch(error => {
    console.log (error);
  })

    // Step 4

    // const cards = document.querySelector('.cards')
    // const cardInfo = cardCreator(myInfo)
    // cards.appendChild(cardInfo)




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
// const followersArray = [];
// const followersArray = [ 
// ];

// i = 0;
// followersArray.forEach((user, i) => {
//   axios.get(`https://api.github.com/users/${followersArray[i]}`)
//     .then(response => {
//       console.log(response);
//       const myInfo = response.data;
//       const mainCard = document.querySelector('.cards');
//       const cardInfo = gitHubFollowers(myInfo);
//       console.log(cardInfo);
//       mainCard.appendChild(cardInfo);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   console.log(followersArray);
// });

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

const cards = document.querySelector('.cards');
//console.log(cards);

function gitHubFollowers(data) {

  // variables

  const gitCard = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3Name = document.createElement('h3');
  const pUser = document.createElement('p');
  const pLocation = document.createElement('p');
  const pProfile = document.createElement('p');  
    const pProfileUrl = document.createElement('a');
  const pFollowers = document.createElement('p');
  const pFollowing = document.createElement('p');
  const Bio = document.createElement('p');

  //class list

  gitCard.classList.add('card');
  cardInfo.classList.add('card-info');
  h3Name.classList.add('name');
  pUser.classList.add('username');

  //append children

  gitCard.appendChild(img);
  gitCard.appendChild(cardInfo);
  cardInfo.appendChild(h3Name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(pLocation);
  cardInfo.appendChild(pProfile);
  pProfile.appendChild(pProfileUrl);
  cardInfo.appendChild(pFollowers);
  cardInfo.appendChild(pFollowing);
  cardInfo.appendChild(Bio);

  // textcontent

  img.setAttribute('src', data.avatar_url);
  h3Name.textContent = data.name;
  userName.textContent = data.login;
  pLocation.textContent = data.location;
  pProfile.textContent = `Profile: ${data.html_url}`
  aProfileUrl.textContent = data.html_url;
  pFollowers.textContent = data.followers;
  pFollowing.textContent = data.following;
  Bio.textContent = data.bio;
  cards.appendChild(gitCard);
  console.log(gitCard);
  return gitCard
}








