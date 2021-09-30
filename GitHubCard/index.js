/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/christiansmith2394
*/
import axios from 'axios'
  axios.get('https://api.github.com/users/ChristianSmith2394')
    .then(resp => {
      console.log(resp)
      const cards = document.querySelector('.cards')
      const newCard = githubCard(resp.data.avatar_url,resp.data.name,resp.data.login,resp.data.location,resp.data.html_url,resp.data.userFollowers,resp.data.userFollowing,resp.data.userBio)
      cards.appendChild(newCard)
    })
    .catch(err => {
      console.error(err)
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

function githubCard({ avatar_url, name, login, location, html_url, userFollowers, userFollowing, userBio }) {
  const card = document.createElement('div')
  const userImg = document.createElement('img')
  const info = document.createElement('div')
  const realName = document.createElement('h3')
  const username = document.createElement('p')
  const userLocation = document.createElement('p')
  const profile = document.createElement('p')
  const link = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  card.appendChild(userImg)
  card.appendChild(info)
  info.appendChild(realName)
  info.appendChild(username)
  info.appendChild(userLocation)
  info.appendChild(profile)
  profile.appendChild(link)
  info.appendChild(followers)
  info.appendChild(following)
  info.appendChild(bio)

  userImg.src = avatar_url
  realName.textContent = name
  username.textContent = login
  userLocation.textContent = location
  link.textContent = html_url
  followers.textContent = userFollowers
  following.textContent = userFollowing
  bio.textContent = userBio

  card.classList.add('card')
  // userImg.classList.add('card-img')
  info.classList.add('card-info')
  realName.classList.add('card-.name')
  username.classList.add('card-p')

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
