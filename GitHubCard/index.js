/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

axios.get('https://api.github.com/users/spettigrew')
.then(response => {
  console.log(response)
  document.querySelector('.cards').appendChild(Cards(response.data)) 
})
.catch((error) => {
  console.log(error)
});

const container = document.querySelector('.container')

function Cards (array) {
const card = document.createElement('div')
card.classList.add('.card')

const image = document.createElement('img')
image.src = array.avatar_url
card.appendChild(image)

const div = document.createElement('div')
card.classList.add('.card-info')

const title = document.createElement('h3')
title.textContent = titleText
card.appendChild(title)

const username = document.createElement('p')
username.textContent = pText
card.appendChild(username)

const location = document.createElement('p')
location.textContent = array.location
card.appendChild(location)

const profile = document.createElement('p')
profile.textContent = array.html_url
card.appendChild(profile)

const aTag = document.createElement('p')
aTag.textContent = href
profile.appendChild(aTag)

const followers = document.createElement('p')
followers.textContent = array.followers
card.appendChild(followers)

const following = document.createElement('p')
following.textContent = array.following
card.appendChild(following)

const bio = document.createElement('p')
bio.textContent = array.bio
card.appendChild(bio)

return card

}

