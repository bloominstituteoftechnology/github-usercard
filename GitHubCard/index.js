import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const entry = document.querySelector('.cards');

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
function myProfile({data}){
  const pic = document.createElement('img');
  const name = document.createElement('h1');
  const login = document.createElement('h3');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const fallowers = document.createElement('p');
  const fallowing = document.createElement('p');
  const bio = document.elementFromPoint('p');

  name.textContent(`Name: ${name}`);
  pic.textContent(`${'https://avatars.githubusercontent.com/u/64098862?v=4'}`)
  login.textContent(`${login}`);
  location.textContent(`Location: ${location}`);
  profile.textContent(`Profile: ${html_url}`);
  fallowers.textContent(`Followers: ${followers}`);
  fallowing.textContent(`Following: ${following}`);
  bio.textContent(`Bio: ${bio}`);

  name.classList.add('name');
  login.classList.add('username');

  name.append(login);
  name.append(location);
  name.append(profile);
  name.append(fallowers);
  name.append(fallowing);
  name.append(bio);
  
  return name;
}

axios
.get("https://api.github.com/users/andrewsbusby")
.then((me) => {
  console.log(me.data);
  const gitMe = me.data;
  const meArr = Array.from(gitMe)
  
  meArr.forEach((data) => {
    const andrew = myProfile({data});
    console.log(andrew);
    entry.appendChild(gitMe);
  })
  .catch((err)=>{
    console.log(err);
  });
});

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
