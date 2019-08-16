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

const followersArray = [ 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];



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
 

const url = "https://api.github.com/users/dangnlu18";
console.log(axios.get(url));
axios.get(url)
.then((response)=>{ return response.data})
.catch((err)=>{
  console.log('There was an error');console.log(err);
});


function createCard(obj){
  //create card div
  const card = document.createElement('div');
  card.classList.add('card');

  //image
  const image = document.createElement('img');
  image.setAttribute('src', obj.avatar_url ) ;
  card.appendChild(image);

  //card info div
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);

  //h3 title
  const title = document.createElement('h3');
  title.classList.add('name');
  title.textContent = obj.name;
  cardInfo.appendChild(title);

  //username
  const pUser = document.createElement('p');
  pUser.classList.add('username');
  pUser.textContent = obj.login;
  cardInfo.appendChild(pUser);

  //location
  const pLoc = document.createElement('p');
  pLoc.textContent = `Location: ${obj.location}`;
  cardInfo.appendChild(pLoc);

  //profile
  const pProfile = document.createElement('p');
  pProfile.textContent = `Profile: ${obj.html_url}`;
  cardInfo.appendChild(pProfile);

  //followers
  const pFollowers = document.createElement('p');
  pFollowers.textContent = `Followers: ${obj.followers}`;
  cardInfo.appendChild(pFollowers);

  //following
  const pFollowing = document.createElement('p');
  pFollowing.textContent = `Following: ${obj.following}`;
  cardInfo.appendChild(pFollowing);

  //bio
  const bio = document.createElement('p');
  bio.textContent = `Bio: ${obj.bio}`;
  cardInfo.appendChild(pFollowers);

  return card;
}


axios.get(url)
.then((response)=>{ return response.data})
.then((obj)=>{return createCard(obj)})
.then((card)=> document.querySelector('.cards').appendChild(card))
.catch((err)=>{
  console.log('There was an error');console.log(err);
});


followersArray.forEach((follower)=>{
  const url2 = `https://api.github.com/users/${follower}`;
  axios.get(url2)
  .then((response)=>{ return response.data})
  .then((obj)=>{return createCard(obj)})
  .then((card)=> document.querySelector('.cards').appendChild(card))
  .catch((err)=>{
    console.log('There was an error');console.log(err);
  })
});