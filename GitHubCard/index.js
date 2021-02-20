import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/Alieze-Ali')
//data is a placeholder for API
.then(data => {
  console.log(data.data)
  //grabbing cards class here
  const cards = document.querySelector('.cards')
  //append function to cards
  cards.appendChild(cardMaker(data.data))
}) 
/* 
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards (need to grab class of cards on line 15 of HTML)
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

const followersArray = [ 'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell' ];

  // looping thru Array with forEach
  followersArray.forEach(item => {
  axios.get('https://api.github.com/users/' + item)
    .then(data => {
    console.log(data.data)
    const cards = document.querySelector('.cards')
    cards.appendChild(cardMaker(data.data))
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

function cardMaker(obj){
  //creating elements
  const div = document.createElement('div')
  const img = document.createElement('img')
  const div2 = document.createElement('div')
  const h3 = document.createElement('h3')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const p4 = document.createElement('p')
  const p5 = document.createElement('p')
  const p6 = document.createElement('p')
  const a = document.createElement('a')

  // Create Hierarchy
  div.appendChild(img)
  div.appendChild(div2)
  div2.appendChild(h3)
  div2.appendChild(p1)
  div2.appendChild(p2)
  div2.appendChild(p3)
  div2.appendChild(p4)
  div2.appendChild(p5)
  div2.appendChild(p6)
  p3.appendChild(a)

  // Add Classes
  div.classList.add('card')
  div2.classList.add('card-info')
  h3.classList.add('name')
  p1.classList.add('username')

  // Add Text
  h3.textContent = obj.name
  p1.textContent = obj.login

  // must hardcode in Location
  p2.textContent = "Location: " + obj.location
  p3.textContent = "Profile: " 
  a.textContent = obj.html_url
  p4.textContent = "Followers: " + obj.followers
  p5.textContent = "Following: " + obj.following
  p6.textContent = "Bio: " + obj.bio

  // Add Attributes to img & a tag
  // Reach into data and grabbing URL by using parameter
  img.src = obj.avatar_url
  a.href = obj.html_url


  //return all the code in the function - its in the first div you created bc we appended everything to the div
  return div
  
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


//Questions
// ask about Profile link 
// ask about card order