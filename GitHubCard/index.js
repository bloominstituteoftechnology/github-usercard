import axios from 'axios'

const cards = document.querySelector('.cards');
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/kennethologist')
  .then(function (response) {
    cards.append(cardMaker(response.data));
  })
  .catch(function (error){
    console.log(error);
  })

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

function cardMaker({avatar_url, name, login, location, html_url, followers, following, bio }) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const userImg = document.createElement("img");
  userImg.src = avatar_url;

  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";

  const nameh3 = document.createElement("h3");
  nameh3.className = "name";
  nameh3.textContent = name;

  const usernamep = document.createElement("p");
  usernamep.className = "username";
  usernamep.textContent = login;

  const locationp = document.createElement("p");
  locationp.textContent = location;

  const profilep = document.createElement("p");
  profilep.textContent = 'Profile: ';

  const linkgithubpage = document.createElement("a");
  linkgithubpage.src = html_url;
  linkgithubpage.textContent = html_url;

  profilep.appendChild(linkgithubpage);

  const followersp = document.createElement("p");
  followersp.textContent = `Followers: ${followers}`
  const followingp = document.createElement("p");
  followingp.textContent = `Following: ${following}`
  const biop = document.createElement("p");
  biop.textContent = `Bio: ${bio}`;


  cardDiv.appendChild(userImg);
 
  cardInfo.appendChild(nameh3);
  cardInfo.appendChild(usernamep);
  cardInfo.appendChild(locationp);
  cardInfo.appendChild(profilep);
  cardInfo.appendChild(followersp);
  cardInfo.appendChild(followingp);
  cardInfo.appendChild(biop)
  cardDiv.appendChild(cardInfo);

  return cardDiv;
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
