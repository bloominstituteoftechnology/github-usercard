/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
github info! You will need to understand the structure of this 
data in order to use it to build your component function 

Skip to Step 3.
*/

// axios.get("https://api.github.com/users/lowell1").then(function(res) {
//   console.log(res);
// })



const followersArray = [];

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

function MakeCard(dataObj) {
  const card = document.createElement("DIV"),
  image = document.createElement("IMG"),
  cardInfo = document.createElement("DIV"),
  name = document.createElement("H3"),
  userName = document.createElement("P"),
  location = document.createElement("P"),
  profile = document.createElement("P"),
  followers = document.createElement("P"),
  following = document.createElement("P"),
  bio = document.createElement("P"),
  pageAddress = document.createElement("a");

  card.append(image);
  card.append(cardInfo);
  cardInfo.append(name);
  cardInfo.append(userName);
  cardInfo.append(location);
  cardInfo.append(profile);
  profile.append(pageAddress);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);

  card.classList.add("card");
  image.src = dataObj.data.avatar_url;
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  name.textContent = dataObj.data.name;
  userName.classList.add("username");
  userName.textContent = dataObj.data.login;
  location.textContent = `Location: ${dataObj.data.location}`;
  pageAddress.href = dataObj.data.html_url;
  pageAddress.textContent = dataObj.data.html_url;
  followers.textContent = "Followers: " + dataObj.data.followers;
  following.textContent = "Following: " + dataObj.data.following;
  bio.textContent = `Bio: ${dataObj.data.bio}`

  /*
  <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
    */
  
  return card;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
  */

/* Step 4: Pass the data received from Github into your function, 
create a new component and add it to the DOM as a child of .cards
*/

axios.get("https://api.github.com/users/lowell1").then(function(res) {
  document.querySelector(".cards").append(MakeCard(res));
//console.log(res);
}).catch(function(error) {
  console.log(`Error retrieving data!\n${error}`);
})


/* Step 5: Now that you have your own card getting added to the DOM, either 
follow this link in your browser https://api.github.com/users/<Your github name>/followers 
, manually find some other users' github handles, or use the list found 
at the bottom of the page. Get at least 5 different Github usernames and add them as
Individual strings to the friendsArray below.

Using that array, iterate over it, requesting data for each user, creating a new card for each
user, and adding that card to the DOM.
*/

axios.get("https://api.github.com/users/lowell1/followers")
.then(function(res) {
  //document.querySelector(".cards").append(MakeCard(res));
  res.data.forEach(function(val) {
    axios.get(val.url)
    .then(function(res) {
      document.querySelector(".cards").append(MakeCard(res));
    })
    .catch(function(error) {
      console.log(`Error retrieving data!\n${error}`);
    });
  });
})
.catch(function(error) {
  console.log(`Error retrieving data!\n${error}`);
})
