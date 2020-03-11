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

// const followersArray = [];


axios
  .get('https://api.github.com/users/RyanPlanteNJ')
  .then(response => {
    //console.log(response.data) to see what is in my api
    githubCard(response.data);
    axios.get('https://api.github.com/users/RyanPlanteNJ/followers')
      .then(response => {
        response.data.forEach(item => {
          let username = item.login;
          let url = `https://api.github.com/users/${username}`;
          axios.get(url).then(result => {
            githubCard(result.data);
          });
        });
      });
  });

let gitcard = document.querySelector('.cards');

function githubCard(data) {
  //creating elements to push to gitcard which is the main div in the html
  const card = document.createElement('div');
  const cardinfo = document.createElement('div');
  const myface = document.createElement('img');
    myface.src = data.avatar_url;
  const name = document.createElement('h3');
  name.textContent = data.name;
  const username = document.createElement('p');
    username.textContent = data.login;
  const location = document.createElement('p');
    location.textContent = data.location;
  const profile = document.createElement('p');
    profile.textContent = `Profile: `
  const profileurl = document.createElement(`a`)
    profileurl.setAttribute(`href`, data.html_url)
    profileurl.textContent = `${data.html_url}`
  const followers = document.createElement('p');
      followers.textContent = `Followers: ${data.followers}`;
  const following = document.createElement('p');
      following.textContent = `Following: ${data.following}`;
  const bio = document.createElement('p');
    bio.textContent = `Bio: ${data.bio}`;

//adding the classes to my elements
  card.classList.add('card');
  cardinfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

//appending everything
  gitcard.appendChild(card);
  card.append(myface, cardinfo);
  cardinfo.append(name, username, location, profile, followers, following, bio);
  profile.appendChild(profileurl);

}

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
