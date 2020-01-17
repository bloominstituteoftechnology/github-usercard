/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card"> CARD DIV
  <img src={image url of user} /> IMG SRC IN CARD DIV
  <div class="card-info"> CARD-INFO DIV
    <h3 class="name">{users name}</h3> H3 ELEMENT .NAME
    <p class="username">{users user name}</p> P ELEMENT .USERNAME
    <p>Location: {users location}</p> P ELEMENT LOCATION
    <p>Profile:  OPENS PROFILE ELEMENT A TAG
      <a href={address to users github page}>{address to users github page}</a> A TAG IN PROFILE ELEMENT
    </p> CLOSES PROFILE ELEMENT A TAG
    <p>Followers: {users followers count}</p> P ELEMENT FOLLOWERS
    <p>Following: {users following count}</p> P ELEMENT FOLLOWING
    <p>Bio: {users bio}</p> P ELEMENT BIO
  </div> CLOSES CARD-INFO DIV
</div> CLOSES CARD DIV
*/
// get github api and create usercard
function createCard(user) {
  //elements
  let newCard = document.createElement('div');
   cardContent = document.createElement('div');
   bio = document.createElement('p');
   newImage = document.createElement('img');
   name = document.createElement('h3');
   userName = document.createElement('p');
   location = document.createElement('p');
   linkContent = document.createElement('p');
   link = document.createElement('a');
   numFollow = document.createElement('p');
   numFollowing = document.createElement('p');

  //append
newCard.append(newImage);
newCard.append(cardContent);
cardContent.append(name);
cardContent.append(userName);
cardContent.append(location);
cardContent.append(linkContent);
linkContent.append(link);
cardContent.append(numFollow);
cardContent.append(numFollowing);
cardContent.append(bio);

  //classLists
newCard.classList.add('card');
cardContent.classList.add('card-info');
name.classList.add('name');
userName.classList.add('username');

//textContent
bio.textContent = `Bio ${user.data.bio}`;
newImage.src = user.data.avatar_url;
name.textContent = user.data.name;
userName.textContent = user.data.login;
location.textContent = user.data.location;
linkContent.textContent = "profile";
link.textContent = user.data.html_url;
link.setAttribute("href", data.html_url);
numFollow.textContent = `Followers: ${user.data.followers}`;
numFollowing.textContent = `Followers: ${user.data.following}`;


//return
return newCard;

}

// append new cards to html DOM 
const entryPoint = document.querySelector('.cards');
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
axios.get("https://api.github.com/users/dmhabh1992")
  .then(response => {
    // console.log(response.data)
    response.data.forEach(response => {
      entryPoint.append(createCard(data));
    });
  })
  .catch(error => {
    console.log("error encountered:", error);
  });