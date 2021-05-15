/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
 import axios from 'axios'

//axios.get("https://api.github.com/users/Vocausey")
//.then((futureData) => { // when the result turns into something real, do this
  // future code to run when the data actually arrives
  // write code here as if you have the data
   //console.log(futureData)

 // console.log('2. here is your future data! ', futureData)
  // inside here is where we'll make our components

//}) 
//.catch((drama) => { 
  //console.log('oh no! there was an error')
//})
///.finally(() => {
 // console.log('I always run when the promise is fulfilled')
//})

//console.log('3. hurray, we got our data with axios!')
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

//const followersArray = ['vocausey', 'stu'];

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
const followersArray = ['vocausey','Stu','cynthia-coronado','andybolos','matt22881','tetondan','dustinmyers','justsml','luishrd','bigknell'];
 
followersArray.forEach(name =>
  {
  axios.get(`https://api.github.com/users/${name}`)
.then(res => { 
  makeGithubCard(res.data)
      })
 
 .catch((drama) => { 
       

     })
  }
)




function makeGithubCard(gitcard){

const cardEntryPoint = document.querySelector(".cards"); 
const card = document.createElement('div')
card.classList.add('card')
const image = document.createElement('img')
const cardInfo = document.createElement('div')
cardInfo.classList.add('card-info')
const header = document.createElement(`h3`); 
header.textContent =('name')
const userName = document.createElement(`p`)
userName.textContent = 'username'
const location = document.createElement("p"); 
const profile = document.createElement('p')
const link = document.createElement(`a`)
const followers = document.createElement("p"); 
const following = document.createElement('p')
const bio = document.createElement(`p`); 






cardEntryPoint.appendChild(card)
card.appendChild(image)
  card.appendChild(cardInfo)
  cardInfo.appendChild(header)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(link)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

image.setAttribute(`src`, gitcard.avatar_url)
header.textContent = gitcard.login;
userName.textContent = gitcard.name;  
location.textContent = gitcard.location
profile.textContent = 'Profile:'  + link
link.setAttribute('href', gitcard.html_url)
link.textContent = 'URL'
followers.textContent = 'Followers:' + gitcard.followers
following.textContent = 'Following:' + gitcard.following
bio.textContent ='Bio:' + gitcard.bio

 
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
