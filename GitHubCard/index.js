/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const followersArray = [
  "MrTora2",
  "Celaira",
  "miragekamran",
  "worksofhart"
];

let addDOM = document.querySelector(".cards");

followersArray.forEach(element => {
  axios.get(`https://api.github.com/users/${element}`)
    .then((response) => {
      console.log("Success");
      console.log(response);
      addDOM.appendChild(createCard(response.data));
    })
    .catch((error) => {
      console.log("Network request was unsuccessful.");
      console.log(error);
    })

})

function createCard(userItem){
  let div = document.createElement("div");
  div.classList.add("card");

  let img = document.createElement("img");
  div.appendChild(img);
  img.src = userItem.avatar_url;

  let div2 = document.createElement("div");
  div.appendChild(div2);
  div2.classList.add("card-info");

  let h3 = document.createElement("h3");
  div2.appendChild(h3);
  h3.classList.add("name");
  h3.innerHTML = userItem.name;

  let p1 = document.createElement("p");
  div2.appendChild(p1);
  p1.classList.add("username");
  p1.innerHTML = userItem.login;

  let p2 = document.createElement("p");
  div2.appendChild(p2);
  p2.innerHTML = "Location: " + userItem.location;

  let p3 = document.createElement("p");
  div2.appendChild(p3);
  p3.innerHTML = "Profile:";

  let a = document.createElement("a");
  p3.appendChild(a);
  a.href = userItem.html_url;
  a.innerHTML = userItem.html_url;

  let p4 = document.createElement("p");
  div2.appendChild(p4);
  p4.innerHTML = "Followers: " + userItem.followers;

  let p5 = document.createElement("p");
  div2.appendChild(p5);
  p5.innerHTML = "Following: " + userItem.following;

  let p6 = document.createElement("p");
  div2.appendChild(p6);
  p6.innerHTML = "Bio: " + userItem.bio;

  return div;

}

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
