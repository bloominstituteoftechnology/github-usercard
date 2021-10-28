import axios from "axios";
import { appendChild } from "parse5/lib/tree-adapters/default";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/narayanan-nithya').then(res => {
  console.log(res);
})
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
const githubUsers = document.querySelector('.cards');


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

//const followersArray = [];

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
function userMaker(gitName){
  const userCard = document.createElement('div')
  const userInfo = document.createElement('div')
  const userImg = document.createElement('img')
  const userName = document.createElement('h3')
  const userLogin = document.createElement('p')
  const userLocation = document.createElement('p')
  const userURL = document.createElement('p')
  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio = document.createElement('p')

userCard.appendChild(userInfo)
userCard.appendChild(userImg)
userInfo.appendChild(userName)
userInfo.appendChild(userLogin)
userInfo.appendChild(userLocation)
userInfo.appendChild(userURL)
userInfo.appendChild(userFollowers)
userInfo.appendChild(userFollowing)
userInfo.appendChild(userBio)

userCard.classList.add('card')
userCard.classList.add('card-info')
userInfo.classList.add('name')
userInfo.classList.add('username')

axios.get(`https://api.github.com/users/${gitName}`).then(res =>{

  userImg.src = res.data.avatar_url
  userName.textContent = res.data.name
  userLogin.textContent = res.data.login
  userLocation.textContent = res.data.location
  userURL.href = res.data.url
  userFollowers.textContent = res.data.followers
  userFollowing.textContent = res.data.following
  userBio.textContent = res.data.bio
})

const gitUser = githubUsers.appendChild(userCard)
return gitUser;

}

userMaker('narayanan-nithya')

const followersArray = [];
followersArray.push('tetondan')
followersArray.push('dustinmyers')
followersArray.push('justsml')
followersArray.push('luishrd')
followersArray.push('bigknell')
followersArray.forEach(user =>{
  userMaker(user);//
})
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
