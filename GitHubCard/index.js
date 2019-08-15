let isOpen = false;

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
followersBtn.classList.add('btn');
followersBtn.classList.add('button-open');
followersBtn.textContent = 'Followers';
groupBtn.classList.add('groupBtn');
groupBtn.classList.add('btn');
groupBtn.classList.add('button-open');
groupBtn.textContent = 'Small Group';

// Appending Buttons
cards.appendChild(container)
container.appendChild(followersBtn);
container.appendChild(groupBtn);

// Styling for button container 
container.style.display = 'flex';
container.style.justifyContent = 'space-evenly';
container.style.alignItems = 'center';
container.style.width = '100%';
container.style.height = '100px';

// Styling for buttons
followersBtn.style.cursor = 'pointer';
followersBtn.style.width = '40%';
followersBtn.style.height = '50px';
followersBtn.style.backgroundColor = 'blue';
followersBtn.style.color = 'white';
followersBtn.style.fontSize = '1.6rem';
followersBtn.style.fontWeight = '600';
followersBtn.style.borderRadius = '30px';
followersBtn.style.border = 'none';

groupBtn.style.cursor = 'pointer';
groupBtn.style.width = '40%';
groupBtn.style.height = '50px';
groupBtn.style.backgroundColor = 'blue';
groupBtn.style.color = 'white';
groupBtn.style.fontSize = '1.6rem';
groupBtn.style.fontWeight = '600';
groupBtn.style.borderRadius = '30px';
groupBtn.style.border = 'none';

// EventListeners to style buttons on hover
button.forEach(item => item.addEventListener('mouseover', (e) => e.currentTarget.style.transform = 'scale(1.1)'));

button.forEach(item => item.addEventListener('mouseout', (e) => e.currentTarget.style.transform = 'scale(1.0)'));

// Function to render only one dataset
button.forEach((e) => e.addEventListener('click', () => {
  if (button.classList.toggle('button-open')) {
    isOpen = true;
  } else {
    isOpen = false;
  }
}));

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
let group = groupBtn.addEventListener('click', () => {
  smallGroup.forEach((groupMember) => {

  axios.get(`https://api.github.com/users/${groupMember}`)
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
  const graph = document.createElement('div');

  // adding the classes to the elements
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  graph.classList.add('calendar');
  graph.classList.add('calendar-responsive');

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
  card.appendChild(graph);

  // adding textContent and source values to the elements
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
  graph.textContent = GitHubCalendar('.calendar', item.login);

  return card;
}