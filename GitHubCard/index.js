import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
//axios.get('https://api.github.com/users/Peter-Mhina')
//.then((response) =>{
 // const profiles = response.data;
  //cardsDivs.append(githubMaker(profiles))
//})
axios.get('https://api.github.com/users/pmhina1990')
  .then((response) =>{
    const users = response.data;
    cardsDiv.appendChild(githubMaker(users))
    

    })
    const cardsDiv = document.querySelector('.cards')

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


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']
followersArray.forEach (user =>{
  axios.get(`https://api.github.com/users/${user}`)
  .then((response) =>{
    const users = response.data;
    cardsDiv.appendChild(githubMaker(users))
    

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

  



function githubMaker(obj){
  const userCard = document.createElement('div')
  const userImg = document.createElement('img')
  
  const cardInfo = document.createElement('div')
  const userName = document.createElement('h3')
  const usersUserName = document.createElement('p')
  
  const location = document.createElement('p')
  const profileAddress = document.createElement('p')
  const followers = document.createElement('p')
  
  const following = document.createElement('p') 
  const bio = document.createElement('p')
  const profileLink = document.createElement('a')

  userCard.append(userImg)
  userCard.append(cardInfo)
  cardInfo.append(userName)
  
  cardInfo.append(usersUserName)
  cardInfo.append(location);
  cardInfo.append(profileAddress)
 
  profileAddress.append(profileLink)
  cardInfo.append(followers)
  cardInfo.append(following)
  cardInfo.append(bio)

  userCard.classList.add('card')
  cardInfo.classList.add('card-info')
  
  
  userName.classList.add('name')
  usersUserName.classList.add('username')
  profileLink.setAttribute('href',obj.html_url )
  profileLink.textContent = obj.html_url
  
  followers.textContent = obj.followers
  following.textContent = obj.following
  
  userImg.src = obj.avatar_url
  userName.textContent = obj.name
  usersUserName.textContent = obj.login
  
  location.textContent = obj.location
  
  bio.textContent = obj.bio


  return userCard
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
