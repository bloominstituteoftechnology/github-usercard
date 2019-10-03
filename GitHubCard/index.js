/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
    .get("https://api.github.com/users/itsericfig")
    .then(response => {
        console.log("✅", response);
        console.log("✅", response.data);
    })
    .catch(error => {
        console.log("🚨", error);
    });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

function CreateCard(attr) {
    // CREATING ELEMENTS
    const card = document.createElement("div");
    const card_img = document.createElement("img");
    const card_info = document.createElement("div");
    const card_name = document.createElement("h3");
    const card_username = document.createElement("p");
    const card_location = document.createElement("p");
    const card_profile = document.createElement("p");
    const card_profile_a = document.createElement("a");
    const card_followers = document.createElement("p");
    const card_following = document.createElement("p");
    const card_bio = document.createElement("p");

    // ADD CLASSES TO ELEMENTS
    card.classList.add("card");
    card_info.classList.add("card-info");
    card_name.classList.add("name");
    card_username.classList.add("username");

    // ADD TEXT/VALUES TO ELEMENTS
    card_img.setAttribute("src", attr.data.avatar_url);
    card_name.textContent = attr.data.name;
    card_username.textContent = attr.data.login;
    card_location.textContent = `Location: ${attr.data.location}`;
    card_profile.textContent = `Profile: `;
    card_profile_a.setAttribute("href", attr.data.html_url);
    card_profile_a.textContent = attr.data.html_url;
    card_followers.textContent = `Followers: ${attr.data.followers}`;
    card_following.textContent = `Following: ${attr.data.following}`;
    card_bio.textContent = `Bio: ${attr.data.bio}`;

    // APPEND TO CARD ELEMENT
    card_info.appendChild(card_name);
    card.appendChild(card_img);
    card.appendChild(card_info);
    card_info.appendChild(card_name);
    card_info.appendChild(card_username);
    card_info.appendChild(card_location);
    card_info.appendChild(card_profile);
    card_profile.appendChild(card_profile_a);
    card_profile.appendChild(card_followers);
    card_profile.appendChild(card_following);
    card_profile.appendChild(card_bio);

    // RETURN CARD ELEMENT
    return card;
}

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
