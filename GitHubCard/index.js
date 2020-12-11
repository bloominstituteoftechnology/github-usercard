import axios from 'axios';
/*
 [x] STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const mollyGitHub = axios.get(`https://api.github.com/users/mollybee`);
console.log('it works', mollyGitHub); //it works!
/*
  [x]STEP 2: Inspect and study the data coming back, this is YOUR
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
function gitHubCardMaker (someObject){
  const divMainCard = document.createElement('div'); 
  const imageElement = document.createElement('img');
  const divCardInfo = document.createElement('div');
  const usersNameElement = document.createElement('h3');
  const firstParagraphElementUsersUserName = document.createElement('p');
  const secondParagraphElementLocation = document.createElement('p');
  const thirdParagraphElementProfile = document.createElement('p');
  const fourthParagraphElementFollowers = document.createElement('p');
  const fifthParagraphElementFollowing = document.createElement('p');
  const sixthParagraphElementBio = document.createElement('p');
  const urlAddressElement = document.createElement('a');
  
  divMainCard.classList.add('card');
  imageElement.src = someObject.avatar_url;
  divCardInfo.classList.add('card-info');
  usersNameElement.classList.add('name');
  firstParagraphElementUsersUserName.classList.add('username');
  secondParagraphElementLocation.textContent = `Location: ${someObject.location}`;
  thirdParagraphElementProfile.textContent = 'Profile: ';
  urlAddressElement.src = someObject.html.url;
  fourthParagraphElementFollowers.src = someObject.followers;
  fifthParagraphElementFollowing.src = someObject.following;
  sixthParagraphElementBio.src = `Bio: ${someObject.bio}`;


  

  
}
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

   x <div class="card">
   x   <img src={image url of user} />
   x   <div class="card-info">
   x     <h3 class="name">{users name}</h3>
   x     <p class="username">{users user name}</p>
   x     <p>Location: {users location}</p>
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
