/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/wktg623
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
          follow this link in your browser https://api.github.com/users/wktg623/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = [];


const userCard = (info) => {

  const newCard = document.createElement('div'),
        img  = document.createElement('img'),
        cardInfo = document.createElement('div'),
        h3 = document.createElement('h3'),
        parUsername  = document.createElement('p'),
        parLocation = document.createElement('p'),
        parProfile = document.createElement('p'),
        a = document.createElement('a'),
        parFollowers = document.createElement('p'),
        parFollowing = document.createElement('p'),
        parBio = document.createElement('p');

       //need to add textContent & src

       newCard.classList.add('card');
       cardInfo.classList.add('card-info');
       parUsername.classList.add('username');

       newCard.appendChild(img);
       newCard.appendChild(cardInfo);
       
    
      
       
      
       
       cardInfo.appendChild(h3);
       cardInfo.appendChild(parUsername);
       cardInfo.appendChild(parLocation);
       cardInfo.appendChild(parProfile);
       cardInfo.appendChild(parFollowers);
       cardInfo.appendChild(parFollowing);
       cardInfo.appendChild(parBio);

       parProfile.appendChild(a);

       img.src = info['avatar_url'];
       h3.textContent = info.name;
       parUsername.textContent = info.login;
       parLocation.textContent = info.location;
       parFollowers.textContent = info.followers;
       parFollowing.textContent = info.following;
       parBio.textContent = info.bio;
       const aURL = info['html_url'];
      

       return newCard;
      
};


const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/wktg623')
.then((response) => {
 


  
  cards.appendChild(userCard(response.data))
  })
  //const newCard = userCard(info);
  

.catch((error =>{
  console.log(error);
}))

.catch((error=> {
  console.log(error);
}))





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
