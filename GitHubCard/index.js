import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
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

const followersArray = [    'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

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
function maker(obj){
  let nDiv = document.createElement('div');
  nDiv.classList.add('card')
  let avi = document.createElement('img')
  avi.src = obj.data.avatar_url
  let card = document.createElement('div')
  card.classList.add('card-info')
  let uName = document.createElement('h3')
  uName.textContent = obj.data.name
  uName.classList.add('name')
  let userName = document.createElement('p')
  userName.textContent = obj.data.login
  userName.classList.add('username')
  let loc = document.createElement('p')
  loc.textContent =`Location: ${obj.data.location}`
  let prof = document.createElement('p')
  prof.textContent = 'Profile:'
  let link = document.createElement('a')
  link.href = obj.data.html_url
  link.textContent = obj.data.html_url
  prof.append(link)
  let follo = document.createElement('p')
  follo.textContent = `Followers: ${obj.data.followers}.`
  let folling = document.createElement('p')
  folling.textContent = `Following: ${obj.data.following}`
  let bio = document.createElement('p')
  bio.textContent = `Bio: ${obj.data.bio}`
  nDiv.append(avi, card)
  card.append(uName, userName, loc, prof, follo, folling, bio)
  return nDiv
}
axios.get('https://api.github.com/users/tvolchko').then( resp => {
  let nDiv = maker(resp)
 document.querySelector('.cards').append(nDiv)}
)
followersArray.forEach(user =>{
  axios.get(`https://api.github.com/users/${user}`).then( resp => {
 document.querySelector('.cards').append(maker(resp))}
)
})
// axios.get('https://api.github.com/users/tvolchko').then( resp => {
//  console.log(resp)}
// )

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
