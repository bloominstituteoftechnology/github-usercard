import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/tbauer1979') 
.then(response=>{ 
const obj = response.data 
const cards=document.querySelector('.cards') 
cards.appendChild(makeGithubCard(obj)) 
}) 
.catch(error=>{ 
console.log(error) 
}) 
/* 


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

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell']
console.log("test")

followersArray.forEach(follower=>{ 
axios.get(`https://api.github.com/users/${follower}`) 
.then(info=>{ 
const cards =document.querySelector('.cards') 
cards.appendChild(makeGithubCard(info.data)) 
}) 
.catch(error=>{ 
 console.log(error) 
}) 
}) 
 
  


function makeGithubCard (object) {
  const cardDiv = document.createElement('div')
  const cardIMG = document.createElement('img')
  const infoDiv = document.createElement('div')
  const headerThree = document.createElement('h3')
  const firstP = document.createElement('p')
  const secondP = document.createElement('p')
  const thirdP = document.createElement('p')
  const firstLink = document.createElement('a')
  const fourthP = document.createElement('p')
  const fifthP = document.createElement('p')
  const sixthP = document.createElement('p')

  cardDiv.classList.add("card")
  infoDiv.classList.add("card-info")
  headerThree.classList.add("name")
  firstP.classList.add("username")

  cardDiv.appendChild(cardIMG)
  cardDiv.appendChild(infoDiv)
  infoDiv.appendChild(headerThree)
  infoDiv.appendChild(firstP)
  infoDiv.appendChild(secondP)
  infoDiv.appendChild(thirdP)
  thirdP.appendChild(firstLink)
  infoDiv.appendChild(fourthP)
  infoDiv.appendChild(fifthP)
  infoDiv.appendChild(sixthP)

  cardIMG.src = object['avatar_url']
  headerThree.textContent = object.name
  firstP.textContent = object.login
  secondP.textContent = object.location
  firstLink.setAttribute('href',object.url)
  firstLink.textContent = object.url
  fourthP.textContent = `Followers: ${object.followers}`
  fifthP.textContent = `Following: ${object.following}`
  sixthP.textContent = object.bio

  return cardDiv
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
