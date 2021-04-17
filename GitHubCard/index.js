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
console.log(axios.get('https://api.github.com/users/olem22'));
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function cardMaker(user){

const myCard = document.createElement('div')
const myImg = document.createElement('img')
const myInfo = document.createElement('div')
const myName = document.createElement('h3')
const myUserName = document.createElement('p')
const myLocation = document.createElement('p')
const p = document.createElement('p')
const a = document.createElement('a')
const myFollowers = document.createElement('p')
const myFollowing = document.createElement('p')
const myBio = document.createElement('p')


myCard.className = 'card'

axios.get(`https://api.github.com/users/${user}`)
  .then(function(userArr){
    myImg.src = userArr.data.avatar_url

myInfo.className = 'card-info'
myName.className = userArr.data.name
myName.textContent = `${userArr.data.name}`
myUserName.className = userArr.data.login
myUserName.textContent = `${userArr.data.login}`
myLocation.textContent = `Location: ${userArr.data.location}`;

p.textContent = `Profile:`;
a.textContent = `${userArr.data.html_url}`;
a.href = userArr.data.html_url;

myFollowers.textContent = `Followers: ${userArr.data.followers}`;
myFollowing.textContent = `Following: ${userArr.data.following}`;
myBio.textContent = `Bio: ${userArr.data.bio}`;

p.append(a);
  })

myInfo.append(myName, myUserName, myLocation, p, myFollowers, myFollowing, myBio);

myCard.append(myImg, myInfo);
return myCard;
}

const Instructors = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell',`kempie1`, 'AnastasiiaaaaM', 'DmitriyNoa', 'olem22'];
const dfsdf = document.querySelector('.cards')
//dfsdf.append(cardMaker('olem22'));
Instructors.forEach(myCard => dfsdf.append(cardMaker(myCard)))
