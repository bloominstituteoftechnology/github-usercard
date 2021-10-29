import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/nyamekyeannor').then(res =>{
  console.log(res)})
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

// not sure if this will work
// function cardMaker (obj){
//   const card = document.createElement('div')
//   const img = document.createElement('img');
//   const cardInfo = document.createElement('div');
//   const name = document.createElement('h3')
//   const username = document.createElement('p')
//   const location = document.createElement('p')
//   const profile = document.createElement('p')
//   const link = document.createElement('a')
//   const followers = document.createElement('p')
//   const following = document.createElement('p')
//   const bio = document.createElement('p')

//   card.classList.add('card');
//   cardInfo.classList.add('card-info');
//   name.classList.add('name');
//   username.classList.add('username');

//   img.setAttribute('src,obj.avatar_url');
//   name.textContent = obj.name;
//   username.textContent = obj.login;
//   location.textContent = obj.location;
//   profile.textContent = 'Profile  ';
//   link.textContent = obj.url;
//   link.href = obj.url;
//   followers.textContent = `Followers: ${obj.followers}`;
//   following.textContent = `Followers: ${obj.followers}`;

//   card.appendChild(img);
//   card.appendChild(cardInfo);
//   cardInfo.appendChild(name);
//   cardInfo.appendChild(username);
//   cardInfo.appendChild(location);
//   cardInfo.appendChild(profile);
//   profile.appendChild(link);
//   cardInfo.appendChild(followers);
//   cardInfo.appendChild(following);
//   cardInfo.appendChild(bio);
//   return card;

// }





// go back to this is all fails 

const cards = document.querySelector('.cards');

function cardMaker (gitHubTag){
  const container = document.createElement('div');
  container.classList.add('card');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  const name = document.createElement('h3');
  name.classList.add('name');
  const username = document.createElement('p');
  username.classList.add('username');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileAddress = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  axios.get (`https://api.github.com/users/${gitHubTag}`)
  .then(res => {
    const cards = document.querySelector('.cards')
    const cardReturn = cardMaker(res.data)

    img.src = res.data.avatar_url;
   name.textContent =res.data.name;
  username.textContent = 'Username:' + res.data.login;
  location.textContent = 'Location:' + res.data.location;
  profileAddress.textContent = 'URL: ' + res.data.url;
  followers.textContent = 'Followers:' + res.data.followers;
  following.textContent = 'following:' + res.data.following;
  bio.textContent = 'Bio:' + res.data.bio;
    
  })
  .catch(err => {
    console.error(err)
  });

  // img.src = gitHubTag.avatar_url;
  //  name.textContent =gitHubTag.name;
  // username.textContent = 'Username:' + gitHubTag.login;
  // location.textContent = 'Location:' + gitHubTag.location;
  // profileAddress.textContent = 'URL: ' + gitHubTag.url;
  // followers.textContent = 'Followers:' + gitHubTag.followers;
  // following.textContent = 'following:' + gitHubTag.following;
  // bio.textContent = 'Bio:' + gitHubTag.bio;



  container.appendChild(img);
  container.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(profileAddress);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  const endGame = cards.appendChild(container);

  return endGame;

}
function getUser (username){
  const cards =document.querySelector('.cards');

  // axios.get (`https://api.github.com/users/${username}`)
  // .then(res => {
  //   const cards = document.querySelector('.cards')
  //   const cardReturn = cardMaker(res.data)
  //   cards.appendChild(cardReturn)
    
  // })
  // .catch(err => {
  //   console.error(err)
  // });
}
cardMaker


cardMaker('NyamekyeAnnor');
const followersarray = [];``
followersarray.push('tetondan')
followersarray.push('dustinmyers')
followersarray.push('justsml')
followersarray.push('luishrd')
followersarray.push('bigknell')