/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios' 

axios.get('https://api.github.com/users/gvicas17')
.then(response =>{
  const responseData = response.data
  profileMaker(responseData)
}) 
.catch(err =>{
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

const followersArray = ['kristapants','mattcanavan', 'Christopher-Barrett', 'OreoCoDev', 'CStank89']

followersArray.forEach (users => {
axios.get(`https://api.github.com/users/${users}`)
.then(response =>{
  const responseData = response.data
  profileMaker(responseData)
})
.catch(err =>{
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

function profileMaker (object){

  // Creating Elements
  const profileCard = document.createElement('div')
  const profileImage = document.createElement('img')
  const profileInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileLink = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
 
  //Element content

  profileImage.src = object.avatar_url
  name.textContent = object.name
  username.textContent = object.login
  location.textContent = `Location: ${object.location}`
  profileLink.href = object.html_url
  profileLink.textContent = object.html_url
  profile.textContent = `Profile:`
  followers.textContent = `Followers: ${object.followers}`
  following.textContent = `Following: ${object.following}`
  bio.textContent = `Bio: ${object.bio}`

  // Adding Classes
  
  profileCard.classList.add('card')
  profileInfo.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')

  // Heirarchy
  
  profileCard.appendChild(profileImage)
  profileCard.appendChild(profileInfo)
  profileInfo.appendChild(name)
  profileInfo.appendChild(username)
  profileInfo.appendChild(location)
  profileInfo.appendChild(profile)
  profileInfo.appendChild(followers)
  profileInfo.appendChild(following)
  profileInfo.appendChild(bio)
  profile.appendChild(profileLink)

 const entryPoint = document.querySelector('.cards')
 entryPoint.appendChild(profileCard)
  return entryPoint
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
