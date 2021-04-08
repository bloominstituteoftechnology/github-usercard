import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/ricardo-pena
*/

  axios.get("https://api.github.com/users/ricardo-pena")
  .then((res) =>{
    console.log(res);
    console.log('Right Here: ',createComponent(res));
  })
  .catch((err)=>{
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

// const followersArray = [
//   tetondan,
//   dustinmyers,
//   justsml,
//   luishrd,
//   bigknell];

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
function createComponent(obj){

  // <div class="card">
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  //<img src={image url of user} />
  let userImg = document.createElement('img');
  userImg.src = obj.data["avatar_url"];

  //<div class="card-info">
  let cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');

  //<h3 class="name">{users name}</h3>
  let h3 = document.createElement('h3');
  h3.textContent = obj.data.name;
  h3.classList.add('name');

  //<p class="username">{users user name}</p>
  let usernameP = document.createElement('p');
  usernameP.classList.add('username');
  usernameP.textContent = obj.data.login;

  //<p>Location: {users location}</p>
  let locationP = document.createElement('p');
  locationP.textContent = obj.data.location;
  //<p>Profile:
  
  let profileP = document.createElement('p');
  profileP.textContent = "Profile: ";

  //<a href={address to users github page}>{address to users github page}</a>
  let gitAddress = document.createElement('a');
  gitAddress.href = obj.data['html_url'];
  profileP.appendChild(gitAddress);
  
  //<p>Followers: {users followers count}</p>
  let followersP = document.createElement('p');
  followersP.textContent = obj.data.followers;

  //<p>Following: {users following count}</p>
  let followingP = document.createElement('p');
  followingP.textContent = obj.data.following;

  //<p>Bio: {users bio}</p>
  let bioP = document.createElement('p');
  bioP.textContent = obj.data.bio;

//Apending

cardDiv.appendChild(userImg);
cardDiv.appendChild(cardInfoDiv);
cardDiv.appendChild(h3);
cardDiv.appendChild(usernameP);
cardDiv.appendChild(locationP);
cardDiv.appendChild(profileP);
cardDiv.appendChild(followersP);
cardDiv.appendChild(followingP);
cardDiv.appendChild(bioP);




  return cardDiv
  
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
