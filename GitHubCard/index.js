import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = ["tetondan",
  "dustinmyers",
  // justsml,
  // luishrd,
  // bigknell,
  "jordansipe",
"djaden927"];

followersArray.forEach(function(item){
axios
.get('https://api.github.com/users/' + item)
  .then((res) => {
    let githubCard = cardMaker(res);
    const cardHolder = document.querySelector('div.cards');
    debugger;
    return cardHolder.appendChild(githubCard);
  })
  .catch((err) =>{
    console.log("here is the error", err);
  })
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
function cardMaker(obj){
  // creating elements.
  let cardDiv  = document.createElement('div');
  let image  = document.createElement('img');
  let cardInfo  = document.createElement('div');
  let name  = document.createElement('h3');
  let  userName = document.createElement('p');
  let location  = document.createElement('p');
  let profile  = document.createElement('p');
  let  link = document.createElement('a');
  let  followCount = document.createElement('p');
  let  followingCount = document.createElement('p');
  let  bio = document.createElement('bio');
  // adding classes to created elements.
  cardDiv.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username')
  // appending children to setup format.
  
  // setting text content
  const dataObj = obj.data;
  image.setAttribute('src', dataObj.avatar_url);
  name.textContent = dataObj.name;
  userName.textContent = dataObj.login;
  location.textContent = `Location: ${dataObj.location}`;
  profile.textContent = "Profile: "
  link.textContent = dataObj.html_url;
  link.href = dataObj.html_url;
  followCount.textContent = `Followers: ${dataObj.followers}`;
  followingCount.textContent = `Following: ${dataObj.following}`;
  bio.textContent = `Bio: ${dataObj.bio}`;

  cardDiv.appendChild(image);
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(followCount);
  cardInfo.appendChild(followingCount);
  cardInfo.appendChild(bio);

  return cardDiv;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
