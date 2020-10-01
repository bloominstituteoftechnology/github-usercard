import axios from 'axios'

// console.log(axios)
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/rnasir826')

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

function userCardMaker(imageURL, userInfo) {
    const userCard = document.createElement('div')
    userCard.classList.add('card')

    const image = document.createElement('img')
    image.src = imageURL

    userCard.appendChild(image)

    const cardInfo = document.createElement('div')
    cardInfo.classList.add('card-info')

    const heading = document.createElement('h3')
    heading.classList.add('name')
    heading.textContent = userInfo
    cardInfo.appendChild(heading)

    const userNameP = document.createElement('p')
    userNameP.classList.add('username')
    userNameP.textContent = userInfo
    cardInfo.appendChild(userNameP)

    const locationP = document.createElement('p')
    locationP.textContent = userInfo
    cardInfo.appendChild(locationP)

    const profile = document.createElement('p')
    cardInfo.appendChild(profile)

    const aTag = document.createElement('a')
    aTag.textContent = userInfo
    cardInfo.appendChild(aTag)

    const followersP = document.createElement('p')
    followersP.textContent = userInfo
    cardInfo.appendChild(followersP)

    const followingP = document.createElement('p')
    followingP.textContent = userInfo
    cardInfo.appendChild(followingP)

    const bioP = document.createElement('p')
    bioP.textContent = userInfo
    cardInfo.appendChild(bioP)

    //interactivity
    userCard.addEventListener('click', () => {
        userCard.classList.toggle('selected')
    })
    return userCard
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/