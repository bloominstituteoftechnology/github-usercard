import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const user = 'https://api.github.com/users/mzteepowell';
const cards = document.querySelector('.cards');

axios.get(user)
    .then(res => {
      const obj = res.data;
      const card = getGitHubData(obj);
      cards.appendChild(card);
      console.log(obj);
  })
    .catch(err => {
      console.log(err)
  })
    .then(() => {
      console.log('Success ')
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
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

const followersArray = ["aitofe","shazeen15", "andybolos", "brityhemming", "danteocualesjr"];

followersArray.forEach(name => {
  const followers = `https://api.github.com/users/${name}`;

  axios.get(followers)
.then(res => {
  const obj = res.data;
  const card = getGitHubData(obj);
  cards.appendChild(card);
  console.log(obj);
})
.catch(err => {
  console.log(err)
})
.then(() => {
  console.log('Success ')
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


const getGitHubData = ({avatar_url, name, login, location, url, followers, following, bio}) => {
      const div_card = document.createElement('div');
      const img = document.createElement('img');
      const div_card_info = document.createElement('div');
      const h3 = document.createElement('h3');
      const p_userName = document.createElement('p');
      const p_location = document.createElement('p');
      const p_profile = document.createElement('p');
      const a_tag = document.createElement('a');
      const p_followers = document.createElement('p');
      const p_following = document.createElement('p');
      const p_bio = document.createElement('p');
     
      div_card.classList.add('card');
      img.setAttribute('src', avatar_url);
      img.setAttribute('alt', "Github profile image");
      div_card_info.classList.add('card-info');
      h3.classList.add('name');
      h3.textContent = name;
      p_userName.classList.add('username');
      p_userName.textContent = login;
      p_location.textContent = `Location: ${location}`;
      p_profile.textContent= 'Profile: '
      a_tag.textContent = url;
      a_tag.setAttribute('href', url);
      p_followers.textContent = `Followers: ${followers}`;
      p_following.textContent = `Following: ${following}`;
      p_bio.textContent = `Bio: ${bio}`;

      div_card.appendChild(img);
      div_card.appendChild(div_card_info);
      div_card_info.appendChild(h3);
      div_card_info.appendChild(p_userName);
      div_card_info.appendChild(p_location);
      div_card_info.appendChild(p_profile);
      p_profile.appendChild(a_tag);
      div_card_info.appendChild(p_followers);
      div_card_info.appendChild(p_following);
      div_card_info.appendChild(p_bio);

  return div_card;    
  }
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
