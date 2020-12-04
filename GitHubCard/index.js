
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const entryPoint = document.querySelector(".cards");

const axiosPromise = axios.get('https://api.github.com/users/mikayla-bryant')
    .then((res) => {
      const url = res.data
      const newGitCard = githubCard(url);
      entryPoint.appendChild(newGitCard);
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

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach(user => {
  axios
  .get(`https://api.github.com/users/${user}`)
  .then(r => {
    const newCard = githubCard(r.data);
    entryPoint.appendChild(newCard);
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


const githubCard = (url) => {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const title = document.createElement('h3');
  const username = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const page = document.createElement('a');
  const numFollowers = document.createElement('p');
  const numFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(title);
  cardInfo.appendChild(username);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  profile.appendChild(page);
  cardInfo.appendChild(numFollowers);
  cardInfo.appendChild(numFollowing);
  cardInfo.appendChild(userBio);

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  title.classList.add("name");
  username.classList.add("username");

  image.src = url.avatar_url;
  page.href = url.html_url;
  title.textContent = url.name;
  username.textContent = url.login;
  userLocation.textContent = `Location: ${url.location}`;
  page.textContent = url.html_url;
  numFollowers.textContent = `Followers: ${url.followers}`;
  numFollowing.textContent = `Following: ${url.following}`;
  userBio.textContent = `Bio: ${url.bio}`;


  return card;
}


githubCard('https://api.github.com/users/mikayla-bryant');
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
