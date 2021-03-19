
import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

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

const entry = document.querySelector('.cards');

axios.get('https://api.github.com/users/Stan2dor')
  .then((res) => {
    const myInfo = res.data
    entry.appendChild(cardMaker(myInfo))
  });

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const friendsArray = [];
friendsArray.push("tetondan", "dustinmyers", "justsml", "luishr", "bigknell");
friendsArray.forEach(name => {
  axios
    .get(`https://api.github.com/users/${name}`)
    .then(res => cardMaker(res.data))
    .catch(err => console.log(err))
    .then(() => console.log('success'))
});

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

function cardMaker(data) {
  const entry = document.querySelector(`.cards`)
  const card = document.createElement('div')
  const img = document.createElement(`img`)
  const cardInfo = document.createElement('div')
  const name = document.createElement('h2')
  const userName = document.createElement(`p`)
  const location = document.createElement(`p`)
  const profile = document.createElement(`p`)
  const link = document.createElement(`a`)
  const followers = document.createElement(`p`)
  const following = document.createElement(`p`)
  const bio = document.createElement(`p`)

  card.classList.add(`card`)
  cardInfo.classList.add(`card-info`)
  name.classList.add(`name`)
  userName.classList.add(`username`)

  entry.appendChild(card)
  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(link)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  img.setAttribute(`src`, data.avatar_url)
  name.textContent = data.login;
  userName.textContent = data.name;
  location.textContent = data.location;
  profile.textContent = `profile:` + link;
  link.setAttribute(`href`, data.html_url)
  link.textContent = 'URL';
  followers.textContent = `followers:` + data.followers;
  following.textContent = `following:` + data.following;
  bio.textContent = 'BIO:' + data.bio;

  return card;
};
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/