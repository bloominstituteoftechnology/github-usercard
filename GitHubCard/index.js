let data;
let isOpen;

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

const smallGroup = ['nickdurbin', 'bobbidigi', 'Fractured2K', 'leachcoding', 'miklo88', 'AislynnEdmiston', 'IanCarreras', 'raythurman2386', 'Sherexmykes'];

// Global variables
const cards = document.querySelector('.cards');
const button = document.querySelectorAll('.btn');
const followersBtn = document.createElement('button');
const groupBtn = document.createElement('button');
const container = document.createElement('div');

// Adding Class and TextContent to Buttons
container.classList.add('btn-container');
followersBtn.classList.add('followBtn');
followersBtn.classList.add('btn')
followersBtn.textContent = 'Followers';
groupBtn.classList.add('groupBtn');
groupBtn.classList.add('btn')
groupBtn.textContent = 'Small Group';

// Appending Buttons
cards.appendChild(container)
container.appendChild(followersBtn);
container.appendChild(groupBtn);

// Styling for container and buttons
container.style.display = 'flex';
container.style.justifyContent = 'space-evenly';
container.style.alignItems = 'center';
container.style.width = '100%';
container.style.height = '100px';

// Function to render only one dataset
// button.forEach((e) => e.addEventListener('click', () => {

// })) 

// EventListener to render followers cards with an Axios request
let followers = followersBtn.addEventListener('click', () => {
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
    
// EventListener to render small group cards with an Axios request
groupBtn.addEventListener('click', () => {
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

// Card component to render the data from the API calls
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
