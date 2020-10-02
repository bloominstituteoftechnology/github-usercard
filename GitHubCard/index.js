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
const entryPoint = document.querySelector('.cards')
axios.get('https://api.github.com/users/TreywRoberts')
.then(res =>{
  const profile = profileCardMaker(res.data)
    entryPoint.append(profile)
  
})
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['https://api.github.com/users/PedroVanT','https://api.github.com/users/matty-serwer','https://api.github.com/users/TGIFernando'];


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
function profileCardMaker(obj){
  const profileCard = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileURL = document.createElement('a')
  const follower = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  profileCard.classList.add('card')
  cardInfo.classList.add('cardInfo')
  name.classList.add('name')
  userName.classList.add('username')

  profileCard.append(image)
  profileCard.append(cardInfo)
  cardInfo.append(name)
  cardInfo.append(userName)
  cardInfo.append(location)
  cardInfo.append(profile)
  cardInfo.append(profileURL)
  cardInfo.append(follower)
  cardInfo.append(following)
  cardInfo.append(bio)

  image.src = obj.avatar_url
  name.textContent = obj.name
  userName.textContent = obj.login
  location.textContent= `Location: ${obj.location}`;
  profile.textContent = 'Profile: ';
  profileURL.href = obj.html_url
  profileURL.textContent=obj.html_url
  follower.textContent = `Follower: ${obj.follower}`
  following.textContent = `Following: ${obj.following}`
  bio.textContent = `Bio: ${obj.bio}`
  
  return profileCard
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
