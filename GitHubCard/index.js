import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
    axios
    .get('https://api.github.com/users/ruizaj13')
    .then((response) => {
      allCards.appendChild(cardMaker(response.data));
    })
    .catch((err) =>{
      console.log('Whoops!', err);
    })
    .finally(()=>{
      console.log('done');
    })
    
    const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

    followersArray.forEach(item => {
      axios
      .get(`https://api.github.com/users/${item}`)
      .then(response => {
        allCards.appendChild(cardMaker(response.data));
      })
      .catch (err => {
        console.log('Whoopsie!', err);
      })
    
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
  const allCards = document.querySelector('.cards');

  function cardMaker(userObj) {
    
    const card = document.createElement('div');
    const image = document.createElement('img');
    const cardInfo = document.createElement('div');
    const name = document.createElement('h3');
    const userName = document.createElement('p');
    const userLocale = document.createElement('p')
    const profile = document.createElement('p');
    const profileUrl = document.createElement('a');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');

    card.classList.add('card');
    card.appendChild(image);
    card.appendChild(cardInfo);

    image.src = userObj.avatar_url;

    cardInfo.classList.add('card-info');
    cardInfo.appendChild(name);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(userLocale);
    cardInfo.appendChild(profile);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);

    name.classList.add('name');
    name.textContent = `${userObj.name}`;

    userName.classList.add('username');
    userName.textContent = `${userObj.login}`;

    userLocale.textContent = `Location: ${userObj.location}`;

    profile.textContent = 'Profile:' ;
    profile.appendChild(profileUrl);

    profileUrl.href = userObj.html_url;
    profileUrl.textContent = `${userObj.html_url}`;

    followers.textContent = `Followers: ${userObj.followers}`;

    following.textContent = `Following: ${userObj.following}`;

    bio.textContent = `Bio: ${userObj.bio}`;



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
