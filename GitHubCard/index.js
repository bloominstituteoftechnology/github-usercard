/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


axios.get("https://api.github.com/users/anthonyj713")
.then(res =>console.log(res))
.catch(error=> console.log(error));

  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


let cards = document.querySelector('.cards');
axios.get('https://api.github.com/users/anthonyj713')
.then(res => { cards.append(cardFunction(res));
})
.catch( error => {
  console.log("the data was not returned", error)
});
  
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'https://api.github.com/users/ksemenza',
'https://api.github.com/users/Keyeric',
'https://api.github.com/users/phinehas90',
'https://api.github.com/users/AmMiRo',
'https://api.github.com/users/alborja07'];

  followersArray.forEach(card => {
    axios.get(card)
.then(res => { cards.append(cardFunction(res));
})
.catch( error => {
  console.log("the data was not returned", error)
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

function cardFunction(createCard){
  let container = document.createElement('div');
  let pic = document.createElement('img');
  let info = document.createElement('div');
  let personName = document.createElement('h3');
  let userName = document.createElement('p');
  let userLocation = document.createElement('p');
  let userProfile = document.createElement('p');
  let userPage = document.createElement('a');
  let userFollowers = document.createElement('p');
  let userFollowing = document.createElement('p');
  let userBio = document.createElement('p');

  container.append(pic);
  container.append(info);
  info.append(personName);
  info.append(userName);
  info.append(userLocation);
  info.append(userProfile);
  info.append(userFollowers);
  info.append(userFollowing);
  info.append(userBio);
  userProfile.append(userPage);

  container.classList.add('card');
  info.classList.add('card-info');
  personName.classList.add('name');
  userName.classList.add('username');
 
  pic.src = createCard.data.avatar_url;
  personName.textContent = createCard.data.name;
  userName.textContent = createCard.data.login;
  userLocation.textContent = `Location: ${createCard.data.location}`;
  userProfile.textContent = createCard.data.url;
  userPage.href = createCard.data.html_url;
  userPage.textContent = createCard.data.html_url;
  userFollowers.textContent = `Followers: ${createCard.data.followers}`;
  userFollowing.textContent = `Following: ${createCard.data.following}`;
  userBio.textContent = createCard.data.bio;

  return container;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
