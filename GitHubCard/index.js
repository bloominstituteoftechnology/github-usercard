/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/rofstudios")
.then(response => {
  console.log(response)
  console.log(response.data)

  // let cards = document.querySelector('.cards');
  let newCard = createCard(response.data);
  cards.append(newCard);
})
.catch( error => {
  // console.log('data was not returned')
  console.log(error);
});

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


// let followersArray = [
//   'tetondan',
//   'dustinmyers',
//   'justsml',
//   'luishrd',
//   'bigknell'
// ];

// followersArray.forEach(el => {
//   axios.get(`https://api.github.com/users/${el}`)
//   .then(response => {
//     // let cards = document.querySelector('.cards');
//     let followersAll = createCard(response.data)
//     cards.append(followersAll)
//   })
// })



axios
  .get('https://api.github.com/users/rofstudios/followers')
  .then(response => {
    response.data.forEach(object => {
      axios
        .get(`https://api.github.com/users/${object}`)
        .then(response => {
          cards.append(response.data)
        })
    })

  })
    .catch(err => err)

// followersArray.forEach(follower => {
//   axios.get(`https://api.github.com/users/${follower}`)
//   .then(response => {
//     // let cards = document.querySelector('.cards');
//     let followers = cardInfoFollowers(response.data)
//     cards.append(followers)
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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// funtion that takes in one object
function createCard(object){
  // creating elements
  let card = document.createElement('div'),
      cardImg = document.createElement('img'),
      cardInfo = document.createElement('div'),
      cardInfoName = document.createElement('h3'),
      cardInfoUsername = document.createElement('p'),
      cardInfoLocation = document.createElement('p'),
      cardInfoProfile = document.createElement('p'),
      cardInfoProfileLink = document.createElement('a'),
      cardInfoFollowers = document.createElement('p'),
      cardInfoFollowing = document.createElement('p'),
      cardInfoBio = document.createElement('p');

      // adding class(s) where needed
      card.classList.add('card');
      cardInfo.classList.add('card-info');
      cardInfoName.classList.add('name');
      cardInfoUsername.classList.add('user-name');

      // structuring of elements according to example
      card.append(cardImg);
      card.append(cardInfo);

        cardInfo.append(cardInfoName);
        cardInfo.append(cardInfoUsername);
        cardInfo.append(cardInfoLocation);
        cardInfo.append(cardInfoProfile);
          cardInfoProfile.append(cardInfoProfileLink);
        cardInfo.append(cardInfoFollowers);
        cardInfo.append(cardInfoFollowing);
        cardInfo.append(cardInfoBio);
      
      // adding content where needed
      cardInfoProfileLink.href = object.html_url;
      cardImg.src = object.avatar_url;
      cardInfoName.textContent = object.name;
      cardInfoUsername.textContent = object.login;
      cardInfoLocation.textContent = `Location: ${object.location}`;
      // cardInfoProfile.textContent = `Profile: `
      // cardInfoProfile.textContent = `Profile: ${cardInfoProfileLink}`;
      // cardInfoProfileLink.textContent = object.html_url;
      // cardInfoProfile.textContent = `Profile: ${cardInfoProfileLink}`;//need to test solutions

      cardInfoProfileLink.textContent = object.html_url;
      cardInfoProfile.textContent = `Profile: ${cardInfoProfileLink}`;//need to test solutions
      

      //cardInfoProfile.textContent = `Profile: ${</b>}${cardInfoProfileLink}`;
      cardInfoFollowers.textContent = `Follower: ${object.followers}`;
      cardInfoFollowing.textContent = `Followers: ${object.following}`;
      cardInfoBio.textContent = `Bio: ${object.bio}`;

      return card;
}
let cards = document.querySelector('.cards');


/*
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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/