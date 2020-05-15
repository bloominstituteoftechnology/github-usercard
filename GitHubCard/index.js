/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/JenVest2020')
  .then(response => {
    cardMaker(response);
    console.log(response);
  })
  .catch(err => {
    console.log('Error', err);
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

const followersArray = [
  'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

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
function cardMaker(object) {
  let container = document.createElement('div');
  container.classList.add('card');
  let image = document.createElement('img');
  let info = document.createElement('div');
  info.classList.add('card-info');
  let h3 = document.createElement('h3');
  h3.classList.add('name');
  let pUsername = document.createElement('p');
  pUsername.classList.add('username');
  let pLocation = document.createElement('p');
  let pProfile = document.createElement('p');
  let aAddress = document.createElement('a');
  let pFollowers = document.createElement('p');
  let pFollowing = document.createElement('p');
  let pBio = document.createElement('p');

  // appending to the DOM
  let parent = document.querySelector('.cards');
  parent.appendChild(container);
  container.appendChild(image);
  container.appendChild(info);
  info.appendChild(h3);
  info.appendChild(pUsername);
  info.appendChild(pLocation);
  info.appendChild(pProfile);
  info.appendChild(pFollowers);
  info.appendChild(pFollowing);
  info.appendChild(pBio);

  image.src = object.data.avatar_url;
  h3.textContent = `${object.data.name}`;
  pUsername.textContent = object.data.login;
  pLocation.textContent = `Location : ${object.data.location}`;
  pProfile.textContent = 'Profile :';
  aAddress.setAttribute('href', object.data.html_url);
  aAddress.textContent = '' + object.data.html_url;
  pFollowers.textContent = `Followers : ${object.data.followers}`;
  pFollowing.textContent = `Following : ${object.data.following}`;
  pBio.textContent = `Bio: ${object.data.bio}`;


  pProfile.appendChild(aAddress);
  return container;
};
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
