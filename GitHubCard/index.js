import axios from 'axios';

axios.get('https://api.github.com/users/CleverOscar').then( response => 
  console.log(response)
  ).catch(err => console.log(err))

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
          <a href={address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const gitHubCards = document.querySelector('.cards');

function githubCardCreator(object){
  // card div container
  let cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card');

  // User Image
  let userImg = document.createElement('img');
  userImg.src = object.data["avatar_url"]
  
  // Card info
  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  let name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = object.data["name"];

  let userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = object.data["login"];

  let location = document.createElement('p');
  location.textContent = `Location: ${object.data["location"]}`

  let profile = document.createElement('p');
  profile.textContent = 'Profile: '
  let socialPage = document.createElement('a');
  socialPage.setAttribute('href', object.data["twitter_username"]);
  profile.appendChild(socialPage);

  let followers = document.createElement('p');
  followers.textContent = object.data["followers"]
  let following = document.createElement('p');
  following.textContent = object.data["following"];
  let bio = document.createElement('p');
  bio.textContent = `Bio: ${object.data["bio"]}`


  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);


  cardWrapper.appendChild(userImg);
  cardWrapper.appendChild(cardInfo);
  // console.log(cardWrapper);

  return cardWrapper;
}


axios.get('https://api.github.com/users/CleverOscar').then(response => {
  console.log(response.data)
  let cards = githubCardCreator(response)
  gitHubCards.append(cards);
  
}).catch(error => console.log('Error: ', error))


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
