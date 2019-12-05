/* Step 1: using axios, send a GET request to the following URL 
          (replacing the palceholder with your Github name):
*/
axios.get('https://api.github.com/users/wesley-moody')
  .then (data => {
    console.log('data: ', data)
    const myInfo = data.data;
    console.log('UserInfo: ', myInfo)


    // Step 4

    const cards = document.querySelector('.cards')
    const cardInfo = cardCreator(myInfo)
    cards.appendChild(cardInfo)
  })




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

const followersArray = [
  {
    "login": "lisabpink",
    "id": 53187245,
    "node_id": "MDQ6VXNlcjUzMTg3MjQ1",
    "avatar_url": "https://avatars1.githubusercontent.com/u/53187245?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lisabpink",
    "html_url": "https://github.com/lisabpink",
    "followers_url": "https://api.github.com/users/lisabpink/followers",
    "following_url": "https://api.github.com/users/lisabpink/following{/other_user}",
    "gists_url": "https://api.github.com/users/lisabpink/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lisabpink/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lisabpink/subscriptions",
    "organizations_url": "https://api.github.com/users/lisabpink/orgs",
    "repos_url": "https://api.github.com/users/lisabpink/repos",
    "events_url": "https://api.github.com/users/lisabpink/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lisabpink/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "jDanielDetes",
    "id": 53785351,
    "node_id": "MDQ6VXNlcjUzNzg1MzUx",
    "avatar_url": "https://avatars2.githubusercontent.com/u/53785351?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jDanielDetes",
    "html_url": "https://github.com/jDanielDetes",
    "followers_url": "https://api.github.com/users/jDanielDetes/followers",
    "following_url": "https://api.github.com/users/jDanielDetes/following{/other_user}",
    "gists_url": "https://api.github.com/users/jDanielDetes/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jDanielDetes/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jDanielDetes/subscriptions",
    "organizations_url": "https://api.github.com/users/jDanielDetes/orgs",
    "repos_url": "https://api.github.com/users/jDanielDetes/repos",
    "events_url": "https://api.github.com/users/jDanielDetes/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jDanielDetes/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Ramonta-Lee",
    "id": 56370633,
    "node_id": "MDQ6VXNlcjU2MzcwNjMz",
    "avatar_url": "https://avatars1.githubusercontent.com/u/56370633?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Ramonta-Lee",
    "html_url": "https://github.com/Ramonta-Lee",
    "followers_url": "https://api.github.com/users/Ramonta-Lee/followers",
    "following_url": "https://api.github.com/users/Ramonta-Lee/following{/other_user}",
    "gists_url": "https://api.github.com/users/Ramonta-Lee/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Ramonta-Lee/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Ramonta-Lee/subscriptions",
    "organizations_url": "https://api.github.com/users/Ramonta-Lee/orgs",
    "repos_url": "https://api.github.com/users/Ramonta-Lee/repos",
    "events_url": "https://api.github.com/users/Ramonta-Lee/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Ramonta-Lee/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "WindTalker22",
    "id": 25161767,
    "node_id": "MDQ6VXNlcjI1MTYxNzY3",
    "avatar_url": "https://avatars0.githubusercontent.com/u/25161767?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/WindTalker22",
    "html_url": "https://github.com/WindTalker22",
    "followers_url": "https://api.github.com/users/WindTalker22/followers",
    "following_url": "https://api.github.com/users/WindTalker22/following{/other_user}",
    "gists_url": "https://api.github.com/users/WindTalker22/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/WindTalker22/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/WindTalker22/subscriptions",
    "organizations_url": "https://api.github.com/users/WindTalker22/orgs",
    "repos_url": "https://api.github.com/users/WindTalker22/repos",
    "events_url": "https://api.github.com/users/WindTalker22/events{/privacy}",
    "received_events_url": "https://api.github.com/users/WindTalker22/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "jeffrey1200",
    "id": 55589472,
    "node_id": "MDQ6VXNlcjU1NTg5NDcy",
    "avatar_url": "https://avatars2.githubusercontent.com/u/55589472?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jeffrey1200",
    "html_url": "https://github.com/jeffrey1200",
    "followers_url": "https://api.github.com/users/jeffrey1200/followers",
    "following_url": "https://api.github.com/users/jeffrey1200/following{/other_user}",
    "gists_url": "https://api.github.com/users/jeffrey1200/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jeffrey1200/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jeffrey1200/subscriptions",
    "organizations_url": "https://api.github.com/users/jeffrey1200/orgs",
    "repos_url": "https://api.github.com/users/jeffrey1200/repos",
    "events_url": "https://api.github.com/users/jeffrey1200/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jeffrey1200/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "jleahwolff",
    "id": 54365640,
    "node_id": "MDQ6VXNlcjU0MzY1NjQw",
    "avatar_url": "https://avatars3.githubusercontent.com/u/54365640?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jleahwolff",
    "html_url": "https://github.com/jleahwolff",
    "followers_url": "https://api.github.com/users/jleahwolff/followers",
    "following_url": "https://api.github.com/users/jleahwolff/following{/other_user}",
    "gists_url": "https://api.github.com/users/jleahwolff/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jleahwolff/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jleahwolff/subscriptions",
    "organizations_url": "https://api.github.com/users/jleahwolff/orgs",
    "repos_url": "https://api.github.com/users/jleahwolff/repos",
    "events_url": "https://api.github.com/users/jleahwolff/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jleahwolff/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Jrive204",
    "id": 56930065,
    "node_id": "MDQ6VXNlcjU2OTMwMDY1",
    "avatar_url": "https://avatars1.githubusercontent.com/u/56930065?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Jrive204",
    "html_url": "https://github.com/Jrive204",
    "followers_url": "https://api.github.com/users/Jrive204/followers",
    "following_url": "https://api.github.com/users/Jrive204/following{/other_user}",
    "gists_url": "https://api.github.com/users/Jrive204/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Jrive204/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Jrive204/subscriptions",
    "organizations_url": "https://api.github.com/users/Jrive204/orgs",
    "repos_url": "https://api.github.com/users/Jrive204/repos",
    "events_url": "https://api.github.com/users/Jrive204/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Jrive204/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "aalvinlin",
    "id": 57117545,
    "node_id": "MDQ6VXNlcjU3MTE3NTQ1",
    "avatar_url": "https://avatars2.githubusercontent.com/u/57117545?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/aalvinlin",
    "html_url": "https://github.com/aalvinlin",
    "followers_url": "https://api.github.com/users/aalvinlin/followers",
    "following_url": "https://api.github.com/users/aalvinlin/following{/other_user}",
    "gists_url": "https://api.github.com/users/aalvinlin/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/aalvinlin/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/aalvinlin/subscriptions",
    "organizations_url": "https://api.github.com/users/aalvinlin/orgs",
    "repos_url": "https://api.github.com/users/aalvinlin/repos",
    "events_url": "https://api.github.com/users/aalvinlin/events{/privacy}",
    "received_events_url": "https://api.github.com/users/aalvinlin/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Judson00",
    "id": 44986923,
    "node_id": "MDQ6VXNlcjQ0OTg2OTIz",
    "avatar_url": "https://avatars0.githubusercontent.com/u/44986923?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Judson00",
    "html_url": "https://github.com/Judson00",
    "followers_url": "https://api.github.com/users/Judson00/followers",
    "following_url": "https://api.github.com/users/Judson00/following{/other_user}",
    "gists_url": "https://api.github.com/users/Judson00/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Judson00/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Judson00/subscriptions",
    "organizations_url": "https://api.github.com/users/Judson00/orgs",
    "repos_url": "https://api.github.com/users/Judson00/repos",
    "events_url": "https://api.github.com/users/Judson00/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Judson00/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "ljh-c",
    "id": 57099181,
    "node_id": "MDQ6VXNlcjU3MDk5MTgx",
    "avatar_url": "https://avatars2.githubusercontent.com/u/57099181?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ljh-c",
    "html_url": "https://github.com/ljh-c",
    "followers_url": "https://api.github.com/users/ljh-c/followers",
    "following_url": "https://api.github.com/users/ljh-c/following{/other_user}",
    "gists_url": "https://api.github.com/users/ljh-c/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ljh-c/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ljh-c/subscriptions",
    "organizations_url": "https://api.github.com/users/ljh-c/orgs",
    "repos_url": "https://api.github.com/users/ljh-c/repos",
    "events_url": "https://api.github.com/users/ljh-c/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ljh-c/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "CAM603",
    "id": 56090503,
    "node_id": "MDQ6VXNlcjU2MDkwNTAz",
    "avatar_url": "https://avatars3.githubusercontent.com/u/56090503?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/CAM603",
    "html_url": "https://github.com/CAM603",
    "followers_url": "https://api.github.com/users/CAM603/followers",
    "following_url": "https://api.github.com/users/CAM603/following{/other_user}",
    "gists_url": "https://api.github.com/users/CAM603/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/CAM603/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/CAM603/subscriptions",
    "organizations_url": "https://api.github.com/users/CAM603/orgs",
    "repos_url": "https://api.github.com/users/CAM603/repos",
    "events_url": "https://api.github.com/users/CAM603/events{/privacy}",
    "received_events_url": "https://api.github.com/users/CAM603/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "davebettswebdev",
    "id": 55891014,
    "node_id": "MDQ6VXNlcjU1ODkxMDE0",
    "avatar_url": "https://avatars2.githubusercontent.com/u/55891014?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/davebettswebdev",
    "html_url": "https://github.com/davebettswebdev",
    "followers_url": "https://api.github.com/users/davebettswebdev/followers",
    "following_url": "https://api.github.com/users/davebettswebdev/following{/other_user}",
    "gists_url": "https://api.github.com/users/davebettswebdev/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/davebettswebdev/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/davebettswebdev/subscriptions",
    "organizations_url": "https://api.github.com/users/davebettswebdev/orgs",
    "repos_url": "https://api.github.com/users/davebettswebdev/repos",
    "events_url": "https://api.github.com/users/davebettswebdev/events{/privacy}",
    "received_events_url": "https://api.github.com/users/davebettswebdev/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "PHONGdotTech",
    "id": 56094050,
    "node_id": "MDQ6VXNlcjU2MDk0MDUw",
    "avatar_url": "https://avatars1.githubusercontent.com/u/56094050?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/PHONGdotTech",
    "html_url": "https://github.com/PHONGdotTech",
    "followers_url": "https://api.github.com/users/PHONGdotTech/followers",
    "following_url": "https://api.github.com/users/PHONGdotTech/following{/other_user}",
    "gists_url": "https://api.github.com/users/PHONGdotTech/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/PHONGdotTech/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/PHONGdotTech/subscriptions",
    "organizations_url": "https://api.github.com/users/PHONGdotTech/orgs",
    "repos_url": "https://api.github.com/users/PHONGdotTech/repos",
    "events_url": "https://api.github.com/users/PHONGdotTech/events{/privacy}",
    "received_events_url": "https://api.github.com/users/PHONGdotTech/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "nicbongo",
    "id": 54819898,
    "node_id": "MDQ6VXNlcjU0ODE5ODk4",
    "avatar_url": "https://avatars0.githubusercontent.com/u/54819898?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/nicbongo",
    "html_url": "https://github.com/nicbongo",
    "followers_url": "https://api.github.com/users/nicbongo/followers",
    "following_url": "https://api.github.com/users/nicbongo/following{/other_user}",
    "gists_url": "https://api.github.com/users/nicbongo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/nicbongo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/nicbongo/subscriptions",
    "organizations_url": "https://api.github.com/users/nicbongo/orgs",
    "repos_url": "https://api.github.com/users/nicbongo/repos",
    "events_url": "https://api.github.com/users/nicbongo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/nicbongo/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "lucasgreenwell",
    "id": 54864050,
    "node_id": "MDQ6VXNlcjU0ODY0MDUw",
    "avatar_url": "https://avatars1.githubusercontent.com/u/54864050?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lucasgreenwell",
    "html_url": "https://github.com/lucasgreenwell",
    "followers_url": "https://api.github.com/users/lucasgreenwell/followers",
    "following_url": "https://api.github.com/users/lucasgreenwell/following{/other_user}",
    "gists_url": "https://api.github.com/users/lucasgreenwell/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lucasgreenwell/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lucasgreenwell/subscriptions",
    "organizations_url": "https://api.github.com/users/lucasgreenwell/orgs",
    "repos_url": "https://api.github.com/users/lucasgreenwell/repos",
    "events_url": "https://api.github.com/users/lucasgreenwell/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lucasgreenwell/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "anamonteiro430",
    "id": 44322565,
    "node_id": "MDQ6VXNlcjQ0MzIyNTY1",
    "avatar_url": "https://avatars3.githubusercontent.com/u/44322565?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/anamonteiro430",
    "html_url": "https://github.com/anamonteiro430",
    "followers_url": "https://api.github.com/users/anamonteiro430/followers",
    "following_url": "https://api.github.com/users/anamonteiro430/following{/other_user}",
    "gists_url": "https://api.github.com/users/anamonteiro430/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/anamonteiro430/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/anamonteiro430/subscriptions",
    "organizations_url": "https://api.github.com/users/anamonteiro430/orgs",
    "repos_url": "https://api.github.com/users/anamonteiro430/repos",
    "events_url": "https://api.github.com/users/anamonteiro430/events{/privacy}",
    "received_events_url": "https://api.github.com/users/anamonteiro430/received_events",
    "type": "User",
    "site_admin": false
  }
]

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

const cards = document.querySelector('.cards');
console.log(cards);

function cardCreator(arg) {

  // variables

  const card = document.createElement('div');
  const photo = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameHeader = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const friendsUrl = document.createElement('a');
  const followersCount = document.createElement('p');
  const followingCount = document.createElement('p');
  const bio = document.createElement('p');

  //class list

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')

  //append children

  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(profileLink)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  // textcontent

  img.src = arg.avatar_url
  location.textContent = arg.location
  name.textContent = arg.name
  userName.textContent = arg.login
  const theProfileLink = arg.avatar_url
  profileLink.innerHTML = theProfileLink.link(arg.url)
  followers.textContent = `Followers: ${arg.url}`
  following.textContent = `Following: ${arg.following}`
  bio.textContent = arg.bio


  return card
}









/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
