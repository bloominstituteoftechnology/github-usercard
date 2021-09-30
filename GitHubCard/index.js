/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'


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

const followersArray = ["tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];
  followersArray.forEach(Element =>{
    axios.get(`https://api.github.com/users/${Element}`)
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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
const entryPoint = document.querySelector('.container');
function hubMaker( object) {
  const Card = document.createElement('div')
  const img = document.createElement('div')
  const info = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const Location = document.createElement('p')
  const Profile = document.createElement('p')
  const link = document.createElement('a')
  const Followers = document.createElement('p')
  const Following = document.createElement('p')
  const Bio = document.createElement('p')


Card.classList.add('.card')
info.classList.add('.card-info')
name.classList.add('.username')

heading.textContent = `username: ${name}`
image.src = imageURL


 Card.appendChild(img)
 Card.appendChild(info)
 info.appendChild(name)
 info.appendChild(username)
 info.appendChild(Location)
 info.appendChild(Profile)
 info.appendChild(Followers)
 info.appendChild(Following)
 info.appendChild(Bio)
 Profile.appendChild(link)




return card
}