import axios from 'axios';
import { info } from 'console';
import { getPriority } from 'os';
import { pathToFileURL } from 'url';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/JoeKrapsicher')
  .then(res => {
    console.log(res);
    const ref = res.data
    const cards = document.querySelector('.cards')
    cards.appendChild(makeCard(ref))
  })
  .catch(err => {
    console.log(err);
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
     "tetondan", 
     "dustinmyers",
     "justsml",
     "luishrd",
     "bigknell"];
   
  followersArray.forEach(follower => {
    console.log(follower)
    axios.get(`https://api.github.com/users/${follower}`)
      .then(res => {
          const ref = res.data
          const cards = document.querySelector('.cards')
          cards.appendChild(makeCard(ref))
      })
      .catch(err => {
        console.log(err);
      })

  })


//   `${followersArray[0]} `

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />          //add img
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

function makeCard(arg) {
  console.log(arg)

  const userCard = document.createElement('div')
  const userImg = document.createElement('img');
  const infoCard = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const gitLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bioInfo = document.createElement('p');

  userImg.src = arg.avatar_url;
  name.textContent = arg.name;
  userName.textContent = arg.login;
  location.textContent = `Location: ${arg.location}`;
  profile.textContent = `Profile: `
  gitLink.href = arg.html_url;
  gitLink.textContent = arg.html_url;
  followers.textContent = `Followers: ${arg.followers}`;
  following.textContent = `Following: ${arg.following}`;
  bioInfo.textContent = `Bio: ${arg.bio}`;


  userCard.classList.add('card');
  infoCard.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
//                                       userCard
//                                       vvvvvvvvv
  userCard.appendChild(userImg)   //     user Image
  userCard.appendChild(infoCard)  //     info Card
//                                       vvvvvvvvv
  infoCard.appendChild(name)             
  infoCard.appendChild(userName)
  infoCard.appendChild(location)
  infoCard.appendChild(profile)//        Profile
  profile.appendChild(gitLink)//         anchor link tag inside profile
  infoCard.appendChild(followers)
  infoCard.appendChild(following)
  infoCard.appendChild(bioInfo)

  return userCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
