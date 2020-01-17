/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const container = document.querySelector('.container');

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

// axios.get("https://api.github.com/users/ZaStack")
//     .then(response => {
//         // followersArray.push(response.data[0])
//         // followersArray(response.data);
//         // console.log("Response.then", response.data.followers);
//     })
//   .catch(error => {
//     console.log("The data borked!!!", error);
//   });

const followersArray = [
  "mrzacsmith",
  "caw442000",
  "amberlowe1001",
  "haase1020",
  "jvillalp"

];

followersArray.forEach(user => {
  axios
    .get('https://api.github.com/users/' + user)
    .then(response => {
      console.log("For Each response", response);
      cardContainer.append(gitCard(response));
    })
    .catch(error => {
      console.log("The user borked!!!", error);
    });
});

// console.log("Constant array" ,followersArray)
// console.log(response)
const cardContainer = document.querySelector(".cards");

function gitCard(user) {
  // console.log("Here", followersArray)
  const card = document.createElement("div"),
    img = document.createElement("img"),
    cardInfo = document.createElement("div"),
    displayName = document.createElement("h3"),
    userName = document.createElement("p"),
    location = document.createElement("p"),
    profile = document.createElement("p"),
    followers = document.createElement("p"),
    following = document.createElement("p"),
    bio = document.createElement("p");
    profileUrl = document.createElement("a"), 
    card.classList.add("card");
    cardInfo.classList.add("card-info");
    displayName.classList.add("name");
    userName.classList.add("username");

    profile.append(profileUrl);
    card.append(img);
    card.append(cardInfo);
    cardInfo.append(displayName);
    cardInfo.append(userName);
    cardInfo.append(location);
    cardInfo.append(profile);
    cardInfo.append(followers);
    cardInfo.append(following);
    cardInfo.append(bio);

    img.src = user.data.avatar_url;
    displayName.textContent = user.data.name;
    userName.textContent = user.data.login;
    location.textContent = `Location: ${user.data.location}`;
    profileUrl.textContent = `Profile URL: ${user.data.html_url}`;
    profileUrl.href = user.data.html_url;
    followers.textContent = `Followers: ${user.data.followers}`;
    following.textContent = `Following: ${user.data.following}`;
    bio.textContent = `Bio: ${user.data.bio}`;

  
  return card;
}

// followersArray.forEach(data => {
//   const newCard = gitCard(data);
//   cardContainer.append(gitCard(data));
//   console.log("Work!!!", newCard);

// })

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
