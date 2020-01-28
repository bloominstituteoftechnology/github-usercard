// Step 1: using axios, send a GET request to the following URL
// const axios = require('axios').default;

 axios.get("https://api.github.com/users/nickperez1285")
.then(function (response) {

console.log(response);
})
.catch(function (error) {
// handle error
console.log(error);
})
.then(function () {
// always executed
});
// (replacing the palceholder with your Github name):
// https://api.github.com/users/<your name>
/* Step 2: Inspect and study the data coming back, this is YOUR
github info! You will need to understand the structure of this
data in order to use it to build your component function
Skip to Step 3.
*/
//  Step 4: Pass the data received from Github into your function,
// create a new component and add it to the DOM as a child of .cards
const gitCards = document.querySelector('.cards')
axios.get("https://api.github.com/users/nickperez1285").then(response => {
console.log(response);
const domParty = domParts(response)
gitCards.appendChild(domParty)
})

/* Step 5: Now that you have your own card getting added to the DOM, either
follow this link in your browser https://api.github.com/users/<Your github name>/followers
, manually find some other users' github handles, or use the list found
at the bottom of the page. Get at least 5 different Github usernames and add them as
Individual strings to the friendsArray below.

Using that array, iterate over it, requesting data for each user, creating a new card for each
user, and adding that card to the DOM.
*/
const followersArray = ["https://api.github.com/users/tetondan" , "https://api.github.com/users/dustinmyers"  , 
"https://api.github.com/users/justsml"  ,"https://api.github.com/users/luishrd" , "https://api.github.com/users/bigknell" ];

followersArray.forEach(gitLink => {
  axios.get(gitLink).then(response => {
  console.log(response);
  const card = domParts(response);
  gitCards.appendChild(card);
})
})


// Step 3: Create a function that accepts a single object as its only argument,
//          Using DOM methods and properties, create a component that will return the following DOM element:




function domParts(obj) {
const div  =  document.createElement('div')
div.classList.add('card')
const img = document.createElement('img')
img.src = `${obj.data.avatar_url}`
const cardDiv = document.createElement('div')
cardDiv.classList.add('card-info')
const h3div = document.createElement('h3')
h3div.classList.add('name')
h3div.textContent = `${obj.data.name}`
const  pUser= document.createElement('p')
pUser.classList = 'username'
pUser,textContent= `${obj.data.username}`

const pLocation = document.createElement('p')
pLocation.textContent = `Location: ${obj.data.location}` 

const pProfile = document.createElement('p')
pProfile.textContent = "Profile: "

 const anchor = document.createElement('a')
  anchor.href = `${obj.data.html_url}`
  anchor.textContent = obj.data.html_url

  const followers = document.createElement('p')
  followers.textContent = `Followers: ${obj.data.followers}`



  const following = document.createElement('p')
  following.textContent = `Following: ${obj.data.following}`



  const bio = document.createElement('p')
  bio.textContent = `Bio: ${obj.data.bio}`

div.appendChild(img)
div.appendChild(cardDiv)
cardDiv.appendChild(h3div)
cardDiv.appendChild(pUser)
cardDiv.appendChild(pLocation)
cardDiv.appendChild(pProfile)
pProfile.appendChild(anchor)
cardDiv.appendChild(followers)
cardDiv.appendChild(following)
cardDiv.appendChild(bio)



return div
}




// // <div class="card">
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
/* List of LS Instructors Github username's:
tetondan
dustinmyers
justsml
luishrd
bigknell
*/