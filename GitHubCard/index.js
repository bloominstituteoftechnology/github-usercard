import axios from 'axios'
// const { default: axios } = require("axios");



/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/ackerie")
.then( response => {
  let card = document.querySelector('.cards')
  card.appendChild(newInfo(response.data))})
.catch(err => {console.log('error:', err)})


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

followersArray.forEach(user => {
  axios.get('https://api.github.com/users/' + user)
  .then(response => {
    const card = document.querySelector('.cards')
    card.appendChild(newInfo(response.data))})
  
.catch(err => {console.log('error:', err)})
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>'Location:' {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/



function newInfo (obj){

  const newDiv = document.createElement('div'),
        newImg = document.createElement('img'), 
        newDiv1 = document.createElement('div'),
        newH3 = document.createElement('h3'),
        newP0 = document.createElement('p'),
        newP1 = document.createElement('p'),
        newP2 = document.createElement('p'),
        newP3 = document.createElement('p'),
        newP4 = document.createElement('p'),
        newP5 = document.createElement('p'),
        newA = document.createElement('a')

        newDiv.appendChild(newImg)
        newDiv.appendChild(newDiv1)
        newDiv1.appendChild(newP0)
        newDiv1.appendChild(newP1)
        newDiv1.appendChild(newP2)
        newDiv1.appendChild(newP3)
        newDiv1.appendChild(newP4)
        newDiv1.appendChild(newP5)
        newP2.appendChild(newA)

        
        
        newH3.textContent = obj.name
        newP0.textContent = obj.login
        newP1.textContent = 'Location: ' + obj.location
        newP2.textContent = 'Profile: ' + obj.html_url 
        newP3.textContent = 'Followers: ' + obj.followers
        newP4.textContent = 'Following: ' + obj.following
        newP5.textContent = 'Bio: ' + obj.bio
        newImg.src = obj.avatar_url
        newA.href = obj.html_url
      
       

        newDiv.classList.add('card')
        newDiv1.classList.add('card-info')
        newH3.classList.add('name')
        newP0.classList.add('username')
       

        

return newDiv 
        
}



// /*
//   List of LS Instructors Github username's:
//     tetondan
//     dustinmyers
//     justsml
//     luishrd
//     bigknell
// */
