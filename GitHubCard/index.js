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
          follow this link in your browser https://api.github.com/users/bschatzj/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

 followersArray = ["https://api.github.com/users/ddelfaus", "https://api.github.com/users/SteveMM-III", "https://api.github.com/users/Sara-DLC","https://api.github.com/users/lflores0214", "https://api.github.com/users/primelos"];

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
let followArray = []

// axios.get("https://api.github.com/users/bschatzj/followers")
//   .then(response => {
//     response.data.forEach(element => {
//     followArray.push(element.url);
//     return followArray;
//   })
// })
//   .catch(error => {
//     console.log("The data was not returned", error);
//   });




axios.get("https://api.github.com/users/bschatzj/followers")
  .then(response => {
    response.data.forEach(element => {
    axios.get(element.url)
    .then(response => {
      console.log(response);
      const cardNew = newCard(response);
      cards.appendChild(cardNew);
    })
  })
})
  .catch(error => {
    console.log("The data was not returned", error);
  });


axios.get("https://api.github.com/users/bschatzj")
  .then(response => {
    const cardNew = newCard(response);
    cards.appendChild(cardNew);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });




// console.log(followArray)

// followArray.forEach(object => {
// axios.get(object)
// .then(response => {
//   console.log(response);
//   const cardNew = newCard(response);
//   cards.appendChild(cardNew);
// })
// .catch(error => {
//   console.log("The data was not returned", error);
// });
// });


const cards = document.querySelector('.cards');

function newCard(object) {
  const card = document.createElement('div');
  const picture = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followers= document.createElement('p');
  const following= document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');


  card.appendChild(picture);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  picture.src = object.data.avatar_url;
  name.textContent = `${object.data.name}`;
  userName.textContent = `Username: ${object.data.login}`;
  location.textContent = `Location: ${object.data.location}`;
  link.textContent = `Link: ${object.data.html_url}`;
  followers.textContent = `Followers: ${object.data.followers}`;
  following.textContent = `Following: ${object.data.following}`;
  bio.textContent = `Bio: ${object.data.bio} `;


  return card;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
