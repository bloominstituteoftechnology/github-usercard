import axios from 'axios';

axios.get('https://api.github.com/users/quathesage')

.then(response => {
  // console.log(response.data)
  const githubData = response.data;
const cardData = githubCard(githubData)
const cards = document.querySelector('.cards');
cards.appendChild(cardData);
})
.catch(error => {
  console.error(error);
});

function githubCard(object) {
  // Creating the elements
  const divContain = document.createElement('div');
  const image = document.createElement('img');
  const divInfo = document.createElement('div');
  const title = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bioContent = document.createElement('p');
  const anchor = document.createElement('a');

  // Adding classes to the element
  divContain.classList.add('card');
  divInfo.classList.add('card-info');
  title.classList.add('name');
  username.classList.add('username');

  // Structuring the card
  divContain.appendChild(image);
  divContain.appendChild(divInfo);
  divInfo.appendChild(title);
  divInfo.appendChild(username);
  divInfo.appendChild(location);
  divInfo.appendChild(profile);
  profile.appendChild(anchor);
  divInfo.appendChild(followers);
  divInfo.appendChild(following);
  divInfo.appendChild(bioContent);

  // Adding content to the element
   image.src = object.avatar_url;
   title.textContent = object.name;
   username.textContent = object.login;
   location.textContent = `Location: ${object.location}`;
   anchor.href = object.html_url;
   anchor.textContent = object.html_url;
   followers.textContent = `Followers: ${object.followers}`;
   following.textContent = `Following: ${object.following}`;
   bioContent.textContent = ` Bio: ${object.bio}`;

   return divContain

}


const followersArray = [ 'tetondan','dustinmyers','justsml','luishrd','bigknell'];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then(resp => {
    const cardData = resp.data;
    const element = document.querySelector('.cards');
    element.appendChild(githubCard(cardData));
  })
  .catch(error => {
    console.error(error);
  })
})

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
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
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
