/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const axios = require('axios')
const gitHub = (resp.data)

axios.get('https://api.github.com/users/tommyconner96')

  .then(resp => {
  console.log(resp.data)

})
axios.catch((error) => {
  console.log("There is an error", err)
})

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

const followersArray = [];

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
function users(object) {
//elements
let card = document.createElement('div')//card
let avi = document.createElement('img')//img url of user
let cardInfo = document.createElement('div')//card-info
let name = document.createElement('h3')//h3 class 'name'
let username = document.createElement('p')//p class 'username'
let location = document.createElement('p')//p location
let profile = document.createElement('p')//p profile
let url = document.createElement('a')//felt cute might delete later?
let followers = document.createElement('p')//p followers
let following = document.createElement('p')//p following
let bio = document.createElement('p')//p bio

//class names
card.classList.add('card')

cardInfo.classList.add('card-info')
name.classList.add('name')
username.classList.add('username')


//order
card.appendChild(avi)
card.appendChild(cardInfo)
cardInfo.appendChild(name)
cardInfo.appendChild(username)
cardInfo.appendChild(location)
cardInfo.appendChild(profile)
cardInfo.appendChild(followers)
cardInfo.appendChild(following)
cardInfo.appendChild(bio)



}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
