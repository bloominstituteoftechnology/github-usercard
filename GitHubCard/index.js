import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/adamhinton')
.then(res =>{
const dataObjectV = res.data;
const userCard = userCardMaker(dataObjectV);
const bigKahuna =document.querySelector('.cards');
bigKahuna.appendChild(userCard)
//follow step 4
//get the element with a class of cards from the DOM, document.querySelector('.cards')
//append the user card to the element we just querySelected
})

.catch(err =>{
  console.log(err)
})
// console.log(userCard);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
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

  // STEP 3: Create a function that accepts a single object as its only argument.
  //   Using DOM methods and properties, create and return the following markup:

  //   <div class="card">
  //     <img src={image url of user} />
  //     <div class="card-info">
  //       <h3 class="name">{users name}</h3>
  //       <p class="username">{users user name}</p>
  //       <p>Location: {users location}</p>
  //       <p>Profile:
  //         <a href={address to users github page}>{address to users github page}</a>
  //       </p>
  //       <p>Followers: {users followers count}</p>
  //       <p>Following: {users following count}</p>
  //       <p>Bio: {users bio}</p>
  //     </div>
  //   </div>

 
const userCardMaker = function (dataObject){
const divCard = document.createElement('div');
  divCard.classList.add('card');
const imgUser = document.createElement('img');
  imgUser.src= dataObject['avatar_url'];
const divCardInfo=  document.createElement('div');
  divCardInfo.classList.add('card-info');
const h3Names = document.createElement('h3');
  h3Names.classList.add('name');
  h3Names.textContent = dataObject['name'];
const pUsername = document.createElement('p');
  pUsername.classList.add('username');
  pUsername.textContent = dataObject['login'];
const pLocation = document.createElement('p');
  pLocation.textContent =`Location: ${dataObject['location']}`;
  const profileLink = document.createElement('p');
    profileLink.textContent = `Profile:`
  const profileA = document.createElement('a');
    profileA.href = dataObject['url']
    profileA.textContent = `${dataObject['url']}`
const pFollowers = document.createElement('p');
  pFollowers.textContent= `Followers: ${dataObject['followers']}`;
const pFollowing = document.createElement('p');
  pFollowing.textContent= `Following: ${dataObject['following']}`;
const pBio = document.createElement('p');
  pBio.textContent = `Bio: ${dataObject['bio']}`;

divCard.appendChild(imgUser);
divCard.appendChild(divCardInfo);
divCardInfo.appendChild(h3Names);
divCardInfo.appendChild(pUsername);
divCardInfo.appendChild(pLocation);
divCardInfo.appendChild(profileLink);
profileLink.appendChild(profileA);
divCardInfo.appendChild(pFollowers);
divCardInfo.appendChild(pFollowing);
divCardInfo.appendChild(pBio);

return divCard
};





/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


const followersArray = [
 'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
 ];
 

followersArray.forEach(item =>{
  axios.get(`https://api.github.com/users/${item}`)
.then(res =>{
const dataObjectV = res.data;
const userCard = userCardMaker(dataObjectV);
const bigKahuna =document.querySelector('.cards');
bigKahuna.appendChild(userCard)
})
.catch(err =>{
  console.log(err)
})
})
