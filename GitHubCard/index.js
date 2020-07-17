import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
  .get('https://api.github.com/users/Ryguy244')
  .then(response => {
    const attache = document.querySelector('.cards')
    const tab = cardMaker(response.data);
    attache.appendChild(tab);
    console.log('SUCCESS')
    return tab;
  })
  .catch(error => {
    console.log('FAIL')
    return error;
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
// axios
//   .get('https://api.github.com/users/Ryguy244')
//   .then(response => {
//     const tab = cardMaker(response.data);
//     const attache = document.querySelector('cards')
//     attache.appendChild(tab);
//     console.log(tab);
//     console.log('SUCCESS');
//     return attache;
//   })
//   .catch(error => {
//     console.log('ERROR')
//     return error;
//   })
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];

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
const cardMaker = (obj) => {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  // ['.cards'].append(cardDiv);

  const avatarUrl = document.createElement('img');
  avatarUrl.src = obj['avatar_url'];
  cardDiv.appendChild(avatarUrl);

  const cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');
  cardDiv.appendChild(cardInfoDiv);

  const thirdHead = document.createElement('h3');
  thirdHead.classList.add('name')
  thirdHead.textContent = obj['name'];
  cardInfoDiv.appendChild(thirdHead)

  const pea1 = document.createElement('p');
  pea1.classList.add('username');
  pea1.textContent = obj['login'];
  cardInfoDiv.appendChild(pea1)

  const pea2 = document.createElement('p');
  pea2.textContent = `Location: ${obj['location']}`;
  cardInfoDiv.appendChild(pea2)

  const pea3 = document.createElement('p');
  const profileLink = document.createElement('a')
  pea3.textContent = profileLink;
  // pea3.appendChild(profileLink);
  profileLink.href = obj['url'];
  profileLink.textContent = obj['url'];
  cardInfoDiv.appendChild(pea3)

  const pea4 = document.createElement('p');
  pea4.textContent = `Followers: ${obj['followers']}`
  cardInfoDiv.appendChild(pea4)

  const pea5 = document.createElement('p');
  pea5.textContent = `Following: ${obj['following']}`
  cardInfoDiv.appendChild(pea5)

  const pea6 = document.createElement('p');
  pea6.textContent = obj['bio'];
  cardInfoDiv.appendChild(pea6)

  console.log(cardDiv);
  return cardDiv;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
