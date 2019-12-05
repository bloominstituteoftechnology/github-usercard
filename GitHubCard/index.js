/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


  const cards= document.querySelector(".cards");
axios.get("https://api.github.com/users/aharris1012")
.then(response =>{
  cards.append(GitCards(response.data))
})
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




const followersArray = ['IsabellaGuo','anamonteiro430','CAM603','PHONGdotTech','lisabpink'];
 
followersArray.forEach(user =>{
  axios.get('https://api.github.com/users/${user}')
  .then(response =>{
    cards.appendChild(GitCards(response.data))
  });
})

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

function GitCards(Users){
  const Card=document.createElement("div")
  const Img= document.createElement("img")
  const CardInfo= document.createElement("div")
  const Name= document.createElement("h3")
  const UsersName= document.createElement("p")
  const Loc= document.createElement("p")
  const Prof= document.createElement("p")
  const Href= document.createElement("a")
  const FollowerS= document.createElement("p")
  const FollowinG=document.createElement("p")
  const BiO= document.createElement("p")


  Card.classList.add("card")
  Img.src=""
  CardInfo.classList.add("card-info")
  Name.classList.add("name")
  UsersName.classList.add("username")
  Href.href=""



  Card.appendChild(Img);
  Card.appendChild(CardInfo);
  CardInfo.appendChild(Name);
  CardInfo.appendChild(UsersName);
  CardInfo.appendChild(Loc);
  CardInfo.appendChild(Prof);
  Prof.appendChild(Href);
  CardInfo.appendChild(FollowerS);
  CardInfo.appendChild(FollowinG);
  CardInfo.appendChild(BiO);

  Img.src=Users.avatar_url;
  Name.textContent= Users.name;
  UsersName.textContent= Users.login;
  Loc.textContent= `This person lives in: ${Users.location}`;
  Prof.textContent= "Look at this Profile:"
  Href.href= Users.html_url;
  FollowerS.textContent= `Followers: ${Users.followers}`;
  FollowinG.textContent=`Following: ${Users.following}`;
  BiO=textContent= `Bio:${Users.bio}`;

return Card




}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
