/* Step 1: using axios, send a GET request to the newFollowing URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
    .get("https://api.github.com/users/amsheppard2016")

    .then(response => {
        console.log(response);
        const entryPoint = document.querySelector(".cards");
        console.log(entryPoint);
        entryPoint.appendChild(cardCreator(response));
    })
    .catch(error => {
        console.log("data not returned", error);
    });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/newFollowers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
    "HamidAzizy",
    "shanreed",
    "LoganMReber",
    "dustinmyers",
    "justsml"
];

followersArray.forEach(user => {
    axios
        .get(`https://api.github.com/users/${user}`)

        .then(response => {
            console.log(response);
            const entryPoint = document.querySelector(".cards");
            console.log(entryPoint);
            entryPoint.appendChild(cardCreator(response));
        })
        .catch(error => {
            console.log("data not returned", error);
        });
});
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the newFollowing DOM element:

<div class="card">
  <img src={image newUrl of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="newUsername">{users user name}</p>
    <p>Location: {users newLocation}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users newFollowers count}</p>
    <p>Following: {users newFollowing count}</p>
    <p>Bio: {users newBio}</p>
  </div>
</div>

*/
const cardCreator = response => {
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    let newImage = document.createElement("img");
    newImage.setAttribute("src", response.data.avatar_url);
    newCard.appendChild(newImage);

    let newInfoCard = document.createElement("div");
    newInfoCard.classList.add("card-info");
    newCard.appendChild(newInfoCard);

    let newName = document.createElement("h3");
    newName.textContent = response.data.name;
    newName.classList.add("name");
    newInfoCard.appendChild(newName);

    let newUsername = document.createElement("p");
    newUsername.textContent = response.data.login;
    newUsername.classList.add("username");
    newInfoCard.appendChild(newUsername);

    let newLocation = document.createElement("p");
    newLocation.textContent = `Location:  ${response.data.location}`;
    newInfoCard.appendChild(newLocation);

    let newProfile = document.createElement("p");
    newProfile.textContent = "Profile:  ";
    newInfoCard.appendChild(newProfile);

    let newUrl = document.createElement("a");
    newUrl.textContent = `${response.data.html_url}`;
    newUrl.setAttribute("href", response.data.html_url);
    newUrl.setAttribute("target", "_blank");
    newProfile.appendChild(newUrl);

    let newFollowers = document.createElement("p");
    newFollowers.textContent = `Followers: ${response.data.followers}`;
    newInfoCard.appendChild(newFollowers);

    let newFollowing = document.createElement("p");
    newFollowing.textContent = `Following: ${response.data.following}`;
    newInfoCard.appendChild(newFollowing);

    let newBio = document.createElement("p");
    newBio.textContent = `Bio: ${response.data.bio}`;
    newInfoCard.appendChild(newBio);

    return newCard;
};

/* List of LS Instructors Github newUsername's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
