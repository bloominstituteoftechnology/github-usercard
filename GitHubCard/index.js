import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
    `https://api.github.com/users/kim5981`
*/



// followers array
const followersArray = [ "kim5981", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell", "crharding"];

//loop through the array to insert the usernames into getGitCard

for (let i = 0; i < followersArray.length; i++) {
  getGitCard(followersArray[i]);
}

//*create a function to get request for github profile 
function getGitCard(username) {
  axios.get(`https://api.github.com/users/${username}`)
//to handle the result of api finally getting back to you need axios to run smth when it's done to the browser
//then is for when promise is fulfilled
.then(resp => {
  //!in order to see your data you have to call the fn you created with resp. data like so..
  document.querySelector(".cards").appendChild(profileCard(resp.data)); // telling the console to log the response from the api
}) 
//catch is for when there is an error
.catch(error => console.error(error)) 
}


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

//github data from axios request
/*

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



function profileCard (gitInfo) {
  
// --- HTML MARKUP ---
  //*create elements
  const cardWrapper = document.createElement("div");
  const profilePic = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const login = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileLink = document.createElement("a")
  const followersCount = document.createElement("p");
  const followingCount = document.createElement("p");
  const bio = document.createElement("p");

//* add class names
  cardWrapper.classList.add("card")
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  login.classList.add("username");

//* add links 
profilePic.src = gitInfo.avatar_url;
profilePic.alt = "gitHub user profile picture"
profileLink.href = gitInfo.html_url;

//* set text content for each element
name.textContent = gitInfo.name;
login.textContent = gitInfo.login;
location.textContent = gitInfo.location;
profile.textContent = "Profile";
profileLink.textContent = "Link to Profile";
followersCount.textContent =` Followers: ${gitInfo.followers}`;
followingCount.textContent = `Following: ${gitInfo.following}`;
bio.textContent = gitInfo.bio;

  //*append child elements to parent
  //main div
  cardWrapper.appendChild(profilePic);
  cardWrapper.appendChild(cardInfo);
  //card info div
    cardInfo.appendChild(name);
    cardInfo.appendChild(login);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
     profile.appendChild(profileLink);
   cardInfo.appendChild(followersCount);
   cardInfo.appendChild(followingCount);
   cardInfo.appendChild(bio);
  

//don't forget to return :)

return profileCard;

}



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
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
    crharding
*/
