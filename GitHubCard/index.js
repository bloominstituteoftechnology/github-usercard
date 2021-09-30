/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/jcpcabanada
*/
import axios from 'axios';
axios.get("https://api.github.com/users/jcpcabanada")
  .then(resp =>{
    console.log(resp);
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
    follow this link in your browser https://api.github.com/users/jcpcabanada/followers ,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell','jcpcabanada'];

  followersArray.forEach(elem => {
    axios.get(`https://api.github.com/users/${elem}`)
  .then(resp =>{
    let info = resp.data
    containeR.appendChild(cardFunc(info))
    })
      .catch(err => {
      console.error(err);
      })
  })

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
  */

    const containeR = document.querySelector('.cards');

    function cardFunc(obj){
      let card1 = document.createElement('div');
      let img1 = document.createElement('img');
      let cardInfo1 = document.createElement('div');
      let name1 = document.createElement('h3');
      let username1 = document.createElement('p');
      let location1 = document.createElement('p');
      let profile1 = document.createElement('p');
      let address1 = document.createElement('a');
      let followers1 = document.createElement('p');
      let following1 = document.createElement('p');
      let bio1 = document.createElement('p');

      name1.textContent = obj.data.name;
      username1.textContent = obj.data.login;
      location1.textContent = `location: ${obj.data.location}`;
      followers1.textContent = `Followers: ${obj.data.followers}`;
      following1.textContent = `Following: ${obj.data.following}`;
      profile1.textContent = 'Profile:';
      bio1.textContent = obj.data.bio;
      img1.src = obj.data.avatar_url;
      address1.textContent = obj.data.html_url;
      address1.href = obj.data.html_url;


      card1.classList.add('card');
      cardInfo1.classList.add('card-info');
      name1.classList.add('name');
      username1.classList.add('username');


      card1.appendChild(img1, cardInfo1);
      cardInfo1.appendChild(name1, username1, location1, profile1, followers1, following1, bio1);
      profile1.appendChild(address1);

      return card1;
    }
    console.log(cardFunc);


  /*
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
