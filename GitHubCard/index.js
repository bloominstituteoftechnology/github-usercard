/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const mainCard = document.querySelector(".cards");
const getPromise = axios.get("https://api.github.com/users/Sheikh-A");

getPromise
  .then((response) => {
    console.log(response.data);
    const myData = createCard(response.data);
    mainCard.appendChild(myData)
  })
  .catch(error => {
    console.log("Error", error)
  });

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



// const followersArray =
// axios.get('https://api.github.com/users/Sheikh-A/followers')
//   .then(res => {
//     console.log(res);
//     res.data.forEach( (info) => {
//       mainCard.appendChild(createCard(info));
//     });
//   })
//   .catch(error => {
//     console.log("Follower Error", error)
//   });

  const followersArray = [
    "https://api.github.com/users/tetondan",
    "https://api.github.com/users/dustinmyers",
    "https://api.github.com/users/luishrd",
    "https://api.github.com/users/bigknell",
    "https://api.github.com/users/marksayers46",
    "https://api.github.com/users/kmilliner888",
    "https://api.github.com/users/rbabaci1",
    "https://api.github.com/users/schoell411",
  ];

 followersArray.map((element) => {
   axios
     .get(element)
     .then((res) => {
       const followersData = createCard;
       mainCard.appendChild(followersData(res.data));
     })
     .catch((error) => {
       console.log("Error found followers", error)
     });
 });

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

function createCard(info) {

  //CREATE ELEMENTS
  const card = document.createElement('div'),
        userImg = document.createElement('img'),
        cardInfo = document.createElement('div'),
        name = document.createElement('h3'),
        username = document.createElement('p'),
        location = document.createElement('p'),
        profile = document.createElement('p'),
        link = document.createElement('a'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        bio = document.createElement('p')

  //CREATE STRUCTURE
  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(link);
  cardInfo.appendChild(followers);
  card.appendChild(following);
  card.appendChild(bio);

  //set class NAMES
  card.classList.add("card");
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  //add CONTENT
  userImg.src = info.avatar_url;
  name.textContent = `Name: ${info.name}`;
  username.textContent = `Username: ${info.login}`;
  location.textContent = `Location: ${info.location}`;
  profile.textConent = `Profile: ${info.company}`;
  link.textContent = `Visit my page:`;
  link.setAttribute("href", info.html_url);
  followers.textConent = `Followers: ${info.followers}`;
  following.textConent = `Following: ${info.followers}`;
  bio.textConent = `Following: ${info.bio}`;

  console.log("card", card);

  return card;


}

/*
avatar_url: "https://avatars3.githubusercontent.com/u/45370361?v=4"
bio: null
blog: ""
company: null
created_at: "2018-11-26T19:31:55Z"
email: null
events_url: "https://api.github.com/users/Sheikh-A/events{/privacy}"
followers: 3
followers_url: "https://api.github.com/users/Sheikh-A/followers"
following: 9
following_url: "https://api.github.com/users/Sheikh-A/following{/other_user}"
gists_url: "https://api.github.com/users/Sheikh-A/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/Sheikh-A"
id: 45370361
location: null
login: "Sheikh-A"
name: "Ali Sheikh"
node_id: "MDQ6VXNlcjQ1MzcwMzYx"
organizations_url: "https://api.github.com/users/Sheikh-A/orgs"
public_gists: 0
public_repos: 100
received_events_url: "https://api.github.com/users/Sheikh-A/received_events"
repos_url: "https://api.github.com/users/Sheikh-A/repos"
site_admin: false
starred_url: "https://api.github.com/users/Sheikh-A/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/Sheikh-A/subscriptions"
twitter_username: null
type: "User"
updated_at: "2020-08-21T02:08:54Z"
url: "https://api.github.com/users/Sheikh-A"

*/


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
