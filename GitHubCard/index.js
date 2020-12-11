/*  COMPLETE
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios';
let myPromise = axios.get('https://api.github.com/users/qirhi');

/* COMPLETE
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function.  Skip to STEP 3.
*/

console.log("Qirhi Promise: ", myPromise);

/*  COMPLETE
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

function cardMaker(object) {
  let card = document.createElement('div');
  card.classList.add('card');
      // instantiate children of card div
      let userImg = document.createElement('img');
      userImg.setAttribute('src', object.avatar_url);  // source value added here
      card.appendChild(userImg);
      console.log(userImg);

      let cardInfo = document.createElement('div');
      cardInfo.classList.add('card-info');
      card.appendChild(cardInfo);
          // instantiate children of cardInfo div
          let name = document.createElement('h3');
          name.classList.add('name');
          name.textContent = object.name; // name value added here
          cardInfo.appendChild(name);
          let username = document.createElement('p');
          username.classList.add('username');
          username.textContent = object.login // username value added here
          cardInfo.appendChild(username);
          let location = document.createElement('p');
          location.textContent = `Location: ${object.location}` // location value added here
          cardInfo.appendChild(location);
          let profile = document.createElement('p');
          location.textContent = "Profile: ";
          cardInfo.appendChild(profile);
              // instantiate child of profile p
              let link = document.createElement('p');
              link.setAttribute.href = object.html_url; // profile link added here
              profile.appendChild(link);
          let followers = document.createElement('p');
          followers.textContent = `Followers: ${object.follwers}` // followers value added here
          cardInfo.appendChild(followers);
          let following = document.createElement('p');
          following.textContent = `Following: ${object.follwering}` // following value added here
          cardInfo.appendChild(following);
          let bio = document.createElement('p');
          bio.textContent = `Bio: ${object.bio}` // bio value added here
          cardInfo.appendChild(bio);
  return card;
};

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

function getGitHubData(username) {
  let userPromise = axios.get(`https://api.github.com/users/${username}`);
  // console.log("User Promise: ", userPromise);
  return userPromise; 
}; // returns the promise

// console.log(getGitHubData("qirhi")); // Invoke the function, it works

let promise = (getGitHubData("qirhi"));
  
promise.then((dataObject) => {
  console.log("DataObject", dataObject);
});

promise.catch()
  
  // {avatar_url name login location html_url followers following bio})

  // .catch()

  // const promise = createAudioFileAsync(audioSettings); 
  // promise.then(successCallback, failureCallback);


// }; 

/*
function getDogs() {
  /* axios example */
  // axios.get('https://lambda-times-api.herokuapp.com/breeds')
  // .then(({data: breeds}) => {
  //   breeds.forEach(breed => {
  //     axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
  //     .then(({data}) => {
  //       const imageURL = data.message
  //       const card = dogCardMaker({imageURL, breed})
    
  //       entryPoint.appendChild(card)
    
  //       console.log(card)
  //     })
  //     .catch(err => console.log(err))
  //   })
  // })
  // .catch(err => console.log(err))



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["artofmayham", "philmitchell", "jasonsarrio", "mollybee", "codysingletary92", "da-vasquez"];


/*  NOT NEEDED
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
