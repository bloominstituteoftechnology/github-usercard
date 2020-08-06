import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const myProfile = 'https://api.github.com/users/devbeau';
function getCard(profile){
  axios.get(profile)
      .then(response => {
        console.log(response);
        let userDataObj = response.data;
        let card = createCard(userDataObj);
        appendToPage(card);
        debugger;
      })
      .catch(error => {
        console.log("something went wrong", error)
        debugger
      });}

function getFollowerCards (profile){
  const followersArray = [];
  axios.get(`${profile}/followers`)
      .then(response => {
        response.data.forEach((item, index) =>{
          followersArray[index] = item.url
        })
        followersArray.forEach(item =>{
          getCard(item);
        })
      })
      .catch(error => {
        console.log('something went wrong followers', error)
        debugger;
      })
}
                              
function createElement(htmlElement, className = 0, textContent = 0){
  let element = document.createElement(htmlElement);
  className !== 0 ? element.classList.add(className) : element;
  textContent !== 0 ? element.textContent = textContent : element.textContent = null;
  return element;
}

function createImg(imgSrc){
  let image = createElement('img');
  image.setAttribute('src', imgSrc);
  return image;
}

function createAnchor(anchorUrl, anchorText){
  let anchor = createElement('a', 0, anchorText);
  anchor.setAttribute('href', anchorUrl);
  return anchor;
}

function appendToPage(card){
  let container = document.querySelector('.cards');
  return container.appendChild(card);
}

function createCard(userDataObj){

  let cardDiv = createElement('div','card');
  let cardImg = createImg(userDataObj.avatar_url);
  let cardHeader = createElement('h3', 'name', userDataObj.name);
  let cardUsername = createElement('p', 'username', userDataObj.login);
  let cardLocation = createElement('p', 0, `Location: ${userDataObj.location}`);
  let cardProfile = createElement('p', 0, 'Profile: ');
  let profileAnchor = createAnchor(userDataObj.html_url, userDataObj.html_url);
  let cardFollowers = createElement('p', 0, `Followers: ${userDataObj.followers}`);
  let cardFollowing = createElement('p', 0, `Following: ${userDataObj.following}`);
  let cardBio = createElement('p', 0, userDataObj.bio);

  cardProfile.appendChild(profileAnchor);
  for (let el of  [cardImg, cardHeader, cardUsername, cardLocation,
                  cardProfile, cardFollowers, cardFollowing, cardBio]){
        cardDiv.appendChild(el);
      }
  return cardDiv;
}
                
getCard(myProfile);                    
getFollowerCards(myProfile);


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
function createElement(htmlElement, className = 0, textContent = 0){
    let element = document.createElement(htmlElement);
    className !== 0 ? element.classList.add(className) : element;
    textContent !== 0 ? element.textContent = textContent : element.textContent = null;
    return element;
  }
function createImg(imgSrc){
  let image = createElement('img');
  image.setAttribute('src', imgSrc);
  return image;
}
function createAnchor(anchorUrl, anchorText){
  let anchor = createElement('a', 0, anchorText);
  anchor.setAttribute('href', anchorUrl);
  return anchor;
}
function appendToPage(card){
  let container = document.querySelector('.cards');
  return container.appendChild(card);
}

function createCard(userDataObj){

    let cardDiv = createElement('div','card');
    let cardImg = createImg(userDataObj.avatar_url);
    let cardHeader = createElement('h3', 'name', userDataObj.name);
    let cardUsername = createElement('p', 'username', userDataObj.login);
    let cardLocation = createElement('p', 0, `Location: ${userDataObj.location}`);
    let cardProfile = createElement('p', 0, 'Profile: ');
    let profileAnchor = createAnchor(userDataObj.html_url, userDataObj.html_url);
    let cardFollowers = createElement('p', 0, `Followers: ${userDataObj.followers}`);
    let cardFollowing = createElement('p', 0, `Following: ${userDataObj.following}`);
    let cardBio = createElement('p', 0, userDataObj.bio);

    cardProfile.appendChild(profileAnchor);
    for (let el of  [cardImg, cardHeader, cardUsername, cardLocation,
                    cardProfile, cardFollowers, cardFollowing, cardBio]){
          cardDiv.appendChild(el);
        }
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
