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
let data;

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

const smallGroup = ['nickdurbin', 'bobbidigi', 'Fractured2K', 'leachcoding', 'miklo88', 'AislynnEdmiston', 'IanCarreras', 'raythurman2386', 'Sherexmykes'];

followersButton.addEventListener('click', () => {
  followersArray.forEach((follower) => {

  axios.get(`https://api.github.com/users/${follower}`)
    .then((response) => {
      data = response.data;
      cards.appendChild(githubCard(data));
    })
    .catch((error) => {
      console.log(error);
    })

  })
})    

groupButton.addEventListener('click', () => {
  smallGroup.forEach((follower) => {

  axios.get(`https://api.github.com/users/${follower}`)
    .then((response) => {
      data = response.data;
      cards.appendChild(githubCard(data));
    })
    .catch((error) => {
      console.log(error);
    })

  })   
});

// Global variables
const followersButton = document.querySelector('.followBtn');
const groupButton = document .querySelector('.groupBtn');
const cards = document.querySelector('.cards');

// Adding Class and Text Content
followersButton.classList.add('followBtn');
followersButton.textContent = 'Followers';
groupButton.classList.add('groupBtn');
groupButton.textContent = 'Small Group';

// Appending Buttons
cards.appendChild(followersButton);
cards.appendChild(groupButton);

function githubCard(item) {
  // creating the variables
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // adding the classes to the elements
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  // appending the elements
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // adding textContent and source values to the elemements
  image.src = item.avatar_url;
  image.textContent = item.image;
  name.textContent = item.name;
  userName.textContent = item.login;
  location.textContent = item.location;
  profile.textContent = `Profile: ${item.html_url}`;
  address.href = item.html_url;
  address.textContent = item.address;
  followers.textContent = `Followers: ${item.followers}`;
  following.textContent = `Follow: ${item.following}`;
  bio.textContent = item.bio;

  return card;
}
