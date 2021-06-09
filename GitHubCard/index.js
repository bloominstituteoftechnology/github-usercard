/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// the import and the cards const needed to be outside 
// they get used in more than one scope
import axios from 'axios'
const cards = document.querySelector('.cards')
axios.get('https://api.github.com/users/L1tCraig')
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

.then((gitHubInfo) => {
  cards.appendChild(cardMaker(gitHubInfo.data))
})
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ 'tetondan', 'MahDudeGarrus', 'chisao101', 'alphaseinor', 'bigknell'];

// the .forEach below will loop followersArray and at each will
// use .get and put the username in the url
// and then append the cardmaker with the info from axios.
followersArray.forEach(userName => {
  axios.get(`https://api.github.com/users/${userName}`)
  .then((fullData => {
    cards.appendChild(cardMaker(fullData.data))
  }))
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

// object keys needed are listed in the function argument
// to condense the code a little

function cardMaker({avatar_url, name, login, location, html_url, followers, following, bio}){

  // creation prepwork
  let card = document.createElement('div')
  let img = document.createElement('img')
  let info = document.createElement('div')
  let nameTag = document.createElement('h3')
  let userNameTag = document.createElement('p')
  let locationTag = document.createElement('p')
  let profileTag = document.createElement('p')
  let profileLink = document.createElement('a')
  let followersTag = document.createElement('p')
  let followingTag = document.createElement('p')
  let bioTag = document.createElement('p')

  // class and style prep
  card.classList.add('card')
  img.src = avatar_url
  info.classList.add('card-info')
  nameTag.classList.add('name')
  userNameTag.classList.add('username')
  profileLink.href = html_url

  // filling out the data
  nameTag.textContent = name
  userNameTag.textContent = login
  // below the text = a string in the backticks that has the word Location: 
  //  and also a second word to be determined by the info from the objs key location
  locationTag.textContent = `Location: ${location}`
  profileTag.textContent = 'Profile:'
  profileLink.textContent = html_url
  followersTag.textContent = `Followers: ${followers}`
  followingTag.textContent = `Following: ${following}`
  bioTag.textContent = `Bio: ${bio}`

  //merging elements to the card
  info.appendChild(nameTag)
  info.appendChild(userNameTag)
  info.appendChild(locationTag)
  profileTag.appendChild(profileLink)
  info.appendChild(profileTag)
  info.appendChild(followersTag)
  info.appendChild(followingTag)
  info.appendChild(bioTag)
  card.appendChild(img)
  card.appendChild(info)

  //returning the completed card
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
