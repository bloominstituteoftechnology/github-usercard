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
          // Individual strings to the friendsArray below. Needs to be followerArray
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

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

// Every time you do a .get(response), you must do a .then and .catch to get axios work.
// `${}` names of list username's
axios.get('https://api.github.com/users/spettigrew') 
.then(response => {
  console.log(response)
  document.querySelector('.cards').appendChild(Cards(response.data)) 
})
.catch((error) => {
  console.log(error)
})


const container = document.querySelector('.container')
// (image, name, username, location, github, followers, following, bio) instead of (array)
function Cards (array) {
let card = document.createElement('div')
card.classList.add('card')

const image = document.createElement('img')
image.src = array.avatar_url
card.appendChild(image)

const div = document.createElement('div')
div.classList.add('card-info')
card.appendChild(div)

const title = document.createElement('h3')
title.textContent = `Name: ${array.name}`
card.appendChild(title)

const username = document.createElement('p')
username.textContent = array.login
card.appendChild(username)

const location = document.createElement('p')
location.textContent = `Location: ${array.location}`
card.appendChild(location)

const profile = document.createElement('p')
profile.textContent = 'profile: '
card.appendChild(profile)

const aTag = document.createElement('p')
aTag.setAttribute('href', array.html_url)
aTag.textContent = array.html_url
profile.appendChild(aTag)
// The setAttribute() method adds the specified attribute to an element, and gives it the specified value.

const followers = document.createElement('p')
followers.textContent = `Followers: ${array.followers}`
card.appendChild(followers)

const following = document.createElement('p')
following.textContent = `Following: ${array.following}`
card.appendChild(following)

const bio = document.createElement('p')
bio.textContent = `Bio: ${array.bio}`
card.appendChild(bio)

return card

}


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'wallacecs007', 'raythurman2386', 'bobbidigi', 'krboelter', 'nickdurbin', 'rupol'];


followersArray.forEach((name) => {
  axios.get(`https://api.github.com/users/${name}`)
    .then(response => {
      document.querySelector('.cards').appendChild(Cards(response.data)) 
    })
    .catch(err => console.log(err))
});

// const cardsSection = document.querySelector('.cards');
// axios.get('https://api.github.com/users/spettigrew')
//   .then(userData => {
//     let followersArray = [];
// Separate API call to get MY followers in an Array

//     axios.get('https://api.github.com/users/spettigrew/followers')
//       .then(followers => {
//         followersArray = followers.data.map(follower => follower.login)

// Using .forEach method

//         followersArray.forEach(followerLogin => {
//           axios.get(`https://api.github.com/users/${followerLogin}`)
//             .then(followerData => {
//               cardsSection.appendChild(createCard(followerData.data))
//             })
//             .catch(error => console.error(error))
//         })
//       })
//       .catch(error => console.error(error))
//     cardsSection.appendChild(createCard(userData.data));
//   })
//   .catch(error => {
//     console.log(error)
//   });