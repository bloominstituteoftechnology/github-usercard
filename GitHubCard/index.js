/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           <your name>
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
          follow this link in your browser <Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = [
  "nateylb",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "TheTechSurgeon",
  "dortega5185",
  "ScottH72",
  "redpage001",
  "Diddleslip",
  "ArtmanG"
];


followersArray.forEach(element => {
  console.log(element)
  axios.get(`https://api.github.com/users/${element}`)
    .then( response => {
      // console.log(response);
      //   return response;
      createCard(response.data);
    })
    .catch( err => {
      console.log("Error:", err);
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

function createCard(object){
  //main div
  const divCard = document.querySelector('.cards');
  const card = document.createElement('div');
  card.classList.add("card");
  divCard.appendChild(card);

  const img = document.createElement('img');
  img.setAttribute('src', object.avatar_url);
  card.appendChild(img);

  const divCardInfo = document.createElement('div');
  divCardInfo.classList.add("card-info");

  const h3 = document.createElement('h3');
  h3.classList.add("name");
  h3.textContent = object.name;
  divCardInfo.appendChild(h3);

  const username = document.createElement('p');
  username.classList.add("username");
  username.textContent = object.login;
  divCardInfo.appendChild(username);

  const location = document.createElement('p');
  location.textContent = `Location: ${object.location}`;
  divCardInfo.appendChild(location);

  const link = document.createElement('a');
  link.setAttribute('href', `${object.url}`);
  link.textContent = object.url;

  const profile = document.createElement('p');
  profile.textContent = `Profile: `;
  profile.appendChild(link);
  divCardInfo.appendChild(profile);

  const followers = document.createElement('p');
  followers.textContent = `Followers:  ${object.followers}`;
  divCardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${object.following}`;
  divCardInfo.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${object.bio}`;
  divCardInfo.appendChild(bio);

  card.appendChild(divCardInfo);
  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
