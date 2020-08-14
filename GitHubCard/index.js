// import axios from 'axios';
/*

  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

let resArray = []

axios
  .get(`https://api.github.com/users/melaniechele`)
  .then((res) =>{
    console.log('here is the res:', res);
    resArray.push(res.data);
    console.log(resArray);


    htmlCards.appendChild(gitMe(resArray));
   

  })

  .catch((err)=>{
    console.log('here is the err: ', err)
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
const eachUser = [];
const followersArray = ["https://api.github.com/users/adelazalewski","https://api.github.com/users/weinerjm14","https://api.github.com/users/imxande","https://api.github.com/users/markrogo","https://api.github.com/users/sathyaganesan"];

followersArray.forEach(url => {
  axios
  .get(url)
  .then((res) =>{
    console.log('here is the res:', res);

  eachUser.push(res.data);
  let manipulated = eachUser.splice(0, 1)
  htmlCards.appendChild(gitMe(manipulated));
    
   

  })

  .catch((err)=>{
    console.log('here is the err: ', err)
  })

})

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

function gitMe(array){

const cardDiv = document.createElement('div')
cardDiv.classList.add('card')

const imgUrl = document.createElement('img')
imgUrl.src = array[0].avatar_url
cardDiv.appendChild(imgUrl);

const cardDiv2 = document.createElement('div')
cardDiv2.classList.add('card-info')
cardDiv.appendChild(cardDiv2)

const name = document.createElement('h3');
name.classList.add('name')
name.textContent = array[0].name

cardDiv2.appendChild(name);

const pUser = document.createElement('p')
pUser.classList.add('username')
cardDiv2.appendChild(pUser);

const pLoc = document.createElement('p')
pLoc.textContent = `Location: ${array[0].location}`
cardDiv2.appendChild(pLoc)  

const pProf = document.createElement('p')
pProf.textContent = 'Profile:'
cardDiv2.appendChild(pProf)

const aLink = document.createElement('a')
aLink.textContent = ` ${array[0].html_url}`
pProf.appendChild(aLink);

const pFollowers = document.createElement('p')
pFollowers.textContent = `Following: ${array[0].followers}`;
cardDiv2.appendChild(pFollowers);

const pFollowing = document.createElement('p')
pFollowing.textContent = `Followers: ${array[0].following}`;
cardDiv2.appendChild(pFollowing);

const pBio = document.createElement('p')
pBio.textContent = `Bio: ${array[0].bio}`;
cardDiv2.appendChild(pBio);

return cardDiv
}


const htmlCards = document.querySelector('.cards');

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/



