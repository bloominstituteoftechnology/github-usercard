import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cardsDiv = document.querySelector('.cards')

axios.get("https://api.github.com/users/Retrofitt").then(res =>{
  cardsDiv.appendChild(cardMaker(res.data))
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
    Skip to STEP 3 (line 34).
*/
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

// axios.get("https://api.github.com/users/Retrofitt").then(res =>{
//   const cardsDiv = document.querySelector('.cards')

//   cardsDiv.appendChild(cardMaker(res.data))
// })

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.
    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(obj =>{
  axios.get(`https://api.github.com/users/${obj}`).then(res =>{
  cardsDiv.appendChild(cardMaker(res.data))
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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function cardMaker({ avatar_url, name, login, location, html_url, followers, following, bio }){

  const cardPanel = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardInfoDiv = document.createElement('div')
  const cardName = document.createElement('h3')
  const cardUserName = document.createElement('p')
  const cardLoc = document.createElement('p')
  const cardProf = document.createElement('p')
  const cardProfAddress = document.createElement('a')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')

  cardImg.src = avatar_url;
  cardName.textContent = name;
  cardUserName.textContent = login;
  cardLoc.textContent = `Location: ${location}`
  cardProfAddress.href = html_url;
  cardProfAddress.textContent = html_url;
  cardProf.textContent = `Profile: `

  cardFollowers.textContent =  `Followers: ${followers}`
  cardFollowing.textContent =  `Following: ${following}`
  cardBio.textContent = `Bio: ${bio}`

  cardPanel.appendChild(cardImg)
  cardPanel.appendChild(cardInfoDiv)
  cardInfoDiv.appendChild(cardName)
  cardInfoDiv.appendChild(cardUserName)
  cardInfoDiv.appendChild(cardLoc)
  cardInfoDiv.appendChild(cardProf)
  cardInfoDiv.appendChild(cardFollowers)
  cardInfoDiv.appendChild(cardFollowing)
  cardInfoDiv.appendChild(cardBio)
  cardProf.appendChild(cardProfAddress)

  cardPanel.classList.add('card')
  cardInfoDiv.classList.add('card-info')
  cardName.classList.add('name')
  cardUserName.classList.add('username')

  return cardPanel

}

// 
//   List of LS Instructors Github username's:
//     tetondan
//     dustinmyers
//     justsml
//     luishrd
//     bigknell