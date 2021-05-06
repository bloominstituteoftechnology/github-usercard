import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
  .get('https://api.github.com/users/andrewsbusby')
  .then(res =>{
    const user = res.data
    document.querySelector('.cards').append(githubMaker(user));
    console.log(res.data);
  })
  .catch(err =>{
    console.log(err);
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

function githubMaker({avatar_url, bio, name, login, html_url, location, followers, following}) {

  const divCard = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameH3 = document.createElement('h3');
  const userName = document.createElement('p');
  const locationP = document.createElement('p');
  const profile = document.createElement('p');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');

  // APPENDING
  divCard.append(userImg);
  divCard.append(cardInfo);
  cardInfo.append(nameH3);
  cardInfo.append(userName);
  cardInfo.append(locationP);
  cardInfo.append(profile);
  cardInfo.append(followersP);
  cardInfo.append(followingP);
  cardInfo.append(bioP);

  // ADDING CLASSES
  divCard.classList.add('card');
  cardInfo.classList.add('card-info');
  nameH3.classList.add('class-name');
  userName.classList.add('username');

  // ADD CONTEXT
  userImg.src = `${avatar_url}`;
  nameH3.textContent = `${name}`;
  userName.textContent = `${login}`;
  locationP.textContent = `${location}`;
  profile.textContent = `Profile: ${html_url}`;
  followersP.textContent = `Followers: ${followers}`;
  followingP.textContent = `Following: ${following}`;
  bioP.textContent = `Bio: ${bio}`;

  return divCard;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
