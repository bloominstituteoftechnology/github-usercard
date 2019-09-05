/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const HTMLcards = document.querySelector('.cards');
axios.get('https://api.github.com/users/robomantis19')
  .then(response => {
    console.log('my html card: ', response);
    HTMLcards.appendChild(Cards(response.data));
  })
  .catch(err => {
    console.log("error: " , err);
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

// const followersArray = ["alecblkly","ChrisRDaniels","DTJohnson5","raaudain","mary-clayton","emilyelri"];

// followersArray.forEach(function(log) {
   

//   axios.get(`https://api.github.com/users/${log}`)
//     .then(res => {
//       //console.log(res);
//       //return followersArray;
//       HTMLcards.appendChild(Cards(res.data));
//     })
//     .catch(err => {
//       console.log('error: ', err); 
//     })
// });
//-----------------------stretch------------------
//let loginArray = [];
axios.get(`https://api.github.com/users/robomantis19/followers`)
    .then(res => {
      console.log('stretch: ' , res);
      
      let loginArray = res.data.map( x => {
        axios.get(`https://api.github.com/users/${x.login}`)
          .then(res1 => {
            
            HTMLcards.appendChild(Cards(res1.data));
          })
          .catch(err1 => {
            console.log('err1: ' , err1)
          })
        
      })
      
        
      
    })
    .catch(err => {
      console.log('error: ', err); 
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
function Cards(input){
  const theCard = document.createElement('div');
  const theImg = document.createElement('img');
  const theCardInf = document.createElement('div');
  const theName = document.createElement('h3');
  const theUserName = document.createElement('p');
  const theLocation = document.createElement('p');
  const theProfile = document.createElement('p');
  const UserGitPageHref = document.createElement('a');
  const theFollowers = document.createElement('p');
  const theFollowing = document.createElement('p');
  const theBio = document.createElement('p'); 

  theCard.appendChild(theImg);
  theCard.appendChild(theCardInf);
  theCardInf.appendChild(theName); 
  theCardInf.appendChild(theUserName); 
  theCardInf.appendChild(theLocation);
  theCardInf.appendChild(theProfile); 
  theProfile.appendChild(UserGitPageHref);
  theCardInf.appendChild(theFollowers);
  theCardInf.appendChild(theFollowing);
  theCardInf.appendChild(theBio);

  theCard.classList.add('card');
  theCardInf.classList.add('card-info');
  theName.classList.add('name');
  theUserName.classList.add('username');

  //------------adding content below---
  theImg.src = input.avatar_url;
  theName.textContent = input.name;
  theUserName.textContent = input.login;
  theProfile.textContent = `Profile: ${UserGitPageHref}`; theProfile.appendChild(UserGitPageHref);
  theLocation.textContent = "Location: "+input.location;

  UserGitPageHref.setAttribute('href', input.html_url);
  UserGitPageHref.textContent = input.html_url;
  theFollowers.textContent = "Followers: " + input.followers;

  theFollowing.textContent = "Following: " + input.following; 
  theBio.textContent = "Bio: " + input.bio;
  
  return theCard

}





/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
