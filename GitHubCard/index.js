
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get(`https://api.github.com/users/loleatha`)
.then((res) => {
  console.log(res);
  res.data.forEach((item) => {
    const newGithub = myGithub(item)
    enter.appendChild(newGithub)
  })
})

.catch((err) => {
  console.log(err)
})

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
  `loleatha`,
  `dustinmyers`,
  `justsml`,
  `luishrd`,
  `bigknell` 
];

const cards = document.querySelector(`.cards`);

followersArray.forEach(Element => {
  axios.get(`https://api.github.com/users/${Element}`)
  .then(info => {
    cards.appendChild(gitHub(info.data))
  })
  .catch(err => {
    console.log(err)
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

function gitHub (item) {
  const card = document.createElement(`div`);
  const img = document.createElement(`img`);
  const cardInfo = document.createElement(`div`);
  const name = document.createElement(`h3`);
  const userName = document.createElement(`p`);
  const userLocation = document.createElement(`p`);
  const profile = document.createElement(`p`);
  const userGithub = document.createElement(`a`);
  const followers = document.createElement(`p`);
  const following = document.createElement(`p`);
  const bio = document.createElement(`p`);

  card.classList.add(`card`);
  cardInfo.classList.add(`card-info`);
  name.classList.add(`name`);
  userName.classList.add(`username`);

  card.appendChild(cardInfo);
  card.appendChild(img);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(userGithub);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(bio);
  profile.appendChild(userGithub);

  img.src = item.avatar_url;
  userGithub.href = item.html_url;

  name.textContent = item.name;
  userName.textContent = item.login;
  userLocation.textContent = item.location;
  followers.textContent = `Followers: ${item.followers}`;
  following.textContent = `Following: ${item.following}`;
  bio.textContent = `Bio: ${item.bio}`;
  userGithub.textContent = `Github Page: ${item.html_url}`

  return card;
}

const enter = document.querySelector(`.cards`);

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
