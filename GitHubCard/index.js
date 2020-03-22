/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/TyNelson502")
.then( res => {
console.log(res.data)
const myCard = createCard(res.data)
document.querySelector(".cards").appendChild(myCard)
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
axios.get("https://api.github.com/users/TyNelson502/followers")
.then( res => {
console.log(res)
res.data.forEach(person => followersArray.push(person.login))
console.log(followersArray)
const Aaron = res.data[0]
console.log(Aaron)
  axios.get(`https://api.github.com/users/${Aaron.login}`)
  .then( res =>{
    console.log(res)
    const aaronCard = createCard(res.data)
    document.querySelector(".cards").appendChild(aaronCard)
  })
})

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
function createCard(object){
  //elements
  const container = document.createElement("div")
  const image = document.createElement("img")
  const info = document.createElement("div")
  const name = document.createElement("h3")
  const username = document.createElement("p")
  const location = document.createElement("p")
  const profile = document.createElement("p")
  const anchor = document.createElement("a")
  const followers = document.createElement("p")
  const following = document.createElement("p")
  const bio = document.createElement("p")
//append
container.append(image, info)
info.append(name, username, location, profile, followers, following, bio)
profile.appendChild(anchor)
//add classes
container.classList.add("card")
info.classList.add("card-info")
name.classList.add("name")
username.classList.add("username")

image.src = object.avatar_url
name.textContent = "Name: " + object.name
username.textContent = "Username: " + object.login
location.textContent = "Location: " + object.location
profile.href = "Profile: " + object.url
profile.textContent = object.url
followers.textContent = "Followers: " + object.followers 
following.textContent = "Following: " + object.following
bio.textContent = "Bio: " + object.bio

return container
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
