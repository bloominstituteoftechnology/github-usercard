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
function myProfile({data}){
  const card = document.createElement('div');
  const pic = document.createElement('img');
  const me = document.createElement('h1');
  const login = document.createElement('h3');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const fallowers = document.createElement('p');
  const fallowing = document.createElement('p');
  const bio = document.createElement('p');

  me.textContent=`Name: ${[name]}`;
  pic.textContent=`${'https://avatars.githubusercontent.com/u/64098862?v=4'}`;
  login.textContent=`${login}`;
  location.textContent=`Location: ${location}`;
  profile.textContent=`Profile: ${'html_url'}`;
  fallowers.textContent=`Followers: ${'followers'}`;
  fallowing.textContent=`Following: ${'following'}`;
  bio.textContent=`Bio: ${bio}`;

  me.classList.add('name');
  login.classList.add('username');

  card.append(me);
  card.append(login);
  card.append(location);
  card.append(profile);
  card.append(fallowers);
  card.append(fallowing);
  card.append(bio);
  
  return card;
}

axios
.get("https://api.github.com/users/andrewsbusby")
.then((me) => {
  console.log('Response', me.data.name)
   const gitMe = (me.data);
   const meArr = Object.values(gitMe);
   debugger
   meArr.forEach((me) => {
    console.log(myProfile({me}));
      // debugger   

    entryPoint.appendChild(meArr);
  })

 
    
  // }
  // .catch((error)=>{
  //   console.log(error);
  });
// );
const entryPoint = document.querySelector('cards');
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
