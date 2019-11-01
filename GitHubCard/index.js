/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/sadamexx').then(response => {
  // console.log(response);
  parentDiv.appendChild(createCards(response))
  .catch(error => {
    console.log(error);
  })
});


const parentDiv = document.querySelector('.cards');

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

const followersArray = ['javish88', 'MarFan', 'RonnieDipple', 'ShandaWoods', 'itshui3'];

followersArray.forEach(function (element) {
  axios.get(`https://api.github.com/users/${element}`)
    .then(response => {
      parentDiv.append(createCards(response))
    })
    .catch(error => {
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

function createCards(object) {
  const container = document.createElement('div');
  container.classList.add('card');
  console.log(object);
  const image = document.createElement('img');
  image.src = object.data.avatar_url;
  container.appendChild(image);


  const info = document.createElement('div');
  info.classList.add('card-info');
  container.appendChild(info);

  const realName = document.createElement('h3');
  realName.classList.add('name');
  info.appendChild(realName);
  realName.textContent = object.data.name;

  const screenName = document.createElement('p');
  screenName.classList.add('username')
  info.appendChild.screenName
  screenName.textContent = object.data.login;

  const userLoc = document.createElement('p');
  info.appendChild(userLoc);
  userLoc.textContent = 'Location:' + object.data.location;

  const userProf = document.createElement('p');
  info.appendChild(userProf);
  userProf.textContent = 'Profile:';

  const link = document.createElement('a');
  userProf.appendChild(link);
  link.textContent = object.data.html_url;

  const userFollowers = document.createElement('p');
  info.appendChild(userFollowers);
  userFollowers.textContent = 'Followers:' + object.data.followers;

  const userFollows = document.createElement('p');
  info.appendChild(userFollows);
  userFollows.textContent = object.data.following;

  const userBio = document.createElement('p');
  info.appendChild(userBio);
  userBio.textContent = object.data.bio;


  return container;
}



/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/