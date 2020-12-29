/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cardDiv = document.querySelector('div.cards');
const card = axios.get(' https://api.github.com/users/vanessadixon1')
.then(res => {
  console.log(res.data)
  const response = res.data;
  cardDiv.append(githubCard(response))
})
.catch(e => {
  console.log(`error is:`, e)
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

const followersArray = [];

function githubCard(obj) {
  const div = document.createElement('div');
  div.classList.add('card');

  const img = document.createElement('img');
  img.src= obj.avatar_url;

  const div2 = document.createElement('div');
  div2.classList.add('card-info');

  const h3 = document.createElement('h3');
  h3.classList.add('hame');

  const p1 = document.createElement('p');
  p1.classList.add('username');

  const p2 = document.createElement('p');
  p2.textContent = `Location: ${obj.location}`;

  const p3 = document.createElement('p');
  p3.textContent = `Profile: `
  const a = document.createElement('a');
  a.href=obj.html_url;
  a.textContent = obj.html_url;
  p3.append(a);

  const p4 = document.createElement('p');
  p4.textContent = `Followers: ${obj.followers}`;

  const p5 = document.createElement('p');
  p5.textContent = `Following: ${obj.following}`;

  const p6 = document.createElement('p');
  p6.textContent = `Bio: ${obj.bio}`;

  div.append(img,div2);
  div2.append(h3,p1,p2,p3,p4,p5,p6);

  return div;
}

githubCard(card);
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
