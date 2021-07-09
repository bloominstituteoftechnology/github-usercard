
import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



const grabData = (event) => {
  console.log('its working')
  axios.get("https://api.github.com/users/EricGant")
    .then(res => {
      console.log(res.data)
    })
    .catch(err =>{
})
}

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
const users = [    
  "KevinHock",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "rickmansfield"
]

  users.forEach( i =>{
    newUsers(i);
  })

  function newUsers(n){
  axios.get(`https://api.github.com/users/${n}`)
  .then(res => {
    newCard(res)
  })
}

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
const cardAtt = document.querySelector('.cards')

axios.get(`https://api.github.com/users/EricGant`)
  .then(res => {
    newCard(res)
  })

function newCard (obj) {
  const cards = document.createElement('div')
  cards.classList.add('card')
  const img = document.createElement('img')
  const cardinfo = document.createElement('div')
  cardinfo.classList.add('card-info')
  const h3 = document.createElement('h3')
  h3.classList.add('name')
  const username = document.createElement('p')
  username.classList.add('username')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const ghub = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
  cardAtt.appendChild(cards)
  cards.appendChild(img)
  cards.appendChild(cardinfo)
  cardinfo.appendChild(h3)
  cardinfo.appendChild(username)
  cardinfo.appendChild(location)
  cardinfo.appendChild(profile)
  cardinfo.appendChild(ghub)
  cardinfo.appendChild(followers)
  cardinfo.appendChild(following)
  cardinfo.appendChild(bio)

  img.src=obj.data.avatar_url;
  h3.textContent= obj.data.name 
  username.textContent = obj.data.login
  location.textContent =(`Location: ${obj.data.location}`)
  profile.textContent=("Profile:")
  ghub.href = obj.data.html_url
  ghub.textContent= obj.data.html_url
  console.log(obj.data.html_url)
  followers.textContent=(`Followers: ${obj.data.followers}`)
  following.textContent=(`Following: ${obj.data.following}`)
  bio.textContent=(`Bio: ${obj.data.bio}`)
  return cards
}





/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/