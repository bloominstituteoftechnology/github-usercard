/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Ziggyss')
  .then(response => {
    const cards = document.querySelector('.cards');
    cards.appendChild(cardMaker(response.data))
  })
  .catch(error => {
     document.body.innerText = error.message;
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

const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

followersArray.forEach(function(user){
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      cards.appendChild(cardMaker(response.data))
    })
    .catch(error => {
       document.body.innerText = error.message;
    }); 
  });
 //The above code seems to work but my API limit has now been reached. I am looking into how to fix this now.  


//Attempt at stretch goal:

  axios.get('http://api.github.com/users/Ziggyss')
     .then(response => {
       debugger
         axios.get(`${data.followers_url}`)
             .then(response => {
             const myFollowers = Object.values(data.login);
              myFollowers.forEach(function(data){
             cards.appendChild(cardMaker(response.data))
            }) 
          })
            .catch(error => {
            document.body.innerText = error.message;
             });
       
           })
       .catch(error => {
         document.body.innerText = error.message;
        });

   


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

function cardMaker(data){

   const cardDiv = document.createElement('div');
   const cardImage = document.createElement('img');
   const cardInfo = document.createElement('div'); 
   const cardName = document.createElement('h3');
   const cardProfile = document.createElement('p');
   const cardGitAddress = document.createElement('a');
   const cardUserName = document.createElement('p');
   const cardLocation = document.createElement('p');
   const cardFollowers = document.createElement('p');
   const cardFollowing = document.createElement('p');
   const cardBio = document.createElement('p');
   

   cardDiv.classList.add('card');
   cardInfo.classList.add('card-info');
   cardName.classList.add('name');
   cardUserName.classList.add('username');

   cardImage.src = data.avatar_url;
   cardName.textContent = data.name;
   cardUserName.textContent = data.login;
   cardLocation.textContent = `Location: ${data.location}`;
   cardGitAddress.src = `Profile: ${data.url}`;
   cardFollowers.textContent = `Followers: ${data.followers}`;
   cardFollowing.textContent = `Following: ${data.following}`;
   cardBio.textContent = `Bio: ${data.bio}`;
   
   cardDiv.append(cardImage, cardInfo);
   cardInfo.append(cardName, cardUserName, cardLocation, cardProfile, cardFollowers, cardFollowing, cardBio);
   cardProfile.appendChild(cardGitAddress);

   return cardDiv;

};






/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
