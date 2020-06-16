/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


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

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

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

function cardFunc(obj) {

  const divCard = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const personName = document.createElement('h3');
  const userName = document.createElement('p');
  const personLocation = document.createElement('p');
  const personProfile = document.createElement('p');
  const gitHubaddress = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const usersBio = document.createElement('p');

  divCard.appendChild(userImg);
  divCard.appendChild(cardInfo);
  cardInfo.appendChild(personName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(personLocation);
  cardInfo.appendChild(personProfile);
  personProfile.appendChild(gitHubaddress);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(usersBio);

  divCard.classList.add('card');
  cardInfo.classList.add('card-info');
  personName.classList.add('name');
  userName.classList.add('username');

  userImg.src = obj.data.avatar_url;
  personName.textContent = obj.data.name;
  userName.textContent = obj.data.login;
  personLocation.textContent = obj.data.location;
  gitHubaddress.src = obj.data.html_url;
  followers.textContent = `Followers: ${obj.data.followers}`;
  following.textContent = `Following: ${obj.data.following}`;
  usersBio.textContent = obj.data.bio;

  divCard.addEventListener('click', () => {
    divCard.classList.toggle('menu--open');
  });


  return divCard;
};



axios
  .get(`https://api.github.com/users/dterran2`)
  .then((res) => {
    console.log('Here is the res: ', res);
    
      const cards = document.querySelector('.cards');
      const card = cardFunc(res);
      cards.appendChild(card)
    })
      
  .catch((err) => {
    console.log('There was an error: ', err);
  });

followersArray.forEach((item) => {
  axios
.get(`https://api.github.com/users/${item}`)
.then((res) => {
        const cards = document.querySelector('.cards');
        cards.appendChild(cardFunc(res))
      })
  
  .catch((err) => {
    console.log('There was an error: ', err);
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
