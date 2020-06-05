/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/social-collab')
  .then(function (response) {
    console.log('Response: ', response.data);
    const data = response.data;
    let newCard = myCard(data);
    document.querySelector(".cards").appendChild(newCard)
  })
  .catch(function (handleError) {
    console.log('Error: ', handleError);
  },[]);

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

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

for(let i = 0; i < followersArray.length; i++){
axios.get(`https://api.github.com/users/${followersArray[i]}`)
  .then(function (response) {
    console.log('Response: ', response);
    const data = response.data;
    let newCard = myCard(data);
    document.querySelector(".cards").appendChild(newCard)
  })
  .catch(function (handleError) {
    console.log('Error: ', handleError);
  })
  .then(function () {
    
  },[]);
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
*/

  const myCard = (data) => {
    let cards = document.querySelector('.cards');
    const cardDIV = document.createElement('div');
    const cardIMG = document.createElement('img');
    const cardInfo = document.createElement('div');
    const cardH3 = document.createElement('h3');
    const cardUsername = document.createElement('p');
    const cardLocation = document.createElement('p');
    const cardProfile = document.createElement('p');
    const cardLink = document.createElement('a');
    const cardFollowers = document.createElement('p');
    const cardFollowing = document.createElement('p');
    const cardBio = document.createElement('p');

    cardDIV.classList.add("card");
    cardIMG.src = data.avatar_url;
    cardInfo.classList.add("card-info");
    cardH3.classList.add("name");
    cardH3.textContent = data.name;
    cardUsername.classList.add("username");
    cardUsername.textContent = data.login;
    cardLocation.textContent = `Location: ${data.location}`;
    cardProfile.textContent = "Profile: ";
    cardLink.href = data.html_url;
    cardLink.textContent = data.html_url;
    cardFollowers.textContent = `Followers: ${data.followers}`;
    cardFollowing.textContent = `Following: ${data.following}`;
    cardBio.textContent = 'Bio: ' + data.bio;

    cards.appendChild(cardDIV);
    cardDIV.appendChild(cardIMG);
    cardDIV.appendChild(cardInfo);
    cardInfo.appendChild(cardH3);
    cardInfo.appendChild(cardUsername);
    cardInfo.appendChild(cardLocation);
    cardInfo.appendChild(cardProfile);
    cardProfile.appendChild(cardLink);
    cardInfo.appendChild(cardFollowers);
    cardInfo.appendChild(cardFollowing);
    cardInfo.appendChild(cardBio);

    return cardDIV;

  }

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
