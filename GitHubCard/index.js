import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/jasoncorchado')
.then( (res) => {
  console.log(res.data);
  console.log(profileMaker(res.data));
  document.querySelector('.cards').appendChild(profileMaker(res.data));
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

const followersArray = ['trwhatcott', 'esmitley', 'Mykie92', 'theMultitude', 'bigknell'];
axios.get(`https://api.github.com/users/bigknell/followers`)
  
followersArray.forEach((obj) => {
  axios.get(`https://api.github.com/users/${obj}`)
  .then( (res) => {
    profileMaker(res.data);
    document.querySelector('.cards').appendChild(profileMaker(res.data));
  })
  .catch(err => {
    console.log(err);
  })
});


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

function profileMaker(thePerson){
  let profile = document.createElement('div');
  let pic = document.createElement('img');
  let pinfo = document.createElement('div');
  let pname = document.createElement('h3');
  let puser = document.createElement('p');
  let ploca = document.createElement('p');
  let pro = document.createElement('p');
  let anchor = document.createElement('a');
  let fllwr = document.createElement('p');
  let fllin = document.createElement('p');
  let about = document.createElement('p');
  
  profile.classList.add('card');
  pinfo.classList.add('card-info');
  pname.classList.add('name');
  puser.classList.add('username');
  
  profile.appendChild(pic);
  profile.appendChild(pinfo);
  pinfo.appendChild(pname);
  pinfo.appendChild(puser);
  pinfo.appendChild(ploca);
  pinfo.appendChild(pro);
  pinfo.appendChild(fllwr);
  pinfo.appendChild(fllin);
  pinfo.appendChild(about);
  pro.appendChild(anchor);

  pic.setAttribute('src', thePerson.avatar_url);
  pname.textContent = thePerson.name;
  puser.textContent = thePerson.login;
  ploca.textContent = thePerson.location;
  anchor.textContent = `Profile: ${thePerson.html_url}`;
  fllwr.textContent = `Followers: ${thePerson.followers}`;
  fllin.textContent = `Following: ${thePerson.following}`;
  about.textContent = thePerson.bio;
  return profile;

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
