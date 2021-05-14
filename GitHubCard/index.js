import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
  .get('https://api.github.com/users/cynthia-coronado')
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log('ERROR')
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
function githubCardMaker(object) {

  //instantiating elements
  const githubCard = document.createElement('div')
  const githubImage = doucment.createElement('img')
  const githubCardInfo = document.createElement('div')
  const githubName = document.createElement('h3')
  const githubUsername = document.createElement('p')
  const githubLocation = document.createElement('p')
  const githubProfile = document.createElement('p')
  const githhubAddress = document.createElement('a')
  const githubFollowers = document.createElement('p')
  const githubFollowing = document.createElement('p')
  const githubBio = document.createElement('p')

  //set classnames, attribute and text
  githubCard.classList.add('card')
  githubImage.src = object.data.avatar_url
  githubCardInfo.classList.add('card-info')
  githubName.classList.add('name')
  githubName.textContent = object.data.name
  githubUsername.classList.add('username')
  githubUsername.textContent = object.data.login
  githubLocation.textContent = `Location: ${object.data.location}`
  githubProfile.textContent = `Profile:`
  githhubAddress.href = object.data.url
  githhubAddress.textContent = `${object.data.url}`
  githubFollowers.textContent = `Followers: ${object.data.followers}`
  githubFollowing.textContent = `Following: ${object.data.following}`
  githubBio.textContent = `Bio: ${object.data.bio}`

  //creating hierarchy
  githubCard.appendChild(githubImage)
  githubCard.appendChild(githubCardInfo)
  githubCardInfo.appendChild(githubName)
  githubCardInfo.appendChild(githubUsername)
  githubCardInfo.appendChild(githubLocation)
  githubCardInfo.appendChild(githubProfile)
  githubCardInfo.appendChild(githhubAddress)
  githubCardInfo.appendChild(githubFollowers)
  githubCardInfo.appendChild(githubFollowing)
  githubCardInfo.appendChild(githubBio)

  return githubCard

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
