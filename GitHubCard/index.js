/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// const axios = require('axios').default
function gitCard(username){axios.get(`https://api.github.com/users/${username}` )
    .then(data=>{
      const userData = data.data
      console.log(userData)
      const newcard = createCard({
        userImg:userData.avatar_url,
        userName:userData.login,
        usersUserName:userData.login,
        userLocation:userData.location,
        addToGit: userData.url,
        followerCount:userData.followers,
        followingCount:userData.following
      })
      const container = document.querySelector('.container')
      container.appendChild(newcard)
    })}

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
function createElement(element,classlist){
  const item  = document.createElement(element)
  classlist.forEach((className) =>{
    item.classList.add(className)

  })
  
  return item
}
function createCard ({userImg,userName,usersUserName,userLocation,addToGit,followerCount,followingCount,userBio}){
  const card = createElement('div',['name'])
  const uImg = createElement('img',[])
  const cardInfo = createElement('div',['card-info'])
  const name = createElement('h3',['name'])
  const uUName = createElement('p',['username'])
  const location = createElement('p',[])
  const profile = createElement('p',[])
  const address = createElement('a',[])
  const followers = createElement('p',[])
  const following = createElement('p',[])
  const bio = createElement('p',[])
  


  uImg.setAttribute('src',userImg)
  name.textContent=userName
  uUName.textContent = usersUserName
  location.textContent =userLocation
  profile.textContent='Profile: '
  address.setAttribute('href', addToGit)
  followers.textContent = followerCount
  following.textContent = followingCount
  bio.textContent = userBio


  card.appendChild(uImg)
  card.appendChild(cardInfo)

 cardInfo.appendChild(name)
 cardInfo.appendChild(uUName)
 cardInfo.appendChild(location)
 cardInfo.appendChild(profile)
 profile.appendChild(address)
 cardInfo.appendChild(followers)
 cardInfo.appendChild(following)
 cardInfo.appendChild(bio)




 return card


  


  
}


let userslist =['hobsond','tetondan',
'dustinmyers',
'justsml',
'luishrd',
'bigknell']

userslist.map(e=>{
  gitCard(e)
})

/* List of LS Instructors Github username's: 
 
*/
