
import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const myData = axios.get('http://api.github.com/users/zach-morris-txt')
console.log(myData)
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

const followersArray = [];

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
function myGitCard({singleObj}){
  //Instantiate
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const aTag = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  //CSS Class / Attribute
  card.classList.add('.card')
  img.classList.add('img-img')//CHECK
  name.classList.add('.name')
  username.classList.add('.username')
  username.classList.add('.card-p')
  location.classList.add('.card-p')
  profile.classList.add('.card-p')
  followers.classList.add('.card-p')
  following.classList.add('.card-p')
  bio.classList.add('.card-p')

  img.src = //ImgUrlOfUser
  name.textContent = //Users Name
  username.textContent = //UsersUserName
  location.textContent = //location
  profile.textContent = //Profile Link
  followers.textContent = //followers
  following.textContent = //following
  bio.textContent = //bio

  //Hierarchy
  card.appendChild(img, cardInfo)
  cardInfo.appendChild(name, username, location, profile, followers, following, bio)
  profile.appendChild(aTag)

  return card
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
