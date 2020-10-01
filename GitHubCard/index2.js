
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
  STEP 5: Now that you have your own card getting added to the DOM,
   either
    follow this link in your browser https://api.github.com/users/
    <Your github name>/followers,
    manually find some other users' github handles, or use the 
    list found at the
    bottom of the page. Get at least 5 different Github usernames
     and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user,
     creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

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



const gitCard = (imageURL) => {
  // imageUrl is data from the dog API. 
  
  // create elements (these are not in parent <-> child relationships)
  const dogCard = document.createElement('div')
  const dogImg = document.createElement('img')
  const dogTitle = document.createElement('h3')
  
    // make "dogCard" the parent of dogImg & dogTitle elements

  dogCard.appendChild(dogImg);
  dogCard.appendChild(dogTitle);
  
    // add content to elements

  dogTitle.textContent = "Breed: Mastiff"
  dogImg.src = imageURL // url string like "google.com"
  
    // add classes
  dogImg.classList.add('dog-image')
  dogCard.classList.add('dog-card')
  
  // add event listener for 'selected' effect. on first click, card will scale to be larger. on second click, card returns to normal size.
  dogCard.addEventListener('click', () => {
    dogCard.classList.toggle('selected') // class="a b c d" --> classList = ['a', 'b', 'c', 'd']
  })
  
    // return parent component that contains all of the dog card
  return dogCard;
}


/*
Step 3: Get data from API with axios GET request to: "https://dog.ceo/api/breed/mastiff/images/random/12"

Step 4a - Learn about promise chaining (no typing code)
Step 4b - Add to chain here to see data returned from GETs

Step 6 - Create an error in axios code & handle error with .catch 
*/

// This returns JUST the Promise. Use promise chaining like below 
//to handle success and error states.
// const axiosPromise = axios.get("https://dog.ceo/api/breed/mastiff/images/random/12")
// console.log(axiosPromise)


// this is our parent in the HTML. this is where all of our dogcards will live

const cards = document.querySelector('.cards');
const userNames = ['extrude575757','bigknell','tetondan',
'dustinmyers', 'justsml', 'luishrd'];

// axios.get sends a GET HTTP request to the URL provided as a parameter. 
// it creates a Promise internally that manages the state of the request - pending, fulfilled, rejected
// to create a chain, DO NOT END YOUR .get, .then, or .catch with a ;
// comments do not break a chain, as shown below.
userNames.forEach((userName)=>{
  axios.get(`https://api.github.com/users/${userName}`)
//  when a GET request is fulfilled, a .then on the promise chain allows us to access the data returned from the API
  .then((r) => {
  // ALL APIs HAVE DIFFERENT FORMATS IN THEIR RESPONSE. Print out the response or look at documentation to see what the API returned
    // handle success here
    console.log('success!', r.data);
    let card = document.createElement('div');
    let cardDiv = document.createElement('div');
    let cardP = document.createElement('p');

    // cardDiv.classList.add('card');
    let name = document.createElement('h1');
    let githubName = document.createElement('h2');
    // githubName.classList.add('card');
    cardP.classList.add('card');
    cardP.innerHTML = 'Location: '+ r.data.location + ' <br> Profile: '+r.data.html_url
    + '<br> Followers: '+r.data.followers+'<br>Following: '+r.data.following+ '<br>Bio: '+r.data.bio;

    githubName.classList.add('username');
    githubName.textContent = r.data.login;
    name.classList.add('name');
    name.classList.add('card');
    name.textContent = r.data.name;
    card.classList.add('card');
    let avatar_img_url = r.data.avatar_url;
    let img = document.createElement('img');
    img.classList.add('card');
    img.src = avatar_img_url;
    card.appendChild(img);
    cardDiv.appendChild(name);
    cardDiv.appendChild(githubName);
    cardDiv.appendChild(cardP);
    card.appendChild(cardDiv);
    
    cards.appendChild(card);
  
  })

// when a GET request is rejected, a .catch on the chain allows us to capture errors returned from the API

  .catch((err) => {
    // handle error
    console.log('error!', err)
  })

// a final .then (per axios docs) will be called regardless of state (fulfilled or rejected). it will be called after either the .then or the .catch.
// you can use it to continue on with other tasks that must happen regardless of Promise state
.then(() => {
  console.log('yahoo!')
})
});