
const URL = 'https://api.github.com/users/jlbevans'


// var oImg = document.createElement("img");
// oImg.setAttribute('src', 'http://www.testtrackinglink.com');
// oImg.setAttribute('alt', 'na');
// oImg.setAttribute('height', '1px');
// oImg.setAttribute('width', '1px');
// document.body.appendChild(oImg);

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

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

const followersArray = [
  {
    login: "jlbevans",
    id: 75284729,
    node_id: "MDQ6VXNlcjc1Mjg0NzI5",
    avatar_url: "https://avatars.githubusercontent.com/u/75284729?v=4",
    gitHub: "Git Hub",
    url: "https://api.github.com/users/jlbevans",
    html_url: "https://github.com/jlbevans",
    "followers_url": "https://api.github.com/users/jlbevans/followers",
    "following_url": "https://api.github.com/users/jlbevans/following{/other_user}",
    "gists_url": "https://api.github.com/users/jlbevans/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jlbevans/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jlbevans/subscriptions",
    "organizations_url": "https://api.github.com/users/jlbevans/orgs",
    "repos_url": "https://api.github.com/users/jlbevans/repos",
    "events_url": "https://api.github.com/users/jlbevans/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jlbevans/received_events",
    "type": "User",
    "site_admin": false,
    name: "Jacob Bevans",
    "company": null,
    "blog": "",
    location: "Salt Lake City",
    "email": null,
    "hireable": null,
    bio: "I am currently a student at Lambda School, working towards being a full stack web developer!",
    "twitter_username": "jbev__",
    "public_repos": 23,
    "public_gists": 0,
    followers: 0,
    following: 0,
    "created_at": "2020-12-01T00:32:20Z",
    "updated_at": "2021-02-18T01:33:27Z"
  }
];

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
const cardCreator = document.querySelector('div.cards')

function cardMaker( name, login, location, gitHub, url, followers, following, bio, html_url) {
  
  const userName = document.createElement('div.card')
  const profilePic = document.createElement(img)
  const information = document.createElement('div.card-info')
  const realName = document.createElement('h3.name')
  const userLogin = document.createElement('p.username')
  const userLocation = document.createElement('p')
  const profile = document.createElement('p')
  const address = document.createElement('a')
  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio = document.createElement('p')

  userName.appendChild(profilePic)
  userName.appendChild(information)
  information.appendChild(userLogin)
  information.appendChild(realName)
  information.appendChild(userLocation)
  information.appendChild(profile)
  information.appendChild(userFollowers)
  information.appendChild(userFollowing)
  information.appendChild(userBio)
  profile.appendChild(address)

  function pPic(selector, url) {
    var where = document.querySelector(selector);
    if (where) {
        var newImage = document.createElement('img');
        newImage.src = "https://avatars.githubusercontent.com/u/75284729?v=4";
        userName.appendChild(newImage);
    }
}

  realName.textContent = name
  userLogin.textContent = login
  userLocation.textContent = location
  profile.textContent = gitHub
  address.textContent = url
  userFollowers.textContent = followers
  userFollowing.textContent = following
  userBio.textContent = bio
  address.textContent = html_url

  return userName
}

followersArray.forEach(({  name, login, location, gitHub, url, followers, following, bio, html_url}) => {
  const userName = cardMaker(  name, login, location, gitHub, url, followers, following, bio, html_url)
  cardCreator.appendChild(userName)
})

console.log(cardMaker)
// function gitInfo() {
//   return new Promise((resolve, reject) =>
//   return resolve({success: true, data: }))
// }

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/