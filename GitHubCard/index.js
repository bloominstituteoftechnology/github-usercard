/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

function gitCreator(data) {
  
  const div1 = document.createElement("div");
  div1.classList.add("card", "card--toggle");


  
  
  const img = document.createElement("img");
  img.setAttribute("src",data.data.avatar_url);
  
  const div2 = document.createElement("div");
  div2.classList.add("card-info");
  div2.style.width = "100%";
  
  const spanToggle = document.createElement("span");
  spanToggle.classList.add("toggle");
  spanToggle.textContent = "click to open";
  spanToggle.addEventListener("click",(event) => {
    event.stopImmediatePropagation();
    event.target.style.backgroundColor = "green";
    
}
);

 const h3 = document.createElement("h3");
 h3.classList.add("name");
 h3.textContent = data.data.name;
 
 const p1 = document.createElement("p");
 p1.classList.add("username");
 p1.textContent = data.data.login;
 
 const p2 = document.createElement("p");
 p2.textContent = data.data.location;
 

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

 const divCal = document.createElement("img");
  divCal.classList.add("calendar");
  divCal.setAttribute("src", "http://ghchart.rshah.org/" + data.data.login);
  divCal.style.width ="100%";
  divCal.style.margin = "3px";

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
div2.appendChild(divCal);
div2.appendChild(spanToggle);

return divCards;

}

const followersArray = ["tetondan","dustinmyers","justsml","luishrd","bigknell", "awuorm"];

  let newUsers = followersArray.map( el => {
  
  axios.get("https://api.github.com/users/" + el)
  .then( response => { 
    console.log(response);
  return gitCreator(response);
 })
 .catch( err => 
    "Error could not read data from server"
 )   
 }
 ); 



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
