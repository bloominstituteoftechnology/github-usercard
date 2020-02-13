/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tdefriess', "MarioR81", "kaverndsp", "dmhabh1992", "AmMiRo"];
followersArray.forEach(item => {axios.get(`https://api.github.com/users/${item}`).then(res => {
  cards.append(GithubCard(res.data))
 });
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
const cards = document.querySelector(".cards");

axios.get('https://api.github.com/users/1devhall')
.then(res => {
 cards.append(GithubCard(res.data))
 console.log(res);
})
.catch(error => {
  console.log('Info not found', error)
})



function GithubCard(obj){
  const gitCard = document.createElement('div');
  const gitImg = document.createElement('img');
  const gitInfo = document.createElement('div');
  const gitName = document.createElement('h3');
  const gitUser = document.createElement('p');
  const gitLocation = document.createElement('p');
  const gitProfile = document.createElement('p');
  const gitUrl = document.createElement('a');
  const gitFollowers = document.createElement('p');
  const gitFollowing = document.createElement('p');
  const gitBio = document.createElement('p');

  gitCard.append(gitImg, gitInfo);
  gitInfo.append(gitName, gitUser, gitLocation, gitProfile, gitFollowers,gitFollowing, gitBio);
  gitProfile.append(gitUrl);
 
  gitCard.classList.add('card');
  gitInfo.classList.add('card-info');
  gitName.classList.add('name');
  gitUser.classList.add('username');

  gitImg.src = obj.avatar_url;
  gitName.textContent = obj.name;
  gitUser.textContent = obj.login;
  gitLocation.textContent = obj.location;
  gitUrl.textContent = obj.html_url;
  gitFollowers.textContent = obj.followers;
  gitFollowing.textContent = obj.following;
  gitBio.textContent = obj.bio

  return gitCard;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
