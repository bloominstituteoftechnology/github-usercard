import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/BWSIEVERT')
.then(res => {
  //do something here
  followersArray.forEach(user => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(follower => {
      cards.appendChild(cardCreator(follower.data))
    })
  })
  cards.appendChild(cardCreator(res.data));
  console.log(res)
})
.catch(err => {
  //catch error here
  console.log(err)
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
  'thecodediver',
  'CPower1248',
  'juancaruizc',
  'eg180',
  'Criscosmoes'
];




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
function cardCreator(info) {
  const card = document.createElement('div') // Container Element - takes image - takes card info
  card.classList.add('card')

  const img = document.createElement('img')
  img.src = info.avatar_url
  card.appendChild(img)

  const cardInfo = document.createElement('div') // Info container - takes name - takes location, profile, followers, following, bio
  cardInfo.classList.add('card-info')



  const name = document.createElement('h3')
  name.classList.add('name')
  name.textContent = info.name

  const userName = document.createElement('p')
  userName.classList.add('username')
  userName.textContent = info.login

  const location = document.createElement('p')
  location.textContent = info.location

  const profile = document.createElement('p')
  profile.href = info.html_url
  profile.textContent = info.html_url

  const followers = document.createElement('p')
  followers.textContent = `${info.followers}`

  const following = document.createElement('p')
  following.textContent = `${info.following}`

  const bio = document.createElement('p')
  bio.textContent = `${info.bio}`

  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  card.appendChild(cardInfo)

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
