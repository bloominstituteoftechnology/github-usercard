/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const axios = require('axios');
axios.get('https://api.github.com/users/BryantErwin')
    .then(response => {
        console.log(response);
        const myInfo = response.data;
        GitHubFollowers(response.data);
        const mainCard = document.querySelector('.cards');
        const cardInfo = GitHubFollowers(myInfo);
        console.log(myInfo);
        mainCard.appendChild(cardInfo)
    })
    .catch(error => {
        console.log(error);
    });


/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['dylanmestyanek', 'chelsabeth', 'itava0', 'jhaddon', 'adkhiker'];
i = 0;
followersArray.forEach((user, i) => {
    axios.get(`https://api.github.com/users/${followersArray[i]}`)
        .then(response => {
            console.log(response);
            const myInfo = response.data;
            const mainCard = document.querySelector('.cards');
            const cardInfo = GitHubFollowers(myInfo);
            console.log(cardInfo);
            mainCard.appendChild(cardInfo)
        })
        .catch(error => {
            console.log(error)
        });
    console.log(followersArray);
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
const mainCard = document.querySelector('.cards');
function GitHubFollowers(data) {
    const gitCard = document.createElement('div');
    const
        img = document.createElement('img'),
        cardInfo = document.createElement('div'),
        h3Name = document.createElement('h3'),
        pUser = document.createElement('p'),
        pLocation = document.createElement('p'),
        pProfile = document.createElement('p'),
        aProfileUrl = document.createElement('a'),
        pFollowers = document.createElement('p'),
        pFollowing = document.createElement('p'),
        pBio = document.createElement('p');

    gitCard.classList.add('card');
    cardInfo.classList.add('card-info');
    h3Name.classList.add('name');
    pUser.classList.add('username');

    gitCard.appendChild(img);
    gitCard.appendChild(cardInfo);

    cardInfo.appendChild(h3Name);
    cardInfo.appendChild(pUser);
    cardInfo.appendChild(pLocation);
    cardInfo.appendChild(pProfile);
    cardInfo.appendChild(pFollowers);
    cardInfo.appendChild(pFollowing);
    cardInfo.appendChild(pBio);

    img.src = `${data.avatar_url}`;
    h3Name.textContent = `${data.name}`;
    pUser.textContent = `${data.login}`;
    pLocation.textContent = `${data.location}`;
    aProfileUrl.textContent = `${data.html_url}`;
    pFollowers.textContent = `${data.followers}`;
    pFollowing.textContent = `${data.following}`;
    pBio.textContent = `${data.bio}`;

    console.log(gitCard);
    return gitCard
}


/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
