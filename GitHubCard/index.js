/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

getUserData('ReBarrington', true)

function getUserData (username, getFollowers) { 
  axios.get(`https://api.github.com/users/${username}`)
    .then(function (response) {
      console.log(response);
      document.querySelector('.cards').appendChild((createCard(response.data)))

      if (getFollowers) {
        axios.get(response.data.followers_url)
        .then(function (response) {
          console.log(response)
          response.data.forEach(user => {
            getUserData(user.login, false);
          })
        })
        .catch(function (error) {
          // handle error
          console.log('The data was not returned', error);
        })
      }
    })
    .catch(function (error) {
      // handle error
      console.log('The data was not returned', error);
    });
}


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

// const followersArray = ['Pergamene', 'fbzr', 'Michael-B1764', 'angela-laien', 'adriannasaruk', 'afialydia'];

// followersArray.forEach(username => {
//   let followersLinks = 'https://api.github.com/users/' + username;
//   axios.get(followersLinks)
//   .then(function (response) {
//     document.querySelector('.cards').appendChild(createCard(response.data))
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
// })



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

function createCard(data) {
  // define elements 
  const card = document.createElement('div');
  const profilePic = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  // classes to elements
  card.classList.add('card');
  profilePic.setAttribute('src', data.avatar_url);
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');
  link.setAttribute('href', data.html_url)
  // text content
  name.textContent = data.name;
  username.textContent = data.login;
  location.textContent = `Location: ${data.location}`;
  profile.textContent = `Profile: `;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;
  link.textContent =  data.html_url;
  // set up structure
  card.appendChild(profilePic);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
};

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
