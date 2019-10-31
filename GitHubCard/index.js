/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// let data = axios.get('https://api.github.com/users/zimashima')

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

// let myData = {
//   "login": "zimashima",
//   "id": 52222646,
//   "node_id": "MDQ6VXNlcjUyMjIyNjQ2",
//   "avatar_url": "https://avatars3.githubusercontent.com/u/52222646?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/zimashima",
//   "html_url": "https://github.com/zimashima",
//   "followers_url": "https://api.github.com/users/zimashima/followers",
//   "following_url": "https://api.github.com/users/zimashima/following{/other_user}",
//   "gists_url": "https://api.github.com/users/zimashima/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/zimashima/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/zimashima/subscriptions",
//   "organizations_url": "https://api.github.com/users/zimashima/orgs",
//   "repos_url": "https://api.github.com/users/zimashima/repos",
//   "events_url": "https://api.github.com/users/zimashima/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/zimashima/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Mashima Button",
//   "company": null,
//   "blog": "",
//   "location": "Florida, USA",
//   "email": null,
//   "hireable": null,
//   "bio": "A Florida woman studying Web Dev at Lambda School",
//   "public_repos": 20,
//   "public_gists": 0,
//   "followers": 17,
//   "following": 18,
//   "created_at": "2019-06-25T23:03:16Z",
//   "updated_at": "2019-10-31T19:01:09Z"
// }

// const fArray = [{
//   "login": "crutledgedev",
//   "id": 55863225,
//   "node_id": "MDQ6VXNlcjU1ODYzMjI1",
//   "avatar_url": "https://avatars1.githubusercontent.com/u/55863225?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/crutledgedev",
//   "html_url": "https://github.com/crutledgedev",
//   "followers_url": "https://api.github.com/users/crutledgedev/followers",
//   "following_url": "https://api.github.com/users/crutledgedev/following{/other_user}",
//   "gists_url": "https://api.github.com/users/crutledgedev/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/crutledgedev/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/crutledgedev/subscriptions",
//   "organizations_url": "https://api.github.com/users/crutledgedev/orgs",
//   "repos_url": "https://api.github.com/users/crutledgedev/repos",
//   "events_url": "https://api.github.com/users/crutledgedev/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/crutledgedev/received_events",
//   "type": "User",
//   "site_admin": false
// },
// {
//   "login": "AJWD92",
//   "id": 42694444,
//   "node_id": "MDQ6VXNlcjQyNjk0NDQ0",
//   "avatar_url": "https://avatars1.githubusercontent.com/u/42694444?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/AJWD92",
//   "html_url": "https://github.com/AJWD92",
//   "followers_url": "https://api.github.com/users/AJWD92/followers",
//   "following_url": "https://api.github.com/users/AJWD92/following{/other_user}",
//   "gists_url": "https://api.github.com/users/AJWD92/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/AJWD92/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/AJWD92/subscriptions",
//   "organizations_url": "https://api.github.com/users/AJWD92/orgs",
//   "repos_url": "https://api.github.com/users/AJWD92/repos",
//   "events_url": "https://api.github.com/users/AJWD92/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/AJWD92/received_events",
//   "type": "User",
//   "site_admin": false
// },
// {
//   "login": "WalterTheCodeGuy",
//   "id": 1248796,
//   "node_id": "MDQ6VXNlcjEyNDg3OTY=",
//   "avatar_url": "https://avatars1.githubusercontent.com/u/1248796?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/WalterTheCodeGuy",
//   "html_url": "https://github.com/WalterTheCodeGuy",
//   "followers_url": "https://api.github.com/users/WalterTheCodeGuy/followers",
//   "following_url": "https://api.github.com/users/WalterTheCodeGuy/following{/other_user}",
//   "gists_url": "https://api.github.com/users/WalterTheCodeGuy/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/WalterTheCodeGuy/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/WalterTheCodeGuy/subscriptions",
//   "organizations_url": "https://api.github.com/users/WalterTheCodeGuy/orgs",
//   "repos_url": "https://api.github.com/users/WalterTheCodeGuy/repos",
//   "events_url": "https://api.github.com/users/WalterTheCodeGuy/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/WalterTheCodeGuy/received_events",
//   "type": "User",
//   "site_admin": false
// },
// {
//   "login": "Courtland-Bourgeois",
//   "id": 54822530,
//   "node_id": "MDQ6VXNlcjU0ODIyNTMw",
//   "avatar_url": "https://avatars0.githubusercontent.com/u/54822530?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/Courtland-Bourgeois",
//   "html_url": "https://github.com/Courtland-Bourgeois",
//   "followers_url": "https://api.github.com/users/Courtland-Bourgeois/followers",
//   "following_url": "https://api.github.com/users/Courtland-Bourgeois/following{/other_user}",
//   "gists_url": "https://api.github.com/users/Courtland-Bourgeois/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/Courtland-Bourgeois/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/Courtland-Bourgeois/subscriptions",
//   "organizations_url": "https://api.github.com/users/Courtland-Bourgeois/orgs",
//   "repos_url": "https://api.github.com/users/Courtland-Bourgeois/repos",
//   "events_url": "https://api.github.com/users/Courtland-Bourgeois/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/Courtland-Bourgeois/received_events",
//   "type": "User",
//   "site_admin": false
// },{
//   "login": "ktjhan",
//   "id": 7260523,
//   "node_id": "MDQ6VXNlcjcyNjA1MjM=",
//   "avatar_url": "https://avatars3.githubusercontent.com/u/7260523?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/ktjhan",
//   "html_url": "https://github.com/ktjhan",
//   "followers_url": "https://api.github.com/users/ktjhan/followers",
//   "following_url": "https://api.github.com/users/ktjhan/following{/other_user}",
//   "gists_url": "https://api.github.com/users/ktjhan/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/ktjhan/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/ktjhan/subscriptions",
//   "organizations_url": "https://api.github.com/users/ktjhan/orgs",
//   "repos_url": "https://api.github.com/users/ktjhan/repos",
//   "events_url": "https://api.github.com/users/ktjhan/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/ktjhan/received_events",
//   "type": "User",
//   "site_admin": false
// }];


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


function cardCreator(fArray){
  
  //definition

  const aCard = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const theName = document.createElement('h3')
  const theUsername = document.createElement('p')
  const theLocation = document.createElement('p')
  const theProfile = document.createElement('p')
  const linkToProfile = document.createElement('a')
  const followerCount = document.createElement('p')
  const followingCount = document.createElement('p')
  const userBio = document.createElement('p')

  // structure
  aCard.appendChild(image)
  aCard.appendChild(cardInfo)

  cardInfo.appendChild(theName)
  cardInfo.appendChild(theUsername)
  cardInfo.appendChild(theLocation)
  cardInfo.appendChild(theProfile)
  cardInfo.appendChild(followerCount)
  cardInfo.appendChild(followingCount)
  cardInfo.appendChild(userBio)

  theProfile.appendChild(linkToProfile)

  //class

  
  aCard.classList.add('card')
  cardInfo.classList.add('card-info')
  theUsername.classList.add('username') 
  theName.classList.add('name')

  //content
  image.src = fArray.avatar_url
  theName.textContent = fArray.name
  theUsername.textContent = fArray.login
  theLocation.textContent = `Location: ${fArray.location}`
  linkToProfile.textContent = `Profile: ${fArray.html_url}`
  linkToProfile.setAttribute('href', fArray.html_url)
  followerCount.textContent = `Followers Count: ${fArray.followers}`
  followingCount.textContent = `Following Count: ${fArray.following}`
  userBio.textContent = `Bio: ${fArray.bio}`

  return aCard
}

axios.get('https://api.github.com/users/zimashima')
  .then( response=>{
    document.querySelector('.cards').appendChild(cardCreator(response.data))
  })



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
