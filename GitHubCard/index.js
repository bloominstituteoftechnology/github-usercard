import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


axios.get('https:api.github.com/users/krystleM26')
.then(res => {
  let cardsElement = document.querySelector('.cards');
  cardsElement.appendChild(cardFace(res.data))
  

})
.catch(err => {
  console.error(err);
})



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
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

function cardFace (object) {
  let cardElement = document.createElement('div');
    cardElement.setAttribute('class', 'card');
    console.log(cardElement);

    let cardImg = document.createElement('img');
    cardImg.src = object["avatar_url"];
    cardElement.appendChild(cardImg);

    let cardInfo = document.createElement('div');
    cardInfo.setAttribute('class', 'card-info');
    cardElement.appendChild(cardInfo);

    let headTitle = document.createElement('h3');
    headTitle.setAttribute('class', 'name');
    headTitle.textContent = object["name"];
    cardInfo.appendChild(headTitle);

    let contentP = document.createElement('p');
    contentP.setAttribute('class', "username");
    contentP.textContent = object["login"];
    cardInfo.appendChild(contentP);

    let contentP2 = document.createElement('p');
    contentP2.textContent = `Location: ${object["location"]}`;
    cardInfo.appendChild(contentP2);

    let profileP = document.createElement('p');
    profileP.textContent = `Profile: `;
    cardInfo.appendChild(profileP);

    let aTag = document.createElement('a');
    aTag.href = object['html_url'];
    profileP.appendChild(aTag);

    let followersP = document.createElement('p');
    followersP.textContent = `Followers: ${object['followers']}`;
    cardInfo.appendChild(followersP);

    let followersU = document.createElement('p');
    followersU.textContent =`Following: ${object['following']}`;
    cardInfo.appendChild(followersU);

    let bioP = document.createElement('p');
    bioP.textContent = `Bio: ${object['bio']}`;
    cardInfo.appendChild(bioP);
   console.log(cardElement);

    return cardElement;
  
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
