/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards')
axios.get('https://api.github.com/users/BlueEagle')
  .then(response => {
    console.log(response.data)
    const component = createComponent(response.data)
    cards.appendChild(component)
  })

// const data = {
//   "login": "BlueEagle",
//   "id": 6562992,
//   "node_id": "MDQ6VXNlcjY1NjI5OTI=",
//   "avatar_url": "https://avatars0.githubusercontent.com/u/6562992?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/BlueEagle",
//   "html_url": "https://github.com/BlueEagle",
//   "followers_url": "https://api.github.com/users/BlueEagle/followers",
//   "following_url": "https://api.github.com/users/BlueEagle/following{/other_user}",
//   "gists_url": "https://api.github.com/users/BlueEagle/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/BlueEagle/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/BlueEagle/subscriptions",
//   "organizations_url": "https://api.github.com/users/BlueEagle/orgs",
//   "repos_url": "https://api.github.com/users/BlueEagle/repos",
//   "events_url": "https://api.github.com/users/BlueEagle/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/BlueEagle/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Collin Ballou",
//   "company": null,
//   "blog": "Balloucollin.dev",
//   "location": "Utah",
//   "email": null,
//   "hireable": true,
//   "bio": "Writing many things.\r\n\r\nStudent at Lambda School.\r\n\r\nPython is my side hustle.",
//   "twitter_username": null,
//   "public_repos": 37,
//   "public_gists": 2,
//   "followers": 2,
//   "following": 15,
//   "created_at": "2014-02-01T18:28:57Z",
//   "updated_at": "2020-06-04T19:04:19Z"
// }

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

const followersArray = ['davericher', '	z7r1k3', 'LukeSmithxyz', 'torvalds', 'BjarneStroustrup'];

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
    .then(fResponse => {
      const fComponent = createComponent(fResponse.data)
      cards.appendChild(fComponent)
    })
    .catch(error => {
      console.error('There was an error!',error);
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
function createComponent(componentData) {
  const { avatar_url, name, login, location, html_url, followers, following, bio } = componentData

  const card = document.createElement('div')
  const userImage = document.createElement('img')
  const cardInfo = document.createElement('div')
  const nameEl = document.createElement('h3')
  const username = document.createElement('p')
  const locationEl = document.createElement('p')
  const profile = document.createElement('p')
  const address = document.createElement('a')
  const followersEl = document.createElement('p')
  const followingEl = document.createElement('p')
  const bioEl = document.createElement('p')

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  nameEl.classList.add('name')
  username.classList.add('username')

  userImage.src = avatar_url
  nameEl.textContent = name
  username.textContent = login
  locationEl.textContent = `Location: ${location}`
  profile.textContent = 'Profile: '
  address.href = html_url
  address.textContent = html_url
  followersEl.textContent = `Followers: ${followers}`
  followingEl.textContent = `Following: ${following}`
  bioEl.textContent = `Bio: ${bio}`

  card.appendChild(userImage)
  card.appendChild(cardInfo)
  cardInfo.appendChild(nameEl)
  cardInfo.appendChild(username)
  cardInfo.appendChild(locationEl)
  cardInfo.appendChild(profile)
  profile.appendChild(address)
  cardInfo.appendChild(followersEl)
  cardInfo.appendChild(followingEl)
  cardInfo.appendChild(bioEl)

  return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
