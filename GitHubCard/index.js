/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
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

const followersArray = [
  'https://api.github.com/users/Gio5298',
  'https://api.github.com/users/ShandaWoods',
  'https://api.github.com/users/D-Fink',
  'https://api.github.com/users/Hail91',
  'https://api.github.com/users/jevoncochran'
];


axios.get("https://api.github.com/users/toneiojimz")
.then(response => {
  //console.log(response);
 
    const newPerson = response.data;
    profileCards.appendChild(gitCard(newPerson));
  console.log(newPerson)
})
.catch(error => {
  console.log("The data was not returned", error);
});
const profileCards = document.querySelector(".cards");


axios.get("https://api.github.com/users/toneiojimz/followers")
.then(response => {
  //console.log(response);
 
   response.data.forEach(item => {
    const newProfile = gitCard(item)
    profileCards.appendChild(newProfile)
     
   });
})
.catch(error => {
  console.log("The data was not returned", error);
});




function gitCard(object) {

  //define new elements
  const myImg = document.createElement("img");
  const myCard = document.createElement("div");
  const cardInfo= document.createElement('div');
  const myH3 = document.createElement("h3");
  const user = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const urlGit = document.createElement('a');
  const followers = document.createElement("p");
  const follows = document.createElement("p");
  const bio = document.createElement("p");

  //set up structure of elements
  myCard.appendChild(myImg);
  myCard.appendChild(cardInfo);
  cardInfo.appendChild(myH3);
  cardInfo.appendChild(user);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(follows);
  myCard.appendChild(bio);
  cardInfo.appendChild(urlGit);

  //set class names
  myCard.classList.add("img");
  myCard.classList.add("card");
  myCard.classList.add('card-info');
  myCard.classList.add('name');
  myCard.classList.add('username');
  myCard.classList.add('p');
  myCard.classList.add('p');
  myCard.classList.add('a');
  myCard.classList.add('p');
  myCard.classList.add('p');
  myCard.classList.add('p');

  //set content
  myImg.src = object.avatar_url;
  myH3.textContent = object.name;
  user.textContent = object.login;
  location.textContent = `Location: ${object.location}`;
  urlGit.textContent = object.html_url;
  urlGit.href = object.html_url;
  followers.textContent = `Followers: ${object.followers}`;
  follows.textContent = `Following: ${object.following}`;
  bio.textContent = `Bio: ${object.bio}`;



  return myCard;
}
