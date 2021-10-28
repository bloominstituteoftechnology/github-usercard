import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

function profileMaker({object}) {
  //define new elements
  const profileCard = document.createElement('.card');
  const image = document.createElement('img');
  const info = document.createElement('.card-info');
  const name = document.createElement('.name');
  const userName = document.createElement('.username');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  //setup structure of elements
  profileCard.appendChild(image);
  profileCard.appendChild(info);
  info.appendChild(name);
  info.appendChild(userName);
  info.appendChild(location);
  info.appendChild(profile);
  profile.appendChild(address);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  //set class names
  profileCard.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  //set text content
  name.textContent = object['name'];
  userName.textContent = object['login'];
  
  return profileCard

}

axios.get(`https://api.github.com/users/gastonirby`)
  .then(res => {
    const dataObject = res.data;
    const profile = profileMaker(res.data)
    //follow step 4
    // get element with a class of cards from the DOM
    const attach = document.querySelector('.cards')
    //append the user card to the element 
    attach.appendChild(profileCard)
  })
  .catch(err => {
    console.log(err)
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
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

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">                                                                      profileCard
      <img src={image url of user} />                                                        image
      <div class="card-info">                                                                info
        <h3 class="name">{users name}</h3>                                                     name
        <p class="username">{users user name}</p>                                              userName
        <p>Location: {users location}</p>                                                      location
        <p>Profile:                                                                            profile
          <a href={address to users github page}>{address to users github page}</a>             address
        </p>                                                                                   
        <p>Followers: {users followers count}</p>                                              followers
        <p>Following: {users following count}</p>                                              following
        <p>Bio: {users bio}</p>                                                                bio
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
