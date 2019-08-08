/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/Bangstry")
.then(response => {
  console.log(response);
  cCard.appendChild(superComp(response.data));
})
.catch(err => {
  console.log(err);
})

const followersArray = [];

axios.get("https://api.github.com/users/Bangstry/followers")
.then(response =>{
  console.log(respone);
  response.data.forEach( element =>{
    followersArray.push(element);
  })
  followersArray.forEach(element =>{
    cCard.appendChild(superComp(element));
  })
})
.catch(err => {
  console.log(err);
})

console.log(followersArray)

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

const followersArray = [{

}];

followersArray.forEach(item =>{
  let followerCards = superComp(item);
  cCard.appendChild(followersCards);
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

const cCard = document.querySelector(`.cards`)

function superComp(obj){
  const cCard = document.createElement("div"),
  img = document.createElement("img"),
  cCardInfo = document.createElement("div"),
  nameH3 = document.createElement("h3");
  userP = document.createElement("p"),
  userLoc = document.createElement("p"),
  profile = document.createElement("p"),
  profileURL = document.createElement("a"),
  followers = document.createElement("p"),
  following = document.createElement("p"),
  bio = document.createElement("p");

  cCard.classList.add("card");
  nameH3.classList.add("name");
  userP.classList.add ("username");

  cCard.appendChild(img);
  cCard.appendChild(cCardInfo);
  cCardInfo.appendChild(nameH3);
  cCardInfo.appendChild(userP);
  cCardInfo.appendChild(userLoc);
  cCardInfo.appendChild(profile);
  cCardInfo.appendChild(followers);
  cCardInfo.appendChild(following);
  cCardInfo.appendChild(bio);

  img.src = `${obj.data.avatar_url}`;
  nameH3.textContent = `${obj.login}`;
  userP.textContent = `${obj.login}`;
  userLoc.textContent = `${obj.location}`;
  profileURL.textContent = `${obj.html_url}`;
  followers.textContent = `${obj.followers}`;
  following.textContent = ` ${obj.following}`;
  bio.textContent = `${obj.bio}`;

  return cCard;

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
