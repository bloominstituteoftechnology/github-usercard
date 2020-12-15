/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios';

axios.get('https://api.github.com/users/iam-saeed').then((result) => {
  console.log(result);
})

// 
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
// STEP 3: Create a function that accepts a single object as its only argument.
// Using DOM methods and properties, create and return the following markup:
// <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>

function cardCreator(obj) {
  const card = document.createElement('div');
  card.classList.add('card');

  // appending children of div class 'card'

  const profileImg = document.createElement('img');
  profileImg.src = obj.avatar_url;
  card.appendChild(profileImg);


  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info')
  // appending children to div class 'card-info'
  const myName = document.createElement('h3');
  myName.classList.add('name');
  myName.textContent = obj.name;
  cardInfo.appendChild(myName);

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.src = obj.login;
  cardInfo.appendChild(userName);

  const myLocation = document.appendChild('p');
  myLocation.textContent = `Location: ${obj.location}`;
  cardInfo.appendChild(myLocation);

  const myProfile = document.createElement('p');
  myProfile.textContent = "Profile: ";
  cardInfo.appendChild(myProfile);

  const profileLink = document.createElement('a');
  profileLink.setAttribute.href = obj.html_url;
  myProfile.appendChild(profileLink);

  const myFollowers = document.createElement('p');
  myFollowers.innerText = `Following: ${obj.following}`;
  cardInfo.appendChild(myFollowers);

  const myFollowing = document.createElement('p');
  myFollowing.innerText = `Followers: ${obj.followers}`;
  cardInfo.appendChild(myFollowing);

  const myBio = document.createElement('p');
  myBio.innerText = `Bio: ${obj.bio}`;
  cardInfo.appendChild(myBio);
  
  return card;

}
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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
