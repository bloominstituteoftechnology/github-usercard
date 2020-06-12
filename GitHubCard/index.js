/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
//GET REQUEST//
axios.get('https://api.github.com/users/dgarcialambda')
.then(function(response) {
  console.log(response);
})
.catch(function(error) {
  console.log(error);
})
.then(function() {

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
//COMPONENT//
function mycard(obj) {

  //CREATING COMPONENT//
  const didiCard = document.createElement('div');
  const didiImg = document.createElement('img');
  const didiTitle = document.createElement('h3');
  const didiUserName = document.createElement('p')
  const didiLocation = document.createElement('p');
  const didiProfile = document.createElement('p');
  const didiFollowers = document.createElement('p');
  const followingDidi = document.createElement('p')
  const didiBio = document.createElement('p');

  //APPENDING//
  didiCard.appendChild(didiImg);
  didiCard.appendChild(didiTitle);
  didiCard.appendChild(didiUserName)
  didiCard.appendChild(didiLocation);
  didiCard.appendChild(didiProfile);
  didiCard.appendChild(didiFollowers);
  didiCard.appendChild(followingDidi);
  didiCard.appendChild(didiBio);
  
  //STYLING//
  didiImg.src = avatar_url;

  //PROGRAMMATICALLY UPDATE CONTENT
  didiTitle.textContent = obj.name;
  didiUserName.textContent = obj.login;
  didiLocation.textContent = obj.location;
  didiFollowers.textContent = obj.followers;
  followingDidi.textContent = obj.following;
  didiBio.textContent = obj.bio;

  //EVENTS//
  didiCard.addEventListener('click', () => {
  didiCard.classList.toggle('selected');
  });
  return didiCard;
}
const card = document.querySelector('.card');
data.forEach((obj) => {
  card.appendChild(mycard(obj));
});

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
