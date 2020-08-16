/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
//GET REQUEST//
//returns a promise/ a promise may or may not be successful can return an error/ 

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
//COMPONENT//
function githubCard(obj) {

  const card = document.createElement('div');
  const didiImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const didiName = document.createElement('h3');
  const didiUserName = document.createElement('p')
  const didiLocation = document.createElement('p');
  const didiProfile = document.createElement('p');
  const githubLink = document.createElement('a');
  const didiFollowers = document.createElement('p');
  const followingDidi = document.createElement('p');
  const didiBio = document.createElement('p');


  didiName.textContent = 'Name:' + obj.name;
  didiProfile.textContent = 'Profile:';
  didiUserName.textContent = 'Username:' + obj.login;
  didiLocation.textContent = 'Location:' + obj.location;
  didiFollowers.textContent = 'Followers:' + obj.followers;
  followingDidi.textContent = 'Following:' + obj.following;
  didiBio.textContent = 'Bio:' + obj.bio;
  didiImg.src = obj.avatar_url;
  githubLink.textContent = obj.html_url;
  githubLink.href = obj.html_url;

//APPENDING//
card.appendChild(didiImg);
card.appendChild(cardInfo);
cardInfo.appendChild(didiName);
cardInfo.appendChild(didiUserName)
cardInfo.appendChild(didiLocation);
cardInfo.appendChild(didiProfile);

didiProfile.appendChild(githubLink);
cardInfo.appendChild(didiFollowers);
cardInfo.appendChild(followingDidi);
cardInfo.appendChild(didiBio);

//STYLING//

card.classList.add('card');
cardInfo.classList.add('card-info');
didiProfile.classList.add('profile')
didiName.style.fontSize = "1.5rem"

return card;
}

const followersArray=[ 
  "tetondan",

  "dustinmyers",

  "justsml",

  "luishrd",

  "bigknell",

  "markrogo",

  "kwmorlock",

  "ruthmatieu",

  "ReginaAgunod",

  "juliusheese",

  "erinpicazo",

  "MasonCodeSlaps",

  "Mirwes",

  "dgarcialambda",];

  

const cards=document.querySelector('.cards');



let name = "Damaris-Garcia";

followersArray.forEach(element => {

  console.log(element);



  axios

  .get(`https://api.github.com/users/${element}`)

  .then((res) => {

   // console.log(res.data);

    cards.append(githubCard(res.data));

  })

  .catch((err) => {

    console.log(err);

  });



});



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
