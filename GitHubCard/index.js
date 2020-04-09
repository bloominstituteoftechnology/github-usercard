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

const followersArray = ['https://api.github.com/users/MMGroesbeck', 'https://api.github.com/users/shayne-smith', 'https://api.github.com/users/toendthepeace', 'https://api.github.com/users/ScottSmith23', 'https://api.github.com/users/mmussel', 'https://api.github.com/users/frankie95667', 'https://api.github.com/users/sadamexx', 'https://api.github.com/users/biskoi', 'https://api.github.com/users/cdifranco1', 'https://api.github.com/users/justinruss24', 'https://api.github.com/users/MelodyRackham'];

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

function gitFriends(info) {
  const newCard = document.createElement('div'),
        proImage = document.createElement('img'),
        proInfo = document.createElement('div'),
        proName = document.createElement('h3'),
        proUsername = document.createElement('p'),
        proLocation = document.createElement('p'),
        profile = document.createElement('p'),
        proAnchor = document.createElement('a'),
        proFollowers = document.createElement('p'),
        proFollowing= document.createElement('p'),
        proBio= document.createElement('p');
   
  proImage.src = info.avatar_url;
  proName.textContent = info.name;
  proUsername.textContent = info.username;
  proLocation.textContent = 'Location: ' + info.location;
  profile.textContent =  'Profile: ';
  proAnchor.textContent = info.url;
  proFollowers.textContent = 'Followers: ' + info.followers;
  proFollowing.textContent = 'Following: ' + info.following;
  proBio.textContent = 'Bio: ' + info.bio;
  
  newCard.classList.add('card');
  proInfo.classList.add('card-info');
  proName.classList.add('name');
  proUsername.classList.add('username');
  
  newCard.append(proImage);
  newCard.append(proInfo);
  proInfo.append(proName);
  proInfo.append(proUsername);
  proInfo.append(proLocation);
  proInfo.append(profile);
  profile.append(proAnchor);
  proInfo.append(proFollowers);
  proInfo.append(proFollowing);
  proInfo.append(proBio);
  
  return newCard;
}
 
const entryPoint = document.querySelector('.cards');


axios.get("https://api.github.com/users/Istott")
  .then(response => {
  console.log(response.data)
  entryPoint.append(gitFriends(response.data));
  })
  .catch(error => {
  console.log("the data was not returned", error)
});

followersArray.forEach(item => {
  axios.get(item)
  .then(response => {
    console.log(response.data)
    entryPoint.append(gitFriends(response.data));
  })
  .catch(error => {
    console.log("the data was not returned", error)
  });
});
