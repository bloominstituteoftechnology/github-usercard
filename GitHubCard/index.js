/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

  import axios from 'axios';
  axios
  .get('https://api.github.com/users/bchoi562')
  .then((futureData)=>{
      const gitInfo = futureData.data;
      cards.appendChild(cardMaker(gitInfo));
  })
  .catch((err)=>{
    debugger;
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

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];


//for loop
// for (let i = 0; i < followersArray.length; i++) {
//   axios
//     .get('https://api.github.com/users/' + followersArray[i])
//     .then((futureData) => {
//       const gitInfo = futureData.data;
//       cards.appendChild(cardMaker(gitInfo));
//     })
//     .catch((err) => {
//       debugger;
//     })
// }

//foreach loop
followersArray.forEach((each)=>{
  axios
  .get('https://api.github.com/users/' + each)
  .then((futureData)=>{
    const gitInfo = futureData.data;
    cards.appendChild(cardMaker(gitInfo));
  })
  .catch((err)=>{
    debugger;
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
const cards = document.querySelector('.cards');

function cardMaker(obj) {
  const card = document.createElement('div');
      card.classList.add('card');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
      cardInfo.classList.add('card-info');
  const h3 = document.createElement('h3');
      h3.classList.add('name');
  const username = document.createElement('p');
      username.classList.add('username');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const gitAddress = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(gitAddress);

  h3.textContent = `${obj.name}`;
  image.src = `${obj.avatar_url}`;
  username.textContent = `${obj.login}`;
  location.textContent = `${obj.location}`;
  gitAddress.href = `${obj.html_url}`;
  followers.textContent = `${obj.followers}`;
  following.textContent = `${obj.following}`;




  return card;



}
console.log(cards);

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
