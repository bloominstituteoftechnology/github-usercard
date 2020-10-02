import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// axios.get(https://api.github.com/users/Sonyei)

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


function gitHubFriends({ avatar_url, name, login, location, html_url, followers, following, bio}) {

  const gitHubCards = document.createElement('div')
  const image = document.createElement('img')
  const container = document.createElement('div')
  const title = document.createElement('h3')
  const user = document.createElement('p')
  const local = document.createElement('p')
  const profile = document.createElement('p')
  const link = document.createElement('a')
  const follow = document.createElement('p')
  const crowd = document.createElement('p')
  const userBio = document.createElement('p')

  image.src = avatar_url
  title.textContent = name
  user.textContent = login
  local.textContent = `Location: ${location}`
  profile.textContent = `Profile: ${link}`
  link.textContent = html_url
  follow. textContent = `Followers: ${followers}`
  crowd.textContent = `Following: ${following}`
  userBio.textContent = `Bio: ${bio}`
  link.href = html_url

gitHubCards.classList.add('card')
container.classList.add('card-info')
title.classList.add('name')
user.classList.add('username')

gitHubCards.append(image, container)
container.append(title, user, local, profile, follow, crowd, userBio)
profile.appendChild(link)

return gitHubCards
}


const compCards = document.querySelector('.cards')
const followersArray = ["yirano", "Matte-matt", "adamrappaport"]


axios.get('https://api.github.com/users/Sonyei')
  .then(res => {
    console.log(res.data)
    const cards = gitHubFriends(res.data)
    compCards.appendChild(cards)
    // return cards
    })
  .catch(err => {
    console.log('There was an error of -->', err)
  })
followersArray.forEach(friend => {
axios.get(`https://api.github.com/users/${friend}`)
  .then(res => {
    console.log(res)
    compCards.appendChild(gitHubFriends(res.data))
  })
.catch((err => {
  console.log('There was an error of -->', err)
}))
})


// for each person in the Array, access their personal Github URL and pull their data. Then run the gitHubFriends function with their data; append a completed card to the DOM for each person in the Array.



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

*/
