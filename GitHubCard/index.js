import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/bnm219')
.then( response => {
  appendData(response.data);
})
.catch (error => {
console.log('Error: ', error);
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

function appendData(gitDataObj){
  const cardDiv = document.querySelector('.cards');
  const cardInfo = document.createElement('div');
  cardInfo.classList = 'card-info';
  cardDiv.appendChild(createCard(gitDataObj).cardImg);
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(createCard(gitDataObj).name);
  cardInfo.appendChild(createCard(gitDataObj).userName);
  cardInfo.appendChild(createCard(gitDataObj).paragraphTag1);
  cardInfo.appendChild(createCard(gitDataObj).paragraphTag2);
  cardInfo.appendChild(createCard(gitDataObj).linkTags);
  cardInfo.appendChild(createCard(gitDataObj).paragraphTag3);
  cardInfo.appendChild(createCard(gitDataObj).paragraphTag4);
  cardInfo.appendChild(createCard(gitDataObj).paragraphTag5);
}

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

followersArray.forEach(instructor =>{
  axios.get(`https://api.github.com/users/${instructor}`)
  .then( response => {
    appendData(response.data);
  })
  .catch (error => {
  console.log('Error: ', error);
  });
});

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
function createCard(gitDataObj){
  const cardImg = document.createElement('img');
  const name = document.createElement('h3');
  name.classList = 'name';
  const userName = document.createElement('p');
  userName.classList = 'username';
  const paragraphTag1 = document.createElement('p');
  const paragraphTag2 = document.createElement('p');
  const linkTags = document.createElement('A');
  const paragraphTag3 = document.createElement('p');
  const paragraphTag4 = document.createElement('p');
  const paragraphTag5 = document.createElement('p');


  cardImg.src = gitDataObj.avatar_url;
  name.textContent = gitDataObj.name;
  userName.textContent = gitDataObj.login;
  paragraphTag1.textContent = `Location: ${gitDataObj.location}`;
  paragraphTag2.textContent = `Profile:`;
  linkTags.setAttribute('href', gitDataObj.html_url);
  linkTags.textContent = gitDataObj.html_url;
  paragraphTag3.textContent = `Followers: ${gitDataObj.followers}`;
  paragraphTag4.textContent = `Following: ${gitDataObj.following}`;
  paragraphTag5.textContent = `Bio: ${gitDataObj.bio}`;

  return {
    cardImg,
    name,
    userName,
    paragraphTag1,
    paragraphTag2,
    paragraphTag3,
    paragraphTag4,
    paragraphTag5,
    linkTags,
  }
}




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
