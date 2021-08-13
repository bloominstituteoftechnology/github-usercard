/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios'
const entryPoint = document.querySelector('div.cards')

const getInfo = (username) => {
  axios.get(`https://api.github.com/users/${username}`)
  .then(({data})=> {console.log(data)
   entryPoint.appendChild(cardMaker(data))
 })
   .catch(err => console.log(err))
}

const followersArray = [
  'jlbevans',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(username => {
  getInfo(username)
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

function cardMaker({ name, avatar_url, login, location, gitHub, url, followers, following, bio, html_url }) {
  
  const userName = document.createElement('div')
  const profilePic = document.createElement('img')
  const information = document.createElement('div')
  const realName = document.createElement('h3')
  const userLogin = document.createElement('p')
  const userLocation = document.createElement('p')
  const profile = document.createElement('p')
  const address = document.createElement('a')
  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio = document.createElement('p')

  userName.appendChild(profilePic)
  userName.appendChild(information)
  information.appendChild(userLogin)
  information.appendChild(realName)
  information.appendChild(userLocation)
  information.appendChild(profile)
  information.appendChild(userFollowers)
  information.appendChild(userFollowing)
  information.appendChild(userBio)
  profile.appendChild(address)

  profilePic.setAttribute('src', avatar_url)
  profilePic.setAttribute('alt', name)

  userName.classList.add('card')
  information.classList.add('card-info')
  realName.classList.add('name')
  userLogin.classList.add('username')

  realName.textContent = name
  userLogin.textContent = login
  userLocation.textContent = location
  profile.textContent = gitHub
  address.textContent = url
  userFollowers.textContent = followers
  userFollowing.textContent = following
  userBio.textContent = bio
  address.textContent = html_url

  return userName
}

// followersArray.forEach(({  name, login, location, gitHub, url, followers, following, bio, html_url}) => {
//   const userName = cardMaker(  name, login, location, gitHub, url, followers, following, bio, html_url)
//   cardCreator.appendChild(userName)
// })

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
