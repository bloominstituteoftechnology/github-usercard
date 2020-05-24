/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const newCard = document.querySelector(".cards");

axios.get('https://api.github.com/users/kevthew')
.then((response) =>{
  console.log(response.data)
  let cardData= Object.keys(response.data);
  console.log(cardData)
  newCard.appendChild(cardMaker(response.data));
});
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
followersArray.forEach( (element) => {
  axios.get(`https://api.github.com/users/${element}`)
.then((response) =>{
  console.log(response.data)
  let cardData= Object.keys(response.data);
  console.log(cardData)
  newCard.appendChild(cardMaker(response.data));
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

function cardMaker(item) {
  const cardDiv = document.createElement('div');
  const userImage = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const h3Name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const anchor = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio= document.createElement('p');

  cardDiv.classList.add('card');
  cardInfoDiv.classList.add('card-info');
  h3Name.classList.add('name');
  username.classList.add('username');

  userImage.src = item.avatar_url;
  h3Name.textContent = item.name
  username.textContent = item.login;
  location.textContent = item.location;
  profile.textContent = 'Profile:';
  anchor.href = item.html_url;
  anchor.textContent = item.html_url;
  followers.textContent = `Followers: ${item.followers}`;
  following.textContent = `Following: ${item.following}`;
  bio.textContent = `Bio: ${item.bio}`
  
  cardDiv.appendChild(userImage);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(h3Name);
  cardInfoDiv.appendChild(username);
  cardInfoDiv.appendChild(location);
  cardInfoDiv.appendChild(profile);
  profile.appendChild(anchor);
  cardInfoDiv.appendChild(followers);
  cardInfoDiv.appendChild(following);
  cardInfoDiv.appendChild(bio);
  return cardDiv;
};


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
