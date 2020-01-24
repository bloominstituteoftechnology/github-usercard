/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards')
const users = [
  'abhitsahota',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];
users.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
    console.log('Check', response)
    const mycard = createComponent(response)
    cards.appendChild(mycard)
  })
  .catch(error => {
    console.log('API Error :(', error)
  })
})


// Step 2, Understand data


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


function createComponent(obj) {
  // create elements
  let cardDiv = document.createElement('div');
  let userImg = document.createElement('img');
  let cardinfoDiv = document.createElement('div');
  let userH3 = document.createElement('h3');
  let userP = document.createElement('p');
  let locationP = document.createElement('p');
  let profileP = document.createElement('p');
  let addressA = document.createElement('a');
  let followersP = document.createElement('p');
  let followingP = document.createElement('p');
  let bioP = document.createElement('p');

  // structure the elements
  cardDiv.appendChild(userImg);
  cardDiv.appendChild(cardinfoDiv);
  cardinfoDiv.appendChild(userH3);
  cardinfoDiv.appendChild(userP);
  cardinfoDiv.appendChild(locationP);
  cardinfoDiv.appendChild(profileP);
  profileP.appendChild(addressA);
  cardinfoDiv.appendChild(followersP);
  cardinfoDiv.appendChild(followingP);
  cardinfoDiv.appendChild(bioP);

  // class info
  cardDiv.classList.add('card');
  cardinfoDiv.classList.add('card-info');
  userH3.classList.add('name');
  userP.classList.add('username');

  // element info
  userImg.src = obj.data.avatar_url;
  userH3.textContent = obj.data.name;
  userP.textContent = obj.data.login;
  locationP.textContent = 'Location: ' + obj.data.location;
  profileP.textContent = 'Profile: ';
  addressA.textContent = obj.data.html_url;
  addressA.setAttribute('href', obj.data.html_url);
  followersP.textContent = 'Followers: ' + obj.data.followers;
  followingP.textContent = 'Following: ' + obj.data.following;
  bioP.textContent = 'Bio: ' + obj.data.bio;

  return cardDiv; // parent

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
