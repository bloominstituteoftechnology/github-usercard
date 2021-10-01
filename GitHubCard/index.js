/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/UlisesGatica
*/

{/* <div class="card">
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
</div> */}

import axios from 'axios'
axios.get('https://api.github.com/users/UlisesGatica')
.then(resp => {
  console.log(resp)
  const cards = document.querySelector('.cards')
  const myCard = cardMaker(resp.data)
  cards.appendChild(myCard)
})
.catch(error => {
  console.error(error)
})

function cardMaker({name,login,location,url,followers,following,bio,avatar_url}){

  const card = document.createElement('div')
  const profileImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const profileName = document.createElement('h3')
  const profileUsername = document.createElement('p')
  const profileLocation = document.createElement('p')
  const profileUrl = document.createElement('a')
  const profileFollowers = document.createElement('p')
  const profileFollowing = document.createElement('p')
  const profileBio = document.createElement('p')

card.appendChild(profileImg)
card.appendChild(cardInfo)
cardInfo.appendChild(profileName)
cardInfo.appendChild(profileUsername)
cardInfo.appendChild(profileLocation)
cardInfo.appendChild(profileUrl)
cardInfo.appendChild(profileFollowers)
cardInfo.appendChild(profileFollowing)
cardInfo.appendChild(profileBio)


  card.classList.add('card')
  cardInfo.classList.add('card-info')
  profileUsername.classList.add('username')
  profileName.classList.add('name')
  profileImg.src = avatar_url
  profileUrl.href = url

  profileName.textContent = name
  profileUsername.textContent = login
  profileLocation.textContent = `Location: ${location}`
  profileFollowers.textContent = followers
  profileFollowing.textContent = following
  profileBio.textContent = bio
  profileUrl.textContent = url
  


  return card
}

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
    follow this link in your browser https://api.github.com/users,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'
];
followersArray.map(function (user){
  axios.get('https://api.github.com/users' + [user])
  .then((response) => {
    const cardDiv = cardMaker(response);
    const cards = document.querySelector('.cards')
    cards.appendChild(cardDiv)
  })
  .catch(error => {
    console.log(error)
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
