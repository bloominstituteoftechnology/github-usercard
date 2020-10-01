import axios from 'axios'
console.log('1 About to fetch data with axios')
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/babeytapratt')
      .then(result => {
      console.log('2 here is the future data', result)
      console.log('here is the response body', result.data)
  })  .catch(error => {
      console.log(error)
  })

  console.log('3 We requesteddata with axios')

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
const entryPoint = document.querySelector('.cards')

function githubCardsMaker({ imageURL, name, login }) {

  const githubCard = document.querySelector.createElement('div')
  const image = document.querySelector.createElement('img')
  const userName = document.querySelector.createElement('h2')
  const cardInfo = document.querySelector.createElement('div')
  const userLogin = document.querySelector.createElement('p')
  const userLocation = document.querySelector.createElement('p')
  const userProfile = document.querySelector.createElement('p')
  const userHtml_url = document.querySelector.createElement('a')
  const userFollowers = document.querySelector.createElement('p')
  const userFollowing = document.querySelector.createElement('p')
  const userBio = document.querySelector.createElement('p')

  githubCard.appendChild(image)
  githubCard.appendChild(cardInfo)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(userLogin)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(userProfile)
  userProfile.appendChild(userHtml_url)
  cardInfo.appendChild(userFollowing)
  cardInfo.appendChild(userFollowers)
  cardInfo.appendChild(userBio)

  githubCard.classList.add('card')
  image.classList.add('image')
  cardInfo.classList.add('card-info')
  userName.classList.add('name')
  userLogin.classList.add('username')
  userLocation.classList.add('location')
  userProfile.classList.add('profile')
  userHtml_url.classList.add('user-url')
  userFollowers.classList.add('followers')
  userFollowing.classList.add('following')
  userBio.classList.add('bio')

  image.src = imageURL
  userName.textContent = `${name}`
  userLogin.textContent = `${login}`
  userLocation.textContent = `Location: ${location}`
  userProfile.textContent = `Profile: ${html_url}`
  userFollowers.textContent = `Followers: ${followers}`
  userFollowing.textContent = `Following: ${following}`
  userBio.textContent = `Bio: ${bio}`

  return githubCard
}

axios.get('https://api.github.com/users/babeytapratt')
  .then(res =>  {
    const images = res.data.avatar_url
    images.forEach(image => {
      const githubCard = githubCardsMaker( {imageURL: image, login: 'babeytapratt'})
      console.log(githubCard)
      entryPoint.append(githubCard)

    });

  })
  .catch(error => {

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
