import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
let myUrl = axios.get('https://api.github.com/users/JoeyBertschler')
.then(r => {
  // console.log('success');
  aFunctionThatacceptsAsingleObjectasItsOnlyArgument(r);
})
.catch(console.log('error or waiting'));

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

const thereIsNoStepThree = 'MovingOnIGuess';
let HadToCopyPasteStep3FromBelowToHere = 'WasThereSomeIssueOrWasThisOnPurpose?' //very confusing

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


//  this was the prior attempt. it got messy and faulty. proceeded to start over with john's code as reference. 
//  function aFunctionThatacceptsAsingleObjectasItsOnlyArgument(singleObject){
//   let divTop = document.createElement('div');
//   divTop.classList.add('card');
//   let imageOfUser = document.createElement('img');
//   imageOfUser.src = singleObject.data.avatar_url;
//   // const divCard = document.createElement('div');  
//   // divCard.classList.add('card-info');
//   // const h3UserName = document.createElement('h3');
//   // h3UserName.classList.add('name');
//   // h3UserName = singleObject.login;
//   // const pUserName = document.createElement('p');
//   // pUserName.classList.add('username');
//   // pUserName = singleObject.login;
//   // const pUserLocation = document.createElement('p');
//   // pUserLocation = singleObject.location; //should return null
//   // pUserProfileLink = document.createElement('a');
//   // pUserProfileLink.href = singleObject.html_url;
//   // pUserProfileLink.textContent = singleObject.html_url;
//   // pUserFollowers = document.createElement('p');
//   // pUserFollowers = singleObject.followers;
//   // pUserFollowing = document.createElement('p');
//   // pUserFollowing = singleObject.following;
//   // pUserBio = document.createElement('p');
//   // pUserBio = singleObject.bio; //should return null

//   // consolee.log(singleObject);
//   // return singleObject;


function aFunctionThatacceptsAsingleObjectasItsOnlyArgument(singleObject) 
{
  // DECLARE VARS SET VALUES AND APPEND IN ORDER
  // DIV CLASS CARD
  console.log(singleObject);
  let divCard = document.createElement('div');
  divCard.classList.add('card');
  // PROFILE IMAGE
  let userImg = document.createElement('img');
  userImg.src = singleObject.data.avatar_url;
  divCard.appendChild(userImg);
  // DIV CLASS CARD INFO
  let divInfo = document.createElement('div');
  divInfo.classList.add('card-info');
  divCard.appendChild(divInfo);
  // H3 CLASS NAME
  let name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = singleObject.data.name;
  divInfo.appendChild(name);
  // P CLASS USERNAME
  let username = document.createElement('p');
  username.classList.add('username');
  username.textContent = singleObject.data.login;
  divInfo.appendChild(username);
  // P LOCATION
  let locP = document.createElement('p');
  // console.log(locP);
  locP.textContent = 'Location: ' + singleObject.data.location;
  divInfo.appendChild(locP);
  // P PROFILE
  let profile = document.createElement('p');
  profile.textContent = ('Profile:' + '\n');
  divInfo.appendChild(profile);
  // ADDRESS TO PAGE
  let address = document.createElement('a');
  address.href = singleObject.data.html_url;
  address.textContent = singleObject.data.html_url;
  profile.appendChild(address);
  // P FOLLOWERS
  let followers = document.createElement('p');
  followers.textContent = `Followers: ${singleObject.data.followers}`
  divInfo.appendChild(followers);
  // P FOLLOWING
  let following = document.createElement('p');
  following.textContent = `Following: ${singleObject.data.following}`;
  divInfo.appendChild(following);
  // P BIO
  let bio = document.createElement('p');
  bio.textContent = `Bio: ${singleObject.data.bio}`;
  divInfo.appendChild(bio);
  // APPEND TO PAGE
  let divCardLocation = document.querySelector('div.cards');
  divCardLocation.appendChild(divCard);
};


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards

    ^mega confusing wording, why not just say:
    take data we get from axio, put into function, add to DOM as child of .cards
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

const followersArray = ['a', 'b', 'c', 'd', 'e']; //figured it would be fun to see who managed to get these super short links
const otherCards = followersArray.forEach(e => {
  axios.get('https://api.github.com/users/' + e)
       .then(r => {
  // console.log('success');
  aFunctionThatacceptsAsingleObjectasItsOnlyArgument(r);
})
.catch(console.log('error or waiting'));
});
/* 
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
