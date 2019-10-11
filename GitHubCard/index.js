/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cardsSelector = document.querySelector('.cards');

const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'
];

axios.get(`https://api.github.com/users/ZachM89`)
    .then(response => {
        cardsSelector.appendChild(newComponent(response));
    })
    .catch( err => {
        console.log(err);
    });

for(let a = 0; a < followersArray.length; a++){
    axios.get(`https://api.github.com/users/${followersArray[a]}`)
        .then(response => {
            cardsSelector.appendChild(newComponent(response));
        })
        .catch( err => {
            console.log(err);
        });
}

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

function newComponent(object){
    const divCardElement = document.createElement('div');
    const imgElement = document.createElement('img');
    const divCardInfoElement = document.createElement('div');
    const h3Element = document.createElement('h3');
    const pUserNameElement = document.createElement('p');
    const pLocationElement = document.createElement('p');
    const pProfileElement = document.createElement('p');
    const aElement = document.createElement('a');
    const pFollowersElement = document.createElement('p');
    const pFollowingElement = document.createElement('p');
    const pBioElement = document.createElement('p');

    divCardElement.classList.add('card');
    imgElement.src = object.data.avatar_url;
    divCardInfoElement.classList.add('card-info');
    h3Element.classList.add('name');
    h3Element.textContent = object.data.name;
    pUserNameElement.classList.add('username');
    pUserNameElement.textContent = object.data.login;
    pLocationElement.textContent = `Location: ${object.data.location}`;

    pProfileElement.textContent = 'Profile: ';
    aElement.href = object.data.html_url;
    aElement.textContent = object.data.html_url;

    pFollowersElement.textContent = `Followers: ${object.data.followers}`;
    pFollowingElement.textContent = `Following: ${object.data.following}`;

    pBioElement.textContent = `Bio: ${object.data.bio}`;

    divCardElement.appendChild(imgElement);
    divCardElement.appendChild(divCardInfoElement);

    divCardInfoElement.appendChild(h3Element);
    divCardInfoElement.appendChild(pUserNameElement);
    divCardInfoElement.appendChild(pLocationElement);
    divCardInfoElement.appendChild(pProfileElement);
    divCardInfoElement.appendChild(pFollowersElement);
    divCardInfoElement.appendChild(pFollowingElement);
    divCardInfoElement.appendChild(pBioElement);

    pProfileElement.appendChild(aElement);

    return divCardElement;

    //console.log(object.data.login);
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


