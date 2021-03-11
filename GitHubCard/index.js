import axios from 'axios'
const gitHubInfo = document.querySelector('cards')
// console.log(axios);

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
.get("https://api.github.com/users/DasRedcoat")
.then(response => {
  gitHubInfo.appendChild(cards(response.data))
  console.log(response)
})
.catch(error => {
  console.log(error)
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function


    {
    "avatar_url": "https://avatars.githubusercontent.com/u/74682384?v=4",
    "bio": null,
    "blog": "",
    "company": null,
    "created_at": "2020-11-18T20:15:46Z",
    "email": null,
    "events_url": "https://api.github.com/users/DasRedcoat/events{/privacy}",
    "followers": 0,
    "followers_url": "https://api.github.com/users/DasRedcoat/followers",
    "following": 0,
    "following_url": "https://api.github.com/users/DasRedcoat/following{/other_user}",
    "gists_url": "https://api.github.com/users/DasRedcoat/gists{/gist_id}",
    "gravatar_id": "",
    "hireable": null,
    "html_url": "https://github.com/DasRedcoat",
    "id": 74682384,
    "location": null,
    "login": "DasRedcoat",
    "name": "Tim Langham",
    "node_id": "MDQ6VXNlcjc0NjgyMzg0",
    "organizations_url": "https://api.github.com/users/DasRedcoat/orgs",
    "public_gists": 0,
    "public_repos": 21,
    "received_events_url": "https://api.github.com/users/DasRedcoat/received_events",
    "repos_url": "https://api.github.com/users/DasRedcoat/repos",
    "site_admin": false,
    "starred_url": "https://api.github.com/users/DasRedcoat/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/DasRedcoat/subscriptions",
    "twitter_username": null,
    "type": "User",
    "updated_at": "2021-03-09T22:08:26Z",
    "url": "https://api.github.com/users/DasRedcoat"
}
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

const followersArray = [
  // {` `}
];

// tetondan
// dustinmyers
// justsml
// luishrd
// bigknell


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

function cardCreator({avatar_url, name, login, location, html_url, followers, following, bio}) {
  const card = document.createElement('div')
  card.classList.add('panel')

  const image = document.createElement('img')
  image.src = avatar_url

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')

  const h3 = document.createElement('h3')
  h3.classList.add('name')
  h3.textContent = name

  const pUsername = document.createElement('p')
  pUsername.classList.add('username')
  pUsername.textContent = login

  const pLocation = document.createElement('p')
  pLocation.textContent = `Location: ${location}`

  const pProfile = document.createElement('p')
  pProfile.textContent = `Profile: ${html_url}`

  const anchor = document.createElement('a')
  anchor.url = html_url
  anchor.textContent = html_url

  const pFollowers = document.createElement('p')
  pFollowers.textContent = `Followers: ${followers}`

  const pFollowing = document.createElement('p')
  pFollowing.textContent = `Following: ${following}`

  const pBio = document.createElement('p')
  pBio.textContent = `Bio: ${bio}`
}

return cardCreator

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
