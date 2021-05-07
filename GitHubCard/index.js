import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Taormina7575')
      .then((myData) => {
        console.log(myData.data.html_url)
        let card = makeCard(myData.data);
        document.querySelector('.cards').appendChild(card)
      })
      .catch((err) => {
        console.log(err)
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

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

followersArray.forEach((userTitle) => {
  axios.get(`https://api.github.com/users/${userTitle}`)
        .then((userData) => {
          let newCard = makeCard(userData.data);
          document.querySelector('.cards').appendChild(newCard);
        })
        .catch((err) => {
          console.log(err)
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
function makeCard({avatar_url, name, login, location, html_url, followers, following, bio}) {
  let wrapDiv = document.createElement('div')
  let img = document.createElement('img')
  let infoDiv = document.createElement('div')
  let personName = document.createElement('h3')
  let userName = document.createElement('p')
  let local = document.createElement('p')
  let profileWrap = document.createElement('p')
  let profileLink = document.createElement('a')
  let followersCount = document.createElement('p')
  let followingCount = document.createElement('p')
  let bioWrap = document.createElement('p')

  wrapDiv.appendChild(img)
  wrapDiv.appendChild(infoDiv)
  infoDiv.appendChild(personName)
  infoDiv.appendChild(userName)
  infoDiv.appendChild(local)
  infoDiv.appendChild(profileWrap)
  profileWrap.appendChild(profileLink)
  infoDiv.appendChild(followersCount)
  infoDiv.appendChild(followingCount)
  infoDiv.appendChild(bioWrap)
  

  wrapDiv.classList.add('card')
  infoDiv.classList.add('card-info')
  personName.classList.add('name')
  userName.classList.add('username')
  
  console.log(html_url)

  img.src = avatar_url;
  personName.textContent = name;
  userName.textContent = login;
  local.textContent = `Location: ${location}`;
  profileWrap.textContent = `Profile: `;
  profileLink.textContent = `https://github.com/${login}`;
  profileLink.src = html_url;
  followersCount.textContent = `Followers: ${followers}`
  followingCount.textContent = `Following: ${following}`;
  bioWrap.textContent = bio;

  return wrapDiv;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
