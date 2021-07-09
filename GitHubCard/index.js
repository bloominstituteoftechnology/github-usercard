import axios from 'axios';
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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const cards = document.querySelector('.cards');
axios
.get("https://api.github.com/users/taylorkangillescas")
.then(response => { 
  console.log(response);
  const myCard = gitCards(response.data);
  cards.appendChild(myCard);
});

function gitCards(object){
  
  const card = document.createElement("div"); //creating the elements
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const address = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card.classList.add("card"); //adding classes
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  image.src = object.avatar_url; // adding content
  name.textContent = object.name;
  username.textContent = object.login;
  location.textContent = `Location: ${object.location}`; // using TL to specify what we are using
  profile.textContent = "Profile: ";
  address.href = object.html_url;
  address.textContent = "Link to Profile";
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  bio.textContent = `Bio: ${object.bio}`;

  card.appendChild(image); // appending children to card
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(address);

  return card; // returning new card
}

const followersArray = ['https://api.github.com/users/tetondan', 'https://api.github.com/users/dustinmyers', 'https://api.github.com/users/justsml', 'https://api.github.com/users/luishrd', 'https://api.github.com/users/bigknell']; // creating new array for followers containing their user profiles

followersArray.forEach(link => { // for each profile in the followers array we are pulling the data with axios and appending the following card to cards.
  axios
  .get(link)
  .then(response => {
    console.log(response.data);
    followingCard = gitCard(response.data); 
    cards.appendChild(followingCard)
  })
})

// double check this portion


    
    
    
    