import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/christina-yun')
.then( response => {
  console.log('my gitHub', response);
}) 
.catch(err => 
  {console.error('This is an error')
});
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
const cards = document.querySelector('.cards');

function newCard(userName){
  axios.get(`https://api.github.com/users/${userName}`)
  .then( response => {
    return cards.appendChild(cardMaker(response.data));

  }) 
  .catch(err => 
    {console.error('This is an error')
  });
}
newCard('christina-yun');
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['TraNequaFauntleroy','cyberkade', 'ayv8er', 'SomeiLam', 'justinfineberg'];

followersArray.forEach(profile => {
  return newCard(profile);
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
function cardMaker(gitUser){
  const card = document.createElement('div');
  const avatar = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const handle = document.createElement('p');
  const location = document.createElement('p');
  //created profile and profile link elements
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  //append children!
  card.appendChild(avatar);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(handle);
  cardInfo.appendChild(location);
  //appended profile to card info (shows up correctly) and link to profile

  //text content replaces everything between with tags. Need to set textContent before appending to profile
  profile.textContent = 'Profile: ';
  profileLink.textContent = gitUser.html_url;
  profileLink.href = gitUser.html_url;
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink); 
  
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  
  //add classes
  card.classList ='card';
  cardInfo.classList = 'card-info';
  name.classList.add('name')
  handle.classList.add('username');

  //add text and other things?
  avatar.src = gitUser.avatar_url;
  name.textContent = gitUser.name;
  handle.textContent = gitUser.login;
  location.textContent =`Location: ${gitUser.location}`;
  
  
  //something is wrong here
  // profileLink.textContent = gitUser.html_url;
  // profileLink.href = gitUser.html_url;
  
  followers.textContent = `Followers: ${gitUser.followers}`;
  following.textContent = `Following: ${gitUser.following}`;
  bio.textContent = `Bio: ${gitUser.bio}`;

  return card;
};
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
