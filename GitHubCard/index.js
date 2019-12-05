/* const data = {
  avatar_url: "https://avatars1.githubusercontent.com/u/48593048?v=4",
  bio: null,
  blog: "",
  company: null,
  created_at: "2019-03-15T13:12:00Z",
  email: null,
  events_url: "https://api.github.com/users/premputtegowda/events{/privacy}",
  followers: 3,
  followers_url: "https://api.github.com/users/premputtegowda/followers",
  following: 3,
  following_url: "https://api.github.com/users/premputtegowda/following{/other_user}",
  gists_url: "https://api.github.com/users/premputtegowda/gists{/gist_id}",
  gravatar_id: "",
  hireable: null,
  html_url: "https://github.com/premputtegowda",
  id: 48593048,
  location: null,
  login: "premputtegowda",
  name: null,
  node_id: "MDQ6VXNlcjQ4NTkzMDQ4",
  organizations_url: "https://api.github.com/users/premputtegowda/orgs",
  public_gists: 0,
  public_repos: 25,
  received_events_url: "https://api.github.com/users/premputtegowda/received_events",
  repos_url: "https://api.github.com/users/premputtegowda/repos",
  site_admin: false,
  starred_url: "https://api.github.com/users/premputtegowda/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/premputtegowda/subscriptions",
  type: "User",
  updated_at: "2019-12-05T00:35:37Z",
  url: "https://api.github.com/users/premputtegowda",
  
} */
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/premputtegowda')
//   .then((response) => {
//     console.log(response);
//   })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const cardsDiv = document.querySelector('.cards');
  axios.get('https://api.github.com/users/premputtegowda')
    .then((response) => {
      cardsDiv.appendChild(createCard(response.data))
    })






/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];

  followersArray.forEach(follower => {

    axios.get('https://api.github.com/users/follower')
      .then((response) => {
         cardsDiv.appendChild(createCard(response.data));
      })

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

function createCard(obj) {
  //create elements
  const newCard = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameofUser = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const profilePara = document.createElement('p');
  const profileLink = document.createElement('a');
  const followersCount= document.createElement('p');
  const followingCount = document.createElement('p');
  const userBio = document.createElement('p');

  //add css classes
  newCard.classList.add('card');
  nameofUser.classList.add('name');
  userName.classList.add('username');

  //append elements to .card
  newCard.appendChild(image);
  newCard.appendChild(cardInfo);
  //append elements to .card-info
  cardInfo.appendChild(nameofUser);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profilePara);
  cardInfo.appendChild(followersCount);
  cardInfo.appendChild(followingCount);
  cardInfo.appendChild(userBio);
  // append elements to profile para
  profilePara.appendChild(profileLink);

  //fill in data
  image.src = obj.avatar_url;
  nameofUser.textContent = obj.name;
  userName.textContent = obj.login;
  userName.textContent = obj.location;
  profileLink.href = obj.html_url;
  profileLink.textContent = obj.html_url;
  followersCount.textContent = obj.followers;
  followingCount.textContent = obj.following
  userBio.textContent = obj.bio;

  return newCard 


}



function createFollowersCard(obj) {
  //create elements
  
  const newCard = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameofUser = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const profilePara = document.createElement('p');
  const profileLink = document.createElement('a');
  const followersCount= document.createElement('p');
  const followingCount = document.createElement('p');
  const userBio = document.createElement('p');

  //add css classes
  newCard.classList.add('card');
  nameofUser.classList.add('name');
  userName.classList.add('username');

  //append elements to .card
  newCard.appendChild(image);
  newCard.appendChild(cardInfo);
  //append elements to .card-info
  cardInfo.appendChild(nameofUser);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profilePara);
  cardInfo.appendChild(followersCount);
  cardInfo.appendChild(followingCount);
  cardInfo.appendChild(userBio);
  // append elements to profile para
  profilePara.appendChild(profileLink);

  //fill in obj
  image.src = obj.avatar_url;
  nameofUser.textContent = obj.name;
  userName.textContent = obj.login;
  userName.textContent = obj.location;
  profileLink.href = obj.html_url;
  profileLink.textContent = obj.html_url;
  followersCount.textContent = obj.followers;
  followingCount.textContent = obj.following
  userBio.textContent = obj.bio;

  return newCard 


}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
