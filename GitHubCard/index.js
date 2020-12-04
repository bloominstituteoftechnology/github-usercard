import axios from 'axios';
console.log(axios)
const result = axios.get("https://api.github.com/users/blackcatwizard")
console.log(result)
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

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

const followersArray = [];

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
function cardMaker({
  html_url,
  name,
  username,
  location,
  followers,
  following,
  bio,
  image_url,
})

function gitHubComponent(obj){
const gitDivOne = document.createElement('div')
const gitImage = document.createElement('img')
const gitDivTwo = document.createElement('div')
const gitHead = document.createElement('h3')
const gitPOne = document.createElement('p')
const gitPTwo = document.createElement('p')
const gitPThree = document.createElement('p')
const gitAnchor = document.createElement('a')
const gitPFour = document.createElement('p')
const gitPFive = document.createElement('p')
const gitPSix = document.createElement('p')

gitDivOne.classList.add('card')
gitDivTwo.classList.add('card-info')
gitHead.classList.add('name')
gitPOne.classList.add('username')

gitImage.src = 'html_url'
gitAnchor.src = 'url'

gitHead.textContent = obj.name
gitPOne.textContent = obj.title
gitPTwo.textContent = "Location: " obj.location
gitPThree.textContent = "Profile: " obj.html_url
gitPFour.textContent = "Followers: " obj.followers
gitPFive.textContent = "Following: " obj.following
gitPSix.textContent = "Bio: " obj.bio

gitDivOne.appendChild(.cards)
gitImage.appendChild(gitDivOne)
gitDivTwo.appendChild(gitDivOne)
gitHead.appendChild(gitDivTwo)
gitPOne.appendChild(gitDivTwo)
gitPTwo.appendChild(gitDivTwo)
gitAnchor.appendChild(gitPTwo)
gitPThree.appendChild(gitDivTwo)
gitPFour.appendChild(gitDivTwo)
gitPFive.appendChild(gitDivTwo)
gitPSix.appendChild(gitDivTwo)

const gitCard = document.querySelector('.cards')
gitCard.appendChild(.cards)
return gitDivOne
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

