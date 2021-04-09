
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
const myData = axios.get('https://api.github.com/users/zach-morris-txt')
console.log(myData)

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const entryPoint = document.querySelector('.cards')
axios
  .get('https://api.github.com/users/zach-morris-txt')
  .then(response => {
    console.log(response)
    console.log(response.data)

    const myCard = getCard(response.data)
    console.log(myCard)
    entryPoint.append(myCard)
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

//ADD TO ARRAY
const followersArray = [];
const first = axios.get('https://api.github.com/users/tetondan')
  .then(response => {
    const firstUser = response.data.html_url
    followersArray.push(firstUser)
  })
const second = axios.get('https://api.github.com/users/dustinmyers')
  .then(response => {
    const secondUser = response.data.html_url
    followersArray.push(secondUser)
  })
const third = axios.get('https://api.github.com/users/justsml')
  .then(response => {
    const thirdUser = response.data.html_url
    followersArray.push(thirdUser)
  })
const fourth = axios.get('https://api.github.com/users/luishrd')
  .then(response => {
    const fourthUser = response.data.html_url
    followersArray.push(fourthUser)
  })
const fifth = axios.get('https://api.github.com/users/bigknell')
  .then(response => {
    const fifthUser = response.data.html_url
    followersArray.push(fifthUser)
  })

//ITERATE OVER ARRAY   APPEND
console.log(followersArray)
followersArray.forEach(function(index){
  const neededValue = index
  axios.get(neededValue)
       .then(response => {
          const thisCard = getCard(response.data)
          console.log(thisCard)
          entryPoint.append(thisCard)
          console.log(response.data)
       })
})

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
function getCard({ avatar_url, name, login, location, html_url, followers, following, bio }){
  //Instantiate
  const cardV = document.createElement('div')
  const imgV = document.createElement('img')
  const cardInfoV = document.createElement('div')
  const nameV = document.createElement('h3')
  const usernameV = document.createElement('p')
  const locationV = document.createElement('p')
  const profileV = document.createElement('p')
  const aTagV = document.createElement('a')
  const followersV = document.createElement('p')
  const followingV = document.createElement('p')
  const bioV = document.createElement('p')

  imgV.src = avatar_url
  nameV.textContent = name
  usernameV.textContent = login
  locationV.textContent = `Location: ${location}`
  aTagV.setAttribute('href', html_url)
  profileV.innerHTML = `Profile: ${aTagV}`
  followersV.textContent = `Followers: ${followers}`
  followingV.textContent = `Following: ${following}`
  bioV.textContent = `Bio: ${bio}`
  
  //CSS Class / Attribute       NOTE, NO PERIODS IN CLASSNAME SYNTAX
  cardV.classList.add('card')
  imgV.classList.add('card-img')//CHECK
  nameV.classList.add('name')
  usernameV.classList.add('username')
  usernameV.classList.add('card-p')
  locationV.classList.add('card-p')
  profileV.classList.add('card-p')
  followersV.classList.add('card-p')
  followingV.classList.add('card-p')
  bioV.classList.add('card-p')

  //Hierarchy APPARENTLY MUST LIST INDIVIDUALLY (OR NOT WITH COMMAS)
  cardV.appendChild(imgV)
  cardV.appendChild(cardInfoV)
  cardInfoV.appendChild(nameV)
  cardInfoV.appendChild(usernameV) 
  cardInfoV.appendChild(locationV)
  cardInfoV.appendChild(profileV)
  cardInfoV.appendChild(followersV)
  cardInfoV.appendChild(followingV)
  cardInfoV.appendChild(bioV)
  profileV.appendChild(aTagV)

  return cardV
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
