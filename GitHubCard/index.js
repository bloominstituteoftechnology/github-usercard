/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let gitHubUser = axios.get("https://api.github.com/users/KejdaCelaj")
  .then(function (response) {
    //console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

//document.querySelector(".cards").appendChild(UserCardComponent(gitHubUser));

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followers = ['shawnpatel96', 'GuytonOriji', 'fireblastdaniel', 'rofstudios', 'msinnema33', 'elijahdaniel'];
followers.forEach(el => {
  axios.get("https://api.github.com/users/" + el)
  .then(response => {
    document.querySelector(".cards").appendChild(cardCreator(response));
  })
});
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

function cardCreator(githubData) {

  const card = document.createElement('div');
  const image = document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  
  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');
  
  
  image.setAttribute("src", githubData.data.avatar_url);
  card.appendChild(image);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  profileLink.setAttribute("href", githubData.data.html_url);
  profile.appendChild(profileLink);
  info.appendChild(profile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  name.textContent = githubData.data.name;
  username.textContent = githubData.data.login;
  profile.textContent = "Profile: " + githubData.data.html_url;
  followers.textContent = "Followers: " + githubData.data.followers;
  following.textContent = "Following: " + githubData.data.following;
  if (githubData.data.location !== null){
    location.textContent ="Location: " + githubData.data.location;
  }else{
    location.textContent = "Location: null";
  }
  if (githubData.data.bio !== null){
    bio.textContent = "Bio: " + githubData.data.bio;
  }else{
    bio.textContent = "Bio: null";
  }
  
  
  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
