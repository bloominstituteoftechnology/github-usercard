/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'

axios.get('https://api.github.com/users/jeanluciano')
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
.then((res)=>{
  console.log(res.data)
  let card = createCard(res.data)
  let cards = document.querySelector('.cards')
  cards.append(card)

})
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

const followersArray = ['https://api.github.com/users/tetondan','https://api.github.com/users/dustinmyers','https://api.github.com/users/justsml','https://api.github.com/users/luishrd','https://api.github.com/users/bigknell' ];

followersArray.forEach((link) =>{
  axios.get(link)
  .then((res)=>{
    let card = createCard(res.data)
  let cards = document.querySelector('.cards')
  cards.append(card)
  })
  .catch((res)=>{
    console.log(res)
  })
})
function createCard(user){
  const card = document.createElement('div');
        card.classList.add('card')
  const image = document.createElement('img');
        image.src = user.avatar_url
  const cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info')
    const name = document.createElement('h3');
          name.classList.add('name')
          name.textContent = user.name
    const userName = document.createElement('p');
          userName.classList.add('username')
          userName.textContent = user.login
    const location = document.createElement('p');
          location.textContent = `Location: ${user.location}`
    const profile = document.createElement('p');
          profile.textContent = 'Profile: '
      const link = document.createElement('a');
            link.href = user.url
            link.textContent = user.html_url
    const followers = document.createElement('p');
          followers.textContent = `${user.followers}`
    const following = document.createElement('p');
          following.textContent = `${user.following}`
    const bio = document.createElement('p');
          bio.textContent = user.bio
  
  card.append(image, cardInfo) ;
  cardInfo.append(name, userName, location, profile, followers, following, bio);
  profile.append(link)
  return card
}

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
