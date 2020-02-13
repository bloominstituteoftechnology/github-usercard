/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/rofstudios')
.then(res => {
  // console.log(res)
  let userData = res.data;
  
  cards.append(createCard(userData))
  return axios.get('https://api.github.com/users/rofstudios/followers')
})
.then(res => {
  res.data.forEach(follower => {
    cards.append(createCard(follower))
  })
})
.catch(err => {
  console.log('no data returned',err)
})

//another way to do this is ==============================================

// axios.all([
//   axios.get('https://api.github.com/users/rofstudios'),
//   axios.get('https://api.github.com/users/rofstudios/followers')
// ])
// .then(axios.spread((userRes, followersRes) => {
//   cards.append(createCard(userRes.data));
//   followersRes.data.forEach(element => {
//     cards.append(createCard(element))
//   });
// }))
// .catch(err => {
//   console.log('err found', err);
// })

//=======================================================================



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

const followersArray = [];

function createCard(user) {
  //Creating elements
  let card = document.createElement('div'),
      image = document.createElement('img'),
      cardInfo = document.createElement('div'),
      name = document.createElement('h3'),
      userName = document.createElement('p'),
      location = document.createElement('p'),
      profile = document.createElement('p'),
      profileLink = document.createElement('a'),
      followers = document.createElement('p'),
      following = document.createElement('p'),
      bio = document.createElement('p');
    
    //Adding classes
    card.classList.add('card');
    cardInfo.classList.add('class-info');
    name.classList.add('name');
    userName.classList.add('username');

    //Appending
    card.append(image, cardInfo);
    cardInfo.append(name, userName, location, profile, followers, following, bio);
    profile.append(profileLink);

    //Content
    image.src = user.avatar_url;
    name.textContent = user.name;
    userName.textContent = user.login;
    location.textContent = user.location;
    profileLink.textContent = user.html_url;
    followers.textContent = user.followers;
    following.textContent = user.following;
    bio.textContent = user.bio;

    return card;
}
let cards = document.querySelector('.cards')

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/