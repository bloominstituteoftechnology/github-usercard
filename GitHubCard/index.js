/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// select the main dom node to attach our dynamic content

let cards = document.querySelector('.cards');
console.log("here i am", cards)
const userName = 'paintedlbird7'
// axios.get(`https://api.github.com/users/paintedlbird7`)
axios.get(`https://api.github.com/users/${userName}`)

.then(response => {
console.log(cards)
  console.log(response.data);
  let card = response.data;
  const element = myCard(card)
  console.log(card)
  cards.appendChild(element)
})
// .catch(error => {
//   // Handles failure:
//   console.log('The github API is currently down, try again later', error)
// })



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
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
/*
creates and returns DOM node
*/
function myCard(data) {
  // create the elements
  const card = document.createElement('div')
  const name = document.createElement('h3')
  const login = document.createElement('h3')
  const username = document.createElement('p')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const location = document.createElement('p')
  const profileLink = document.createElement('a')
  const followers = document.createElement('p')
  const bio = document.createElement('p')
  const profileCard = document.createElement('p')
  // const profilePage = document.createElement('p')



  // set the styles/class names
  card.classList.add('card')
  name.classList.add('name')
  login.classList.add('login')
  username.classList.add('username')
  img.classList.add('img')
  cardInfo.classList.add('card-info')


  // set the text content
  img.src = data.avatar_url;
  // gitHubUrl.href = data.url;
  // title.textContent = paintedlbird7
  card.textContent = data.card;
  name.textContent = data.name;
  login.textContent = data.login;
  username.textContent = data.login;
  location.textContent = data.location;
  // profilePage.textContent = `Profile: `;
  profileLink.textContent = data.html_url;
  bio.textContent = data.bio;
  
  // put together
  // creating the HTML structure
  // card.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardInfo);

  cardInfo.appendChild(location);
  // cardInfo.appendChild(profilePage);
  cardInfo.appendChild(profileCard);
  profileCard.appendChild(profileLink);

  cardInfo.appendChild(followers);
  // card.appendChild(following);
  cardInfo.appendChild(bio);
  cardInfo.appendChild(name);
  cardInfo.appendChild(login);
  cardInfo.appendChild(username);
  cardInfo.appendChild(img);




  return card
}

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

