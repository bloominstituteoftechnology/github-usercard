/* eslint-disable no-unused-vars */
import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const githubURL = 'https://api.github.com/users/charlie-may86';

axios.get(githubURL)
  .then(res => {
    const charlieCard = cardMaker({
      imageURL: res.data.avatar_url,
      name: res.data.name,
      userName: res.data.login,
      location: res.data.location,
      githubAdress: res.data.html_url,
      followers: res.data.followers,
      following: res.data.following,
      bio: res.data.bio
    })
    cardEntry.append(charlieCard);
  })
  .catch(err => {
    debugger
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

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

axios.get(`https://api.github.com/users/${followersArray[0]}`)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log('That did not work')
  })

followersArray.forEach(name => {
  axios.get(`https://api.github.com/users/${name}`)
    .then(res => {
      const card = cardMaker({
        imageURL: res.data.avatar_url,
        name: res.data.name,
        userName: res.data.login,
        location: res.data.location,
        githubAdress: res.data.html_url,
        followers: res.data.followers,
        following: res.data.following,
        bio: res.data.bio
      })
      cardEntry.append(card);
    })
    .catch(err => {
      console.log('that did not work')
    })
})

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

function cardMaker({ imageURL, name, userName, location, githubAdress, followers, following, bio  }) {
  // parent div and class
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  // image
  const cardImg = document.createElement('img');
  cardImg.src = imageURL;
  // card info and class
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  // h3
  const cardHeader = document.createElement('h3');
  cardHeader.classList.add('name');
  cardHeader.textContent = name;
  // username
  const cardUserName = document.createElement('p');
  cardUserName.classList.add('username');
  cardUserName.textContent = userName;
  // location
  const cardLocation = document.createElement('p');
  cardLocation.textContent = `Location: ${location}`;
  // profile
  const cardProfile = document.createElement('p');
  cardProfile.textContent = 'Profile'
  const cardProfileAttr = document.createElement('a');
  cardProfileAttr.href = githubAdress;
  cardProfileAttr.textContent = githubAdress;
  // followers
  const cardFollowers = document.createElement('p');
  cardFollowers.textContent = followers;
  // following
  const cardFollowing = document.createElement('p');
  cardFollowing.textContent = following;
  // bio
  const cardBio = document.createElement('p');
  cardBio.textContent = bio;
  // create parent-child relationship
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(cardHeader);
  cardInfo.appendChild(cardUserName);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardProfile.appendChild(cardProfileAttr);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  return cardDiv;
}


// eslint-disable-next-line no-unused-vars
const cardEntry = document.querySelector('.cards');


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
