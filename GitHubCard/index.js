import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/StnsGeneral')
//   .then(res => {
//     const userObjInfo = res.data
//     console.log(userObjInfo)
//   })


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

// Where to append the function elements to inside of the HTML
const appendLocation = document.querySelector('.cards')
// appendLocation.appendChild(githubCards(userObjInfo))

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  'StnsGeneral'
];

followersArray.forEach(username => {
  axios.get(`https://api.github.com/users/${username}`)
    .then(res => {
      const userObjInfo = res.data
      appendLocation.appendChild(githubCards(userObjInfo))
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

function githubCards(obj) {
  // Instantiating
  const cardDiv = document.createElement('div')
  const imageContainer = document.createElement('img')
  const cardInfoDiv = document.createElement('div')
  const header = document.createElement('h3')
  const paragraphUsername = document.createElement('p')
  const paragraphLocation = document.createElement('p')
  const paragraphProfile = document.createElement('p')
  const anchorElement = document.createElement('a')
  const paragraphFollowers = document.createElement('p')
  const paragraphFollowing = document.createElement('p')
  const paragraphBio = document.createElement('p')

  // Classes
  cardDiv.classList.add('card')
  cardInfoDiv.classList.add('card-info')
  header.classList.add('name')
  paragraphUsername.classList.add('username')

  // HTML structure
  cardDiv.appendChild(imageContainer)
  cardDiv.appendChild(cardInfoDiv)
  cardInfoDiv.appendChild(header)
  cardInfoDiv.appendChild(paragraphUsername)
  cardInfoDiv.appendChild(paragraphLocation)
  cardInfoDiv.appendChild(paragraphProfile)
  paragraphProfile.appendChild(anchorElement)
  cardInfoDiv.appendChild(paragraphFollowers)
  cardInfoDiv.appendChild(paragraphFollowing)
  cardInfoDiv.appendChild(paragraphBio)

  // Adding information to elements
  imageContainer.src = obj.avatar_url
  header.textContent = obj.name
  paragraphUsername.textContent = obj.login
  paragraphLocation.textContent = `Location: ${obj.location}`
  paragraphProfile.prepend('Profile: ')
  anchorElement.href = obj.html_url
  anchorElement.innerHTML = obj.html_url
  paragraphFollowers.textContent = `Followers: ${obj.followers}`
  paragraphFollowing.textContent = `Following: ${obj.following}`
  paragraphBio.textContent = `Bio: ${obj.bio}`

  // Return

  console.log(cardDiv)
  return cardDiv
}