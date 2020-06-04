/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const followersArray = [
  "timbogdanov",
  "a-soren",
  "aapetsi",
  "Aaroneld",
  "abarne",
];

function getUser(githubName) {
  axios
    .get(`https://api.github.com/users/${githubName}`)
    .then((response) => {
      console.log(response);
      const githubData = response.data; //this requests only the data so we can push it to html

      const card = createGitHubCard(githubData);
      cardsContainer.appendChild(card);
    })
    .catch(console.log);
}

followersArray.forEach((item) => {
  getUser(item);
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

const cardsContainer = document.querySelector(".cards");

function createGitHubCard(attrs) {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const userUrl = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");
  const company = document.createElement("p");

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(userUrl);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  cardInfo.appendChild(company);

  const avatarURL = attrs.avatar_url;
  const attrsName = attrs.name;
  const attrsUserName = attrs.login;
  const attrsLocation = `Location: ${attrs.location}`;
  const attrsURL = attrs.html_url;
  const attrsFollowers = `Followers: ${attrs.followers}`;
  const attrsFollowing = `Following: ${attrs.followers}`;
  const attrsBio = `Bio: ${attrs.bio}`;
  const attrsCompany = `Company: ${attrs.company}`;

  image.src = avatarURL;
  name.textContent = attrsName;
  userName.textContent = attrsUserName;
  location.textContent = attrsLocation;
  userUrl.textContent = attrsURL;
  userUrl.href = attrsURL;
  followers.textContent = attrsFollowers;
  following.textContent = attrsFollowing;
  bio.textContent = attrsBio;
  company.textContent = attrsCompany;

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
