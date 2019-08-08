/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/DarioLuque")
  .then(function (response) {
    console.log(response);
    createCard(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github iinfo! You will need to understand the structure of this 
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

let followersArray = ["jonsolari", "mnichols08", "tinaDelli",  "justsml", "luishrd",];


followersArray.forEach(element =>
  axios.get(`https://api.github.com/users/${element}`)
.then(function (response) {
  console.log(response);
    createCard(response.data);
})
.catch(function (error) {
  console.log(error);
}))

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-iinfo">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>locationation: {users locationation}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>bios: {users bios}</p>
  </div>
</div>

*/
const createCard = (usersobj) => {
  const outter = document.querySelector(".cards");
  const card = document.createElement("div");

  card.classList.add("card");
    outter.appendChild(card);

  const picture = document.createElement("img");
  const info = document.createElement("div");
    card.appendChild(picture);
    card.appendChild(info);
    info.classList.add("card-iinfo");

  const names = document.createElement("h3");
  names.classList.add("name");
  
  const users = document.createElement("p");
  users.classList.add("username");
  
  const location = document.createElement("p");
  const profiles = document.createElement("p");
  const links = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bios = document.createElement("p");
    info.appendChild(names);
    info.appendChild(users);
    info.appendChild(location);
    info.appendChild(profiles);
    info.appendChild(links);
    info.appendChild(followers);
    info.appendChild(following);
    info.appendChild(bios);

  names.textContent = usersobj.name;
  users.textContent = usersobj.login;
  location.textContent = usersobj.location;
  profiles.textContent = "Profile:";
    links.href = usersobj.html_url;
    links.textContent = usersobj.html_url;
  followers.textContent = `Followers: ${usersobj.followers}`;
  following.textContent = `Following: ${usersobj.following}`;
  bios.textContent = usersobj.bios;
  picture.src = usersobj.avatar_url;
      
  return card;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
