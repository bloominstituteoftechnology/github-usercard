import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const destination = document.querySelector('.cards')

axios.get('https://api.github.com/users/nhwoo97')
.then(response => {
  const myGithub = githubProfile(response)
  destination.appendChild(myGithub)
})
.catch(error => {
  console.log(error)
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

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(element => {
    axios.get(`https://api.github.com/users/${element}`)
    .then(response => {
      const otherGithub = githubProfile(response)
      destination.appendChild(otherGithub)
    })
    .catch(error => {
      console.log(error)
    })
});

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

function githubProfile(arr){

const all = document.createElement('div')
const image = document.createElement('img')
const cardInfo = document.createElement('div')
const name = document.createElement('h3')
const username = document.createElement('p')
const location = document.createElement('p')
const profilePage = document.createElement('p')
const profilePageAddress = document.createElement('a')
const followers = document.createElement('p')
const following = document.createElement('p')
const bio = document.createElement('p')
const profileDiv = document.createElement('div')

cardInfo.classList.add('card-info')
name.classList.add('name')
username.classList.add('username')
all.classList.add('card')

image.src = arr.data.avatar_url
name.textContent = arr.data.name
username.textContent = arr.data.login
location.textContent = `Location : ${arr.data.location}`
profilePage.textContent = `Profile: `
profilePageAddress.setAttribute('href', arr.data.html_url) 
profilePageAddress.textContent = arr.data.html_url
followers.textContent = `Followers : ${arr.data.followers}`
following.textContent = `Following : ${arr.data.following}`
bio.textContent = `Bio ${arr.data.bio}`

all.appendChild(image)
all.appendChild(cardInfo)
cardInfo.appendChild(name)
cardInfo.appendChild(username)
cardInfo.appendChild(location)
cardInfo.appendChild(profilePage)
profilePage.appendChild(profileDiv)
profileDiv.appendChild(profilePageAddress)
cardInfo.appendChild(followers)
cardInfo.appendChild(following)
cardInfo.appendChild(bio)

return all
}

