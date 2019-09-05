/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

function gitCreator(data) {
  console.log(data);
  const div1 = document.createElement("div");
  div1.classList.add("card");
 
 const img = document.createElement("img");
 img.setAttribute("src","https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png");
 
 const div2 = document.createElement("div");
 div2.classList.add("card-info");
 
 const h3 = document.createElement("h3");
 h3.classList.add("name");
 h3.textContent = data.data.name;
 
 const p1 = document.createElement("p");
 p1.classList.add("username");
 p1.textContent = data.data.login;
 
 const p2 = document.createElement("p");
 p2.textContent = data.data.location;
 console.log(p2);

 const anchor = document.createElement("a");
 anchor.setAttribute("href", data.data.url);
 anchor.textContent = data.data.url;
 
 const p3 = document.createElement("p");
 p3.appendChild(anchor);

 const p4 = document.createElement("p");
 p4.textContent = "followers: " + data.data.followers;
 
 const p5 = document.createElement("p");
 p5.textContent = "following: " + data.data.following;

 const p6 = document.createElement("p");
 p6.textContent = "Bio: " + data.data.bio;

 console.log(div1);

const divCards = document.querySelector(".cards");
divCards.appendChild(div1);

div1.appendChild(img);
div1.appendChild(div2);
div2.appendChild(h3);
div2.appendChild(p1);
div2.appendChild(p2);
div2.appendChild(p3);
div2.appendChild(p4);
div2.appendChild(p5);
div2.appendChild(p6);

return divCards;

}

const followersArray = ["tetondan","dustinmyers","justsml","luishrd"
  ,"bigknell"];

followersArray.forEach( el => 
  { const newUsers =  newUsers.concant("https://api.github.com/users/" + el)});
console.log(newUsers);

axios.get(newUsers)
.then( response => { 
  return gitCreator(response);
 })
 .catch( err => 
    "Error could not read data from server"
 )

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
