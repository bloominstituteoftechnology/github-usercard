import axios from 'axios';

/*	/*
  STEP 1: using axios, send a GET request to the following URL	
STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):	    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>	    https://api.github.com/users/<your name>
*/	*/
const gitApi = "https://api.github.com/users/"


axios
    .get(`${gitApi}kyleswillard`) //Returns the user information from the Github API - COMPLETE
      .then(res => {
        // console.log(res)
        createCard(res)
    axios
      .get(res.data.followers_url)
      .then(res => {
        res.data.forEach(e => {
          followersArray.push(e.login)
        })
        addFriends();
      })
      .catch(err => {
        console.log(err)
      })
    })
/*	/*
  STEP 2: Inspect and study the data coming back, this is YOUR	  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this	    github info! You will need to understand the structure of this
    data in order to use it to build your component function	    data in order to use it to build your component function
    DATA:
    {
  "login": "Kyleswillard",
  "id": 68755034,
  "node_id": "MDQ6VXNlcjY4NzU1MDM0",
  "avatar_url": "https://avatars1.githubusercontent.com/u/68755034?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Kyleswillard",
  "html_url": "https://github.com/Kyleswillard",
  "followers_url": "https://api.github.com/users/Kyleswillard/followers",
  "following_url": "https://api.github.com/users/Kyleswillard/following{/other_user}",
  "gists_url": "https://api.github.com/users/Kyleswillard/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Kyleswillard/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Kyleswillard/subscriptions",
  "organizations_url": "https://api.github.com/users/Kyleswillard/orgs",
  "repos_url": "https://api.github.com/users/Kyleswillard/repos",
  "events_url": "https://api.github.com/users/Kyleswillard/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Kyleswillard/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Kyle Willard",
  "company": null,
  "blog": "kylewillard.com",
  "location": "Oregon",
  "email": null,
  "hireable": null,
  "bio": "Full Stack Web Developer - Lambda School Student",
  "twitter_username": null,
  "public_repos": 44,
  "public_gists": 1,
  "followers": 3,
  "following": 8,
  "created_at": "2020-07-24T19:43:30Z",
  "updated_at": "2020-10-27T21:45:59Z"
}
    Skip to STEP 3.	    Skip to STEP 3.
*/	*/


/*	/*
  STEP 4: Pass the data received from Github into your function,	  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards	    and append the returned markup to the DOM as a child of .cards
    COMPLETE
*/	*/


/*	/*
  STEP 5: Now that you have your own card getting added to the DOM, either	  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,	    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the	    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as	    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.	    Individual strings to the friendsArray below.
    Using that array, iterate over it, requesting data for each user, creating a new card for each	    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.	    user, and adding that card to the DOM.
*/	*/


const followersArray = [];	const followersArray = [];


const addFriends = () => {
  followersArray.forEach(e => {
    axios
      .get(`${gitApi}${e}`)
      .then(res => {
        createCard(res)
     })
      .catch(err => console.log(err))
  })
}

/*	/*
  STEP 3: Create a function that accepts a single object as its only argument.	  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:	    Using DOM methods and properties, create and return the following markup:
    <div class="card">	    <div class="card"> => Added
      <img src={image url of user} />	      <img src={image url of user} /> => Added
      <div class="card-info">	      <div class="card-info">
        <h3 class="name">{users name}</h3>	        <h3 class="name">{users name}</h3> => Added
        <p class="username">{users user name}</p>	        <p class="username">{users user name}</p> => Added
        <p>Location: {users location}</p>	        <p>Location: {users location}</p> => Added
        <p>Profile:	        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>	          <a href={address to users github page}>{address to users github page}</a>
        </p>	        </p> => Added
        <p>Followers: {users followers count}</p>	        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>	        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>	        <p>Bio: {users bio}</p>
      </div>	      </div>
    </div>	    </div>
*/	*/
const createCard = user => {
  let ghUser = user.data // Establish var for user.data
  let elements = [] // elements => append each card to DOM
  let infoElements = [] // infoElements => attach info to .Cards



  let card = document.createElement('div') // Parent
  card.classList.add('card')


  let pic = document.createElement('img')
  pic.src = ghUser.avatar_url
  elements.push(pic)

  let cardInfo = document.createElement('div') // 2nd Parent
  cardInfo.classList.add('card-info')

  let h3 = document.createElement('h3')
  h3.classList.add('name')
  h3.textContent = ghUser.name;
  infoElements.push(h3)

  let username = document.createElement('p')
  username.classList.add('username')
  username.textContent = ghUser.username
  infoElements.push(username)

  let loc = document.createElement('p')
  loc.textContent = ghUser.location
  infoElements.push(loc)

  let profile = document.createElement('p')
  profile.textContent = "Profile: "
  infoElements.push(profile)

  let url = document.createElement('a')
  url.href = ghUser.url
  url.textContent = ghUser.url
  profile.appendChild(url)
  infoElements.push(url)

  let followers = document.createElement('p')
  followers.textContent = 'Followers: ' + ghUser.followers // DOUBLE CHECK FUNCTIONALITY ON THIS LINE!!
  infoElements.push(followers)

  let following = document.createElement('p')
  following.textContent = 'Following: ' + ghUser.following // DOUBLE CHECK FUNCTIONALITY ON THIS LINE!!
  infoElements.push(following)

  let bio = document.createElement('p')
  bio.textContent = ghUser.bio
  infoElements.push(bio)

  infoElements.forEach(e => {
    cardInfo.appendChild(e)
  })

  elements.push(cardInfo)

  let cards = document.querySelector('.cards')

  elements.forEach(e => {
    card.appendChild(e)
  })
  cards.appendChild(card)



}



/*	/*
  List of LS Instructors Github username's:	  List of LS Instructors Github username's:
@@ -57,4 +196,4 @@ const followersArray = [];
    justsml	    justsml
    luishrd	    luishrd
    bigknell	    bigknell
*/	*/ 
  32  README.md 
@@ -22,39 +22,39 @@ In this project we are going to be accessing the GitHub API and building a socia