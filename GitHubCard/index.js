import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const githubUserCardMaker = user => {
  const container = document.createElement('div') // parent element of card
  const userImg = document.createComment('img')
  const cardContent = document.createElement('div') // content container for card
    const userNameHeading = document.createElement('h3')
    const userName = document.createElement('p')
    const userLocation = document.createElement('p')
    const userProfile = document.createElement('p')
    const userGithubLink = document.createElement('a')
    const userFollowerCount = document.createElement('p')
    const userFollowingCount = document.createElement('p')
    const userBio = document.createElement('p')

  container.classList.add('card')
  cardContent.classList.add('card-info')
    userNameHeading.classList.add('name')
    userName.classList.add('username')

  userImg.src = user.data.avatar_url
  userNameHeading.textContent = user.data.name
  userName.textContent = user.data.login
  userLocation.textContent = `Location: ${user.data.location}`
  userProfile.textContent = 'Profile: '
    userGithubLink.href = user.data.html_url
    userGithubLink.title = "User's Github Link"
    userGithubLink.textContent = user.data.html_url
  userFollowerCount.textContent = `Followers: ${user.data.followers}`
  userFollowingCount.textContent = `Following: ${user.data.following}`
  userBio.textContent = `Bio: ${user.data.bio}`

  container.appendChild(userImg)
  container.appendChild(cardContent)
    cardContent.appendChild(userNameHeading)
    cardContent.appendChild(userName)
    cardContent.appendChild(userLocation)
    cardContent.appendChild(userProfile)
      userProfile.appendChild(userGithubLink)
    cardContent.appendChild(userFollowerCount)
    cardContent.appendChild(userFollowingCount)
    cardContent.appendChild(userBio)

  return container // return PARENT element
}

const tdubsAxiosPromise = axios.get('https://api.github.com/users/tdubs42')
.then(user => {
  const newGithubUserCard = githubUserCardMaker(user)
  document.querySelector('div.cards').appendChild(newGithubUserCard)
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
  'https://api.github.com/users/ClydeFrog04',
  'https://api.github.com/users/ngwatso',
  'https://api.github.com/users/HeyMichelle',
  'https://api.github.com/users/vishalicious213',
  'https://api.github.com/users/aburn7577'
]

followersArray.forEach(follower => {
  axios.get(follower)
  .then(user => {
    const newGithubUserCard = githubUserCardMaker(user)
    document.querySelector('div.cards').appendChild(newGithubUserCard)
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
