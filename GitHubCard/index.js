import axios from 'axios';

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

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];

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

const cards = document.querySelector('.cards');

function cardMaker (data) {

  // creation of elements and they're classes 

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');
  
  const userIMG = document.createElement('img');

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add('name');

  const username = document.createElement('p');
  username.classList.add('username');

  const location = document.createElement('p');

  const profile = document.createElement('p');

  const link = document.createElement('a');

  const followers = document.createElement('p');

  const following = document.createElement('p');

  const bio = document.createElement('p');

 // Hierarchy Setup

  cardContainer.appendChild(userIMG);
  cardContainer.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(link);

  // Adding content

  userIMG.src = data.avatar_url;
  name.textContent = data.name;
  username.textContent = data.login;
  location.textContent = `Location: ${data.location}`;
  profile.textContent = `Profile: ${data.html_url}`;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;


  return cardContainer;
 
}

axios
.get('https://api.github.com/users/briabytes')
.then((res) => {
  const bria = res.data;
  cards.appendChild(cardMaker(bria));
})
.catch((err) => {
  console.log('something is wrong', err);
})

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.map(item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then(res => {
    const users = res.data;
    cards.appendChild(cardMaker(users));
  }).catch (err => {
    console.log(err);
  })

})





















// const cardContainer = document.querySelector('.cards')

//  function cardMaker (data) {
//  // Institaition of elements
//    const card = document.createElement('div')
//    const userImg = document.createElement('img')
//    const cardInfo = document.createElement('div')
//    const name = document.createElement('h3')
//    const userName = document.createElement('p')
//    const location = document.createElement('p')
//    const profile = document.createElement('p')
//    const link = document.createElement('a')
//    const followers = document.createElement('p')
//    const following = document.createElement('p')
//    const bio = document.createElement('p')

//    // CLASS NAMING
//    card.classList.add('card')
//    cardInfo.classList.add('card-info')
//    name.classList.add('name')
//    userName.classList.add('username')

//    // Hierarchy/nesting setup 
//    card.appendChild(userImg)
//    card.appendChild(cardInfo)
//    cardInfo.appendChild(name)
//    cardInfo.appendChild(userName)
//    cardInfo.appendChild(location)
//    cardInfo.appendChild(profile)
//    profile.appendChild(link)
//    cardInfo.appendChild(followers)
//    cardInfo.appendChild(following)
//    cardInfo.appendChild(bio)
//  // ADDING CONTENT
//  userImg.src = data.avatar_url
//  userName.textContent = data.login
//  bio.textContent = data.bio
//  location.textContent = data.location
//  link.textContent = data.html_url

//    return card
//  }


//  axios.get('https://api.github.com/users/briabyte')
//  .then(res => {
//    console.log(res.data)
//    const Bria = res.data
//    cardContainer.appendChild(cardMaker(Bria))
//  })
//  .catch(err => {
//    console.log(err)
//  })

//  const followersArray = ['CScori', 'adamrappaport', 'Matte-matt', 's-munro'];

//  followersArray.map(item => {
//    axios.get(`https://api.github.com/users/${item}`)
//    .then(res => {
//      const users = res.data
//      console.log(res.data)
//      cardContainer.appendChild(cardMaker(users))
//    }).catch(err =>{
//      console.log(err)
//    })

//  })