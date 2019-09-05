/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/Gavin-Dreyer')

.then(function (response) {
  // handle success
  console.log(response);
  const newData = response.data;
  const newCard = gitHubCard(newData);
  container.append(newCard);
})
.catch(function (error) {
  // handle error
  console.log(error);
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

const followersArray = ['https://api.github.com/users/DannyManzietti', 'https://api.github.com/users/rashmipoddar', 'https://api.github.com/users/YenniLee', 'https://api.github.com/users/Techne3', 'https://api.github.com/users/LenWinkler'];

// followersArrayData
followersArray.forEach(item => {
  axios.get(item)

.then(function (response) {
  // handle success
  console.log(response);
  const newData = response.data;
  const newCard = gitHubCard(newData);
  container.append(newCard);
  // response.data.forEach(item => {
  //   const newCard = gitHubCard(item[i]);
  //   container.append(newCard);
  // });
  
})
.catch(function (error) {
  // handle error
  console.log(error);
})
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
const container = document.querySelector('.container');

function gitHubCard(object) {
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('A');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  //structure 
  card.append(userImg);
  card.append(cardInfo);
  cardInfo.append(name);
  cardInfo.append(userName);
  cardInfo.append(location);
  cardInfo.append(profile);
  cardInfo.append(profileLink);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);

  //classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username')

  //content
  userImg.setAttribute('src', object.avatar_url);
  userImg.setAttribute('alt', 'Profile Picture');
  name.textContent = object.name;
  userName.textContent = object.login;
  location.textContent = `Location: ${object.location}`;
  profile.textContent = `Profile: `;
  profileLink.textContent = object.html_url;
  profileLink.setAttribute('href', object.html_url);
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  bio.textContent = `Bio: ${object.bio}`

  return card

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
