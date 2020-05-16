/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

*//* Step 3: Create a function that accepts a single object as its only argument,
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



/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const entry = document.querySelector('.cards')

function cardMaster (param){

  const card = document.createElement('div')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const p = document.createElement('p')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const image = document.createElement('img')
  const profile = document.createElement('p')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
  const aTag = document.createElement('a')

  cardInfo.classList.add('card-info')
  card.classList.add('card')
  name.classList.add('name')
  username.classList.add('username')


  name.textContent = `Name: ${param.name}`
  username.textContent = `Username: ${param.login}`
  location.textContent = `Location: ${param.location}`
  image.src = param.avatar_url
  profile.textContent = `Profile:`
  aTag.href = param.html_url
  aTag.textContent = ` ${aTag}`
  followers.textContent = `Followers: ${param.followers}`
  following.textContent = `Following: ${param.following}`
  bio.textContent = `Bio: ${param.bio}`

  card.append(image, cardInfo)
  cardInfo.append(name,username,location,profile,followers,following,bio)
  profile.append(aTag)

  return card
}
axios.get('https://cors-anywhere.herokuapp.com/https://api.github.com/users/dustnclay')
.then(data => {
let newData = data.data
console.log(newData)
entry.prepend(cardMaster(newData))
})
.catch(err => console.log('error in retrieving', err))
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
axios.get('https://cors-anywhere.herokuapp.com/https://api.github.com/users/tetondan')
.then(data =>{
let teet = data.data
entry.append(cardMaster(teet))
})

axios.get('https://cors-anywhere.herokuapp.com/https://api.github.com/users/dustinmyers')
.then(data => {
let otherDustin = data.data
entry.append(cardMaster(otherDustin))
})

axios.get('https://cors-anywhere.herokuapp.com/https://api.github.com/users/justsml')
.then(data => {
let just = data.data
entry.append(cardMaster(just))
})

axios.get('https://cors-anywhere.herokuapp.com/https://api.github.com/users/luishrd')
.then(data =>{
 let luis = data.data
 entry.append(cardMaster(luis))
})

axios.get('https://cors-anywhere.herokuapp.com/https://api.github.com/users/bigknell')
.then(data => {
let knell = data.data
entry.append(cardMaster(knell))
})
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/