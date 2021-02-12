import axios from 'axios'
console.log(axios)

const entryPoint = document.querySelector('.cards'); 
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/ErikBurdett')
.then(res =>{
    const card = userInfoCard(res.data)
    entryPoint.appendChild(card);
    console.log(res)
  })
.catch(err => {
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
// axios call into array - 
// const followersArray = [
//   'tetondan',
//   'dustinmyers',
//   'justml',
//   'luishrd',
//   'bigknell'
  
// ];

let followersArray = [
  'tetondan',
  'dustinmyers',
  'justml',
  'luishrd',
  'bigknell'
];


// runs string through api and creates cards - showing right now but minus my own which is timing out becuase of the API access limit (i think) 
followersArray.forEach((account) =>{
axios.get(`https://api.github.com/users/${account}/followers`)
  .then(account =>{
  const card = userInfoCard(account.followers)
  entryPoint.appendChild(card);
})

.catch(err => {
  console.log(err)
})
});

console.log('requested data with axios')




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
// userInfoCard function

const card = document.querySelector('.cards')
function userInfoCard(obj){

  // creating html elements
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name= document.createElement('h3');
  const login = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // appending to card
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(login);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(bio);
  cardInfo.appendChild(address);

  // assigning obj content 
  img.src = obj.avatar_url;
  name.textContent = obj.name;
  login.textContent = obj.login;
  location.textContent = obj.location;
  address.textContet = obj.html_url;
  followers.textContent = obj.followers;
  following.textContent = obj.following;
  bio.textContent = obj.bio;

  // adding classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  login.classList.add('username');

  return card
}

followersArray.forEach((follower) => {
  const gitCard = userInfoCard(follower)
  card.appendChild(gitCard)
})
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
