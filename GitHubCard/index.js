

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
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"]

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
const container = document.querySelector('.container')

const newCard = ({obj}) =>{
  const cards = document.createElement('div')
  cards.classList.add('card')
  const img = document.createElement('img')
  const cardinfo = document.createElement('div')
  cardinfo.classList.add('card-info')
  const h3 = document.createElement('h3')
  h3.classList.add('name')
  const p1 = document.createElement('p')
  p1.classList.add('username')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const a = document.createElement('a')
  const p4 = document.createElement('p')
  const p5 = document.createElement('p')
  const p6 = document.createElement('p')
  h3.textContent = name
  img.textContent = img
  cardAtt.appendChild(cards)
  cards.appendChild(img)
  cards.appendChild(cardinfo)
  cardinfo.appendChild(h3)
  cardinfo.appendChild(p1)
  cardinfo.appendChild(p2)
  cardinfo.appendChild(p3)
  p3.appendChild(a)
  cardinfo.appendChild(p4)
  cardinfo.appendChild(p5)
  cardinfo.appendChild(p6)
  return cards
}
newCard({grabData})

const grabDataAgain = (event) => {
  console.log('its working')
  axios.get("https://api.github.com/users/EricGant")
    .then(res => {
      res.data.forEach(name => {
        const cards = newCard(name)
        container.appendChild(cards)
      })
        
      })
    .catch(err =>{
})
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/