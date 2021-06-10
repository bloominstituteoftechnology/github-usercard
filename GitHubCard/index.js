import axios from 'axios';
const cards = document.querySelector('.cards')

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const githubAccount = 'https://api.github.com/users/Mykeb96'

axios.get(githubAccount)
  .then(res => {
    githubCardTemplate(res)
  })
  .catch(err => {
    console.log(err)
  })


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

const followersArray = [  
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell'
]

function createCards(oneArray){
  console.log(oneArray)
  oneArray.forEach(element => {
    axios.get(element)
    .then(res => {
      githubCardTemplate(res)
    })
    .catch(res => {
      console.log(res)
    })
  });
}

createCards(followersArray);
console.log(cards)





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

function githubCardTemplate(oneObj){
  const card = document.createElement('div')
  card.classList.add('card')

  const userAvatar = document.createElement('img')
  userAvatar.setAttribute('src', oneObj.data.avatar_url)
  card.appendChild(userAvatar)

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  card.appendChild(cardInfo)

  const name = document.createElement('h3')
  name.classList.add('name')
  name.textContent = oneObj.data.name
  card.appendChild(name)

  const githubUsername = document.createElement('p')
  githubUsername.classList.add('username')
  githubUsername.textContent = oneObj.data.login
  card.appendChild(githubUsername)

  const githubLocation = document.createElement('p')
  githubLocation.textContent = `Location: ${oneObj.data.location}`
  card.appendChild(githubLocation)

  const githubProfile = document.createElement('p')
  githubProfile.textContent = `Profile:`
  const githubProfileAnchor = document.createElement('a')
  githubProfileAnchor.setAttribute('href', oneObj.data.html_url)
  githubProfile.appendChild(githubProfileAnchor)
  card.appendChild(githubProfile)

  const githubFollowers = document.createElement('p')
  githubFollowers.textContent = `followers: ${oneObj.data.followers_url}`
  card.appendChild(githubFollowers)

  const githubFollowing = document.createElement('p')
  githubFollowing.textContent = `following: ${oneObj.data.following_url}`
  card.appendChild(githubFollowing)

  const githubBio = document.createElement('p')
  githubBio.textContent = `Bio: ${oneObj.data.bio}`
  card.appendChild(githubBio)

  cards.appendChild(card)

  return card
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
