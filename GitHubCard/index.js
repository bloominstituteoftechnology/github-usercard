import axios from "axios";
console.log(axios);

const result = axios.get("https://api.github.com/users/df955");
console.log(result);

const followersArray = [];
followersArray.push('tetondan','dustinmyers','justsml','luishrd','bigknell','df955');;


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
const cardEntry = document.querySelector('.cards')

function gitCardMaker(userInfo){
  const divCard = document.newElement('div');
  const loginName = document.newElement('p')
  const image = document.newElement('img');
  const divCardInfo = document.newElement('div');
  const usersName = document.newElement('h3');
  const userLocation = document.newElement('p');
  const userUrl = document.newElement('a');
  const userFollower = document.newElement('p');
  const userFollowing = document.newElement('p');
  const userBio = document.newElement('p');

  image.src = userInfo.avatar.url;
  loginName.textContent = userInfo.name;
  usersName.textContent = userInfo.login;
  userLocation.textContent = `Location: ${userInfo.location}`;
  userUrl.href = userInfo.html_url;
  userUrl.textContent = userInfo.html_url;
  userFollower.textContent = `Followers: ${userInfo.followers}`;
  userFollowing.textContent = `Following: ${userInfo.Info.following}`;
  userBio.textContent = `Bio: ${userInfo.bio}`;

  divCard.classList.add("card");
  divCardInfo.classList.add("card-info");
  loginName.classList.add("name");
  usersName.classList.add("username");

  divCard.appendChild(image);
  divCard.appendChild(divCardInfo);
  divCardInfo.appendChild(loginName);
  divCardInfo.appendChild(usersName);
  divCardInfo.appendChild(location);
  divCardInfo.appendChild(userFollower);
  divCardInfo.appendChild(userFollower);
  divCardInfo.appendChild(userBio);

  return divCard;

}
followersArray.forEach(item => {
  const URL = `https://api.github.com/users/${item}`
  axios
    .get(URL)
    .then((res) => {
      const received = res.data
      const newGitCard = gitCardMaker(received);
      cardEntry.appendChild(newGitCard);
    })

})
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

const followersArray = [];

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
