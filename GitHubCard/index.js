import axios from 'axios';

/*  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector(".cards");

axios.get('https://api.github.com/users/thegrindisreal86')
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

.then(res => {

  
  const newCard = cardMaker(res.data)
  cards.prepend(newCard)
  

})
.catch(error => {
  console.log('error')
})



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];
axios.get('https://api.github.com/users/thegrindisreal86/followers')
    .then( response => {
        // Remember response is an object, response.data is an array.
        response.data.forEach( item => {
            let userCard = cardMaker(item);
            cards.appendChild(userCard);
        })
    })
    .catch( error => {
        console.log("Error:", err);
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
function cardMaker(data){



const card = document.createElement('div')
const img = document.createElement('img')
const info = document.createElement('div')
const h3 = document.createElement('h3')
const p1 = document.createElement('p')
const p2 = document.createElement('p')
const p3 = document.createElement('p')
const p4 = document.createElement('p')
const p5 = document.createElement('p')
const p6 = document.createElement('p')
const anchor = document.createElement('a')

card.appendChild(img)
card.appendChild(info)
info.appendChild(h3)
info.appendChild(p1)
info.appendChild(p2)
info.appendChild(p3)
p3.appendChild(anchor)
info.appendChild(p4)
info.appendChild(p5)
info.appendChild(p6)

card.classList.add('card')
h3.classList.add('name')
info.classList.add('card-info')
p1.classList.add('username')

h3.textContent = data.name;
p1.textContent = data.username;
p2.textContent = data.location;
p3.textContent = `Profile: ${data.html_url}`;
anchor.textContent = data.html_url;
p4.textContent = `Followers: ${data.followers}`;
p5.textContent = `Following: ${data.following}`;
p6.textContent = `Bio: ${data.bio}`;
img.src = data.avatar_url;

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
