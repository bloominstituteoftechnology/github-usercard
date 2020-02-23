/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
//made variable for referencing the html class .cards
const cards = document.querySelector('.cards');

//made axios method
axios.get("https://api.github.com/users/xpinero")
  .then(response =>{
    console.log(response)
    cards.appendChild(newCard(response.data))
  })
  .catch(error => {
    console.log("The data was not returned", error)
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
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

//array with strings as data types
const followersArray = ['Ryan-Erickson', 'Kat2bk', 'meeka73', 'tetondan', 'bigknell'];

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
//this is the constructor
function newCard(parameter) {

  //parent container and adding class name
  const card = document.createElement('div');
  card.classList.add('card');

  //image and adding source
  const userImg = document.createElement('img');
  userImg.src = parameter.avatar_url;

  //child container and added class
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info')

  //grandchild title with class name and mod text content
  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = parameter.login;

  //username paragraph and class, mod text content
  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = parameter.name;

  //location paragraph and mod text content
  const followerLocation = document.createElement('p');
  followerLocation.textContent = `Location: ${parameter.location}`;

  //profile p tag mod content 
  const followerProfile = document.createElement('p')
  followerProfile.textContent = 'Profile:';

  //anchor tag with mod text and url href
  const pageAnchor = document.createElement('a')
  pageAnchor.href = parameter.html_url;
  pageAnchor.textContent = parameter.name;

  //followers and mod content
  const followerFollowers = document.createElement('p');
  followerFollowers.textContent = `Followers: ${parameter.followers}`;

  //following and mod content
  const followerFollowing = document.createElement('p');
  followerFollowing.textContent = `Following: ${parameter.following}`;

  //bio and mod content
  const followerBio = document.createElement('p');
  followerBio.textContent = `Bio: ${parameter.bio}`

  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(followerLocation);
  cardInfo.appendChild(followerProfile);
  followerProfile.appendChild(pageAnchor);
  cardInfo.appendChild(followerFollowers);
  cardInfo.appendChild(followerFollowing);
  cardInfo.appendChild(followerBio);


  return card
}

followersArray.forEach(card => {
  axios.get(`https://api.github.com/users/${card}`)
  .then((response) => {
    cards.appendChild(newCard(response.data))
    console.log(response)
  })
})
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
