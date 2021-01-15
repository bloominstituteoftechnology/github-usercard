import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


// "avatar_url": "https://avatars3.githubusercontent.com/u/75220199?v=4",
//     "bio": null,
//     "blog": "",
//     "company": null,
//     "created_at": "2020-11-29T18:50:27Z",
//     "email": null,
//     "events_url": "https://api.github.com/users/alex-wallander/events{/privacy}",
//     "followers": 0,
//     "followers_url": "https://api.github.com/users/alex-wallander/followers",
//     "following": 0,
//     "following_url": "https://api.github.com/users/alex-wallander/following{/other_user}",
//     "gists_url": "https://api.github.com/users/alex-wallander/gists{/gist_id}",
//     "gravatar_id": "",
//     "hireable": null,
//     "html_url": "https://github.com/alex-wallander",
//     "id": 75220199,
//     "location": null,
//     "login": "alex-wallander",
//     "name": null,
//     "node_id": "MDQ6VXNlcjc1MjIwMTk5",
//     "organizations_url": "https://api.github.com/users/alex-wallander/orgs",
//     "public_gists": 0,
//     "public_repos": 19,
//     "received_events_url": "https://api.github.com/users/alex-wallander/received_events",
//     "repos_url": "https://api.github.com/users/alex-wallander/repos",
//     "site_admin": false,
//     "starred_url": "https://api.github.com/users/alex-wallander/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/alex-wallander/subscriptions",
//     "twitter_username": null,
//     "type": "User",
//     "updated_at": "2021-01-05T16:30:11Z",
//     "url": "https://api.github.com/users/alex-wallander"
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

// const followersArray = [];

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
axios.get('https://api.github.com/users/alex-wallander')
.then(res =>{
  githubCards(res.data)
});


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

const cards = document.querySelector('.cards')

function githubCards (object){
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  console.log(card)
  
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')


  name.textContent = object.name
  userName.textContent = object.login
  followers.textContent = object.followers
  following.textContent = object.following
  image.setAttribute('src', object.avatar_url);
  location.textContent = `Location: ${object.location}`;
  profileLink.textContent = object.html_url;
  profileLink.href = object.html_url;
  profile.textContent = `Profile: `;
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  bio.textContent = `Bio: ${object.bio}`;

  card.appendChild(image)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(profileLink)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  document.querySelector('.cards').appendChild(card);
  console.log(profileLink);
  console.log(profile);
  return card;
}

followersArray.forEach(follower => {
axios
.get(`https://api.github.com/users/${follower}`)
.then((res) =>{
  console.log(res.data)
  cards.appendChild(githubCards(res.data))
})
.catch((err) =>{
  console.log(err);
  })
})

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
