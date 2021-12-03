import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/marcel-rodriguez')
.then(resp => {
  const gitObj = {
    avatar_url: resp.data.avatar_url,
    name: resp.data.name,
    login: resp.data.login,
    location: resp.data.location,
    html_url: resp.data.html_url,
    followers: resp.data.followers,
    following: resp.data.following,
    bio: resp.data.bio
  }
  console.log(gitObj)
  gitCardMaker(gitObj)
})
.catch(error => {
  console.error(error)
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

const followersArray = ['benjamin-forest', 'JessWillCode', 'Berenika14', 'friend4', 'friend5'];

function getFriendsInfo(array){
  axios.get(`https://api.github.com/users/marcel-rodriguez/followers`)
  .then(resp => {
    resp.data.forEach(follower => {
      axios.get(`https://api.github.com/users/${follower.login}`)
      .then(resp => {
        const followerObj = {
          isFollower: true,
          avatar_url: resp.data.avatar_url,
          name: resp.data.name,
          login: resp.data.login,
          location: resp.data.location,
          html_url: resp.data.html_url,
          followers: resp.data.followers,
          following: resp.data.following,
          bio: resp.data.bio
        }
        gitCardMaker(followerObj)
      })
    })  
  })
  .catch(error => {
    console.error(error);
  })
}

getFriendsInfo(followersArray)

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

function gitCardMaker(obj){
  const gitCard = document.createElement('div')
  gitCard.classList.add('card')

  const userImage = document.createElement('img')
  userImage.src = obj.avatar_url

  const cardInfoDiv = document.createElement('div')
  cardInfoDiv.classList.add('card-info')

  const realName = document.createElement('h3')
  realName.textContent = obj.name
  realName.classList.add('name')

  const userName = document.createElement('p')
  userName.textContent = obj.login
  userName.classList.add('username')

  const userLocation = document.createElement('p')
  userLocation.textContent = `Location: ${obj.location}`

  const profileLinkHolder = document.createElement('p')
  profileLinkHolder.textContent = `Profile: `

  const profileLink = document.createElement('a')
  profileLink.setAttribute('href', obj.html_url)
  profileLink.textContent = obj.html_url

  const followers = document.createElement('p')
  followers.textContent = `Followers: ${obj.followers}`

  const following = document.createElement('p')
  following.textContent =  `Following: ${obj.following}`

  const userBio = document.createElement('p')
  userBio.textContent = `Bio: ${obj.bio}`

  const isAFollower = document.createElement('p')
  isAFollower.classList.add('username')
  isAFollower.textContent = 'Marcel\'s Follower'

  if(obj.bio === null){
    userBio.textContent = `Bio: ${obj.login} does not have a bio!`
  }
  if(obj.location === null){
    userLocation.textContent = `Location: ${obj.login} does not have a location set!`
  }

  gitCard.appendChild(userImage)
  gitCard.appendChild(cardInfoDiv)
  cardInfoDiv.appendChild(realName)
  cardInfoDiv.appendChild(userName)
  obj.isFollower ? cardInfoDiv.appendChild(isAFollower) : '';
  cardInfoDiv.appendChild(userLocation)
  cardInfoDiv.appendChild(profileLinkHolder)
  profileLinkHolder.appendChild(profileLink)
  cardInfoDiv.appendChild(followers)
  cardInfoDiv.appendChild(following)
  cardInfoDiv.appendChild(userBio)

  document.querySelector('div.cards').appendChild(gitCard)

  return gitCard
}

// console.log(gitCardMaker(gitObj))

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
