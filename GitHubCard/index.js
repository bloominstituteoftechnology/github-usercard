import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/ryanghoward')
  .then(res => {
    console.log(res);
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['dstrazzeri', 'VABIII', 'FftyShadesofCode', 'fletchulence', 'ryanghoward'];

followersArray.forEach(e => {
  axios.get(`http://api.github.com/users/${e}`)
    .then(res => {
      let info = res.data
      const cardsElement = document.querySelector('.cards');
      cardsElement.appendChild(cardMaker(info))
    })
    .catch(err => {
      console.error(err)
    })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

function cardMaker({ avatar_url, name, login, location, html_url, followers, following, bio }) {
  const imageAvatar = document.createElement('img');
  const userName = document.createElement('p');
  const h3Name = document.createElement('h3');
  const userLocation = document.createElement('p');
  const userLink = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');
  const card = document.createElement('div');
  const div2 = document.createElement('div');
  const userProfile = document.createElement('p');

  h3Name.textContent = name;
  userLink.href = html_url;
  userLink.textContent = `${html_url}`
  userLink.target = '_blank';
  imageAvatar.src = avatar_url;
  userName.textContent = login;
  userLocation.textContent = `Location ${location}`;
  userProfile.textContent = `Profile: `;
  userFollowers.textContent = `Followers: ${followers}`;
  userFollowing.textContent = `Following: ${following}`;
  userBio.textContent = `Bio: ${bio}`;
  card.classList.add('card');

  // <div class="card">
  //     <img src={image url of user} />
  //     <div class="card-info">
  //       <h3 class="name">{users name}</h3>
  //       <p class="username">{users user name}</p>
  //       <p>Location: {users location}</p>
  //       <p>Profile:
  //         <a href={address to users github page}>{address to users github page}</a>
  //       </p>
  //       <p>Followers: {users followers count}</p>
  //       <p>Following: {users following count}</p>
  //       <p>Bio: {users bio}</p>
  //     </div>
  //   </div>

  card.appendChild(imageAvatar);
  card.appendChild(div2);
  div2.appendChild(h3Name);
  div2.appendChild(userName);
  div2.appendChild(userLocation);
  div2.appendChild(userProfile);
  userProfile.appendChild(userLink);
  div2.appendChild(userFollowers);
  div2.appendChild(userFollowing);
  div2.appendChild(userBio);

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
