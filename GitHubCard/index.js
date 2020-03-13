/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios
//   .get("https://api.github.com/users/EnclosedLetter")
//   .then(response => {
//     console.log(response);
//     });


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

const followersArray = ["enclosedletter", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell" ];


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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function cardCreator(apiData){
  const card = document.createElement("div");
  const userImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const urlGit = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

//add classes
card.classList.add("card");
cardInfo.classList.add("card-info");
name.classList.add("name");
userName.classList.add("username");

// //add attributes
// userImg.src = apiData.data.avatar_url;
// urlGit.href = apiData.data.url;

// append
card.append(userImg, cardInfo);
cardInfo.append(name, userName, location, profile, followers, following, bio);
profile.append(urlGit);

//add attributes
userImg.src = apiData.data.avatar_url;
urlGit.href = apiData.data.url;

// add content
name.textContent = apiData.data.name;
userName.textContent = apiData.data.login;
const noLocation = () => {
  if(apiData.data.location === null)
  return location.textContent = 'Location: uknown location';
  return "Location " + location.textContent;}
  noLocation();
profile.textContent = "Profile: " + apiData.data.html_url;
followers.textContent = "Followers: " + apiData.data.followers;
following.textContent = "Following: " + apiData.data.following;
// bio.textContent = "Bio: " + apiData.data.bio;
const noBio = () => {
  if(apiData.data.bio === null)
  return bio.textContent = 'Bio: no-bio';
  return "Bio: " + bio.textContent;}
  noBio();

return card;
}

const cardDiv = document.querySelector(".cards"); //Hooking up the div

// cardDiv.append(cardCreator());

// axios 
//   .get("https://api.github.com/users/EnclosedLetter")
//   .then(response => {
//     cardDiv.append(cardCreator(response));
//   })

followersArray.forEach(item=>{
  axios 
  .get(`https://api.github.com/users/${item}`)
  .then(response=> cardDiv.append(cardCreator(response) )
  )})
