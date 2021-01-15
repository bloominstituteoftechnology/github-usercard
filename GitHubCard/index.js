import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
    avatar_url:
    followers_url:
    followers:
    following:
    following_url:
    name:
    public_repos:
    url:


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

const followersArray = ["monicascz", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

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

const cardsDivLoc= document.querySelector('.cards') // from index.html

followersArray.forEach((username)=>{
axios.get(`https://api.github.com/users/${username}`)
.then((response)=>{
  const myData = response.data
  cardsDivLoc.appendChild(githubCardMaker(myData))
})
.catch((error)=>{
  console.log(error)
});
});




function githubCardMaker(object){

  
  const card = document.createElement('div')
  card.classList.add('card')

  const userImg = document.createElement('img')
    userImg.src = object.avatar_url;
  
  const cardInfo = document.createElement('div')
    cardInfo.classList.add('card-info')

  const titleH3 = document.createElement('h3')
    titleH3.classList.add('name')
    titleH3.textContent= object.name;

  const usernameP = document.createElement('p')
    usernameP.classList.add('username')
    usernameP.textContent= object.login;
  
  const locationP = document.createElement('p')
    locationP.textContent = `Location: ${object.location}`;
  
  const profileP = document.createElement('p')
    profileP.textContent ='Profile:'
  
  const aTag = document.createElement('a')
    aTag.href= object.html_url;
    aTag.textContent = object.html_url;

  const followersP = document.createElement('p')
    followersP.textContent= `Followers: ${object.followers}`

  const followingP = document.createElement('p')
    followingP.textContent= `Followers: ${object.following}`
  
  const bioP = document.createElement('p')
    bioP.textContent = `Bio: ${object.bio}`

card.appendChild(userImg)
card.appendChild(cardInfo)
cardInfo.appendChild(titleH3)
cardInfo.appendChild(usernameP)
cardInfo.appendChild(locationP)
cardInfo.appendChild(profileP)
profileP.appendChild(aTag)
cardInfo.appendChild(followersP)
cardInfo.appendChild(followingP)
cardInfo.appendChild(bioP)
console.log(card)

return card;
}


// axios.get("https://api.github.com/users/monicascz")
// .then((response)=>{
//   const myData = response.data
//   return myData;
// })
// .catch((error)=>{
//   console.log(error)
// })

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
