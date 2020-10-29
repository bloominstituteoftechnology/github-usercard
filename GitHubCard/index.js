import axios from "axios"

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
  .get("https://api.github.com/users/JustinBenz")
  .then((res) => {
    const result = gcardMaker(res.data)
    cards.appendChild(result);
    console.log(result)
  })
  .catch((fuzz) => {
    console.log('ya dun borked', fuzz)
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
const cards = document.querySelector('.cards');
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

const followersArray = ['KaiMicahMills','Stone98','joshwhitwell','bigknell','justsml'];

// followersArray.forEach((item) => {
//   axios
//     .get(`https://api.github.com/users/${item}`)
//     .then((res) =>{
//       const result = gcardMaker(res.data)
//       cards.appendChild(result);
//       console.log(result)
//     })
//     .catch((fuzz) => {
//       console.log('borked', fuzz)
//     })
//   })


function gcardMaker({ avatar_url, name, login, location, html_url, bio }){
  const card = document.createElement('div');
  const pfp = document.createElement('img');
  const ctaContainer = document.createElement('div');
  const ctaName = document.createElement('h3');
  const ctaUsrName = document.createElement('p');
  const ctaPin = document.createElement('p');
  const ctaProf = document.createElement('p');
  const profAnch = document.createElement('a')
  const ctaBio = document.createElement('p');

  card.classList.add("card");;
  ctaContainer.classList.add("card-info");
  ctaName.classList.add('name');
  ctaUsrName.classList.add('username');

  pfp.setAttribute('src', avatar_url);
  profAnch.setAttribute('href', html_url);
  ctaName.textContent = name;
  ctaUsrName.textContent = login;
  ctaPin.textContent = location;
  ctaProf.textContent = 'Profile:';
  ctaBio.textContent = bio;


  card.appendChild(pfp);
  card.appendChild(ctaContainer);
  ctaContainer.appendChild(ctaName);
  ctaContainer.appendChild(ctaUsrName);
  ctaContainer.appendChild(ctaPin);
  ctaContainer.appendChild(ctaProf);
  ctaContainer.appendChild(ctaBio);
  ctaProf.appendChild(profAnch);

  return card;
}

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
