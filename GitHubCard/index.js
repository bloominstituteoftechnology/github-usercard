axios
  .get("https://api.github.com/users/cynthiaannberg")
  .then((res) => {
    constInfo.forEach( (item) => {
      const finishedProduct = cardMaker({ imgUrl: user.avatar_url, name: userInfo.name, username: userInfo.login, location: userInfo.location, url: userInfo.html_url, followers: user.Info.followers, following: userInfo.following, bio: userInfo.bio})
      document.querySelector('.cards').appendChild(finishedProduct);
      console.log(finishedProduct);
    })
  })
  .catch((error) => {
    console.log(error);
  });

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/cynthiaannberg
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

// const followersArray = [];
// followersArray.forEach((profileURL) => {
//   const url='https://api.github.com/users/cynthiaannberg/followers'
// })
// axios

const followersArray = [];

axios 

  .get("https://api.github.com/users/cynthiaannberg/followers")
  .then((res) => {
    res.data.forEach( user => {
      followersArray.push(user.login);
    })
    
    //iterate over followersArray & create&append a new card.
    followersArray.forEach( cynthiaannberg => {
      appendUserCard(cynthiaannberg);
    })
  
  })
  .catch((error) => {
    // handle the drama (ie errors)
    console.log(error);
  });
//   .finally(() => {
// ​
//     console.log('done');



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

const cards = document.querySelector('.cards');

function cardMaker(obj){
const cardDiv = document.querySelector('div');
const userImage = document.querySelector('img');
const cardInfo = document.querySelector('div');
const name = document.querySelector('h3');
const userName = document.querySelector('p');
const location = documnet.querySelector('p');
const profile = document.querySelector('p');
const followers = document.querySelector('p');
const following = document.querySelector('p');  
const bio = document.querySelector('p');

newCard.appendChild(profilePic);
newCard.appendChild(cardInfo);
cardInfo.appendChild(nameText);
cardInfo.appendChild(usernameText);
cardInfo.appendChild(locationText);
cardInfo.appendChild(profileText);
profileText.appendChild(githubPageURL);
cardInfo.appendChild(followersText);
cardInfo.appendChild(followingText);
cardInfo.appendChild(bioText);


cardDiv.classList.add('card');
userImage.src = `${image-url-of-user}`; 
cardInfo.classList.add('name');
name.classList.add('name');
name.textContent = name;
userName.classList.add['username'];
userName.textContent = `${users-user-name}`;
location.textContent =  `location: ${users-location}`;
profile.textContent = `Profile:
<a href={address to users github page}>${address-to-users-github-page}`
followers.textContent = `Followers: ${users-followers-count}`
following.textContent = `Following: ${users-following-count}`;
bio.textContent = `bio: ${users-bio}`;


return cards;


}
  // List of LS Instructors Github username's:
  //   tetondan
  //   dustinmyers
  //   justsml
  //   luishrd
  //   bigknell
