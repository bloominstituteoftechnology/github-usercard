/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

let account = axios.get('https://api.github.com/users/ToosdaiOtte')
.then((axiosData) => {
  console.log('data', axiosData);
  let myInfo = axiosData.data;
  console.log('UserInfo: ', myInfo)

  const cards = document.querySelector('.cards')
  const cardInfo = createCard(myInfo)
  cards.appendChild(cardInfo)
})
.catch((err) => {
  console.log('ERROR', err)
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
    .then(axiosData => {
      const card = createCard(axiosData.data)
      const cards = document.querySelector('.cards')
      cards.appendChild(card)
    })
    .catch((err) => {
      console.log('ERROR', err)
    })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
let allCards = document.querySelector('.cards');

function createCard(userInfo){
  let card = document.createElement('div')
  card.classList.add('card')
  let profilePic = document.createElement('img')
  card.appendChild(profilePic)
  let cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  card.appendChild(cardInfo)
  let name = document.createElement('h3')
  name.classList.add('name')
  cardInfo.appendChild(name)
  let username = document.createElement('p')
  username.classList.add('username')
  cardInfo.appendChild(username)
  let location = document.createElement('p')
  cardInfo.appendChild(location)
  let profile = document.createElement('p')
  cardInfo.appendChild(profile)
  let gitLink = document.createElement('a')
  cardInfo.appendChild(gitLink)
  let followers = document.createElement('p')
  cardInfo.appendChild(followers)
  let following = document.createElement('p')
  cardInfo.appendChild(following)
  let bio = document.createElement('p')
  cardInfo.appendChild(bio)

  // Text Content
  profilePic.src = userInfo.avatar_url
  name.textContent = userInfo.name
  username.textContent = userInfo.login
  location.textContent = userInfo.location
  const profileLink = userInfo.url
  gitLink.innerHTML = profileLink.link(userInfo.url)
  followers.textContent = `Followers: ${userInfo.followers}`
  following.textContent = `Following: ${userInfo.following}`
  bio.textContent = userInfo.bio

  return card
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
