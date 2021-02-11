/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
let getData = function(name){
  return axios.get(`https://api.github.com/users/${name}`)
    .then(resp => {
        return resp.data
    })
  }
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

const followersArray = ["tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];

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
const divMaker = function(object){
  let card = document.createElement("div")
  card.classList.add("card");

  let img = document.createElement("img");
  img.setAttribute('src', object.avatar_url);

  let cardinfo = document.createElement("div")
  cardinfo.classList.add("card-info");

  let name= document.createElement("h3")
  name.classList.add("name")
  name.textContent = object.name

  let username = document.createElement("p");
  username.classList.add("username")
  username.textContent = object.login;

  let location = document.createElement("p");
  location.textContent = `Location: ${object.location}`;

  let profile = document.createElement("p");
  profile.textContent = `Profile: `

  let anchor = document.createElement("a")
  anchor.setAttribute("href", object.html_url)
  anchor.textContent = object.html_url
  profile.appendChild(anchor)

  let followers = document.createElement("p");
  followers.textContent = `Followers: ${object.followers}`;

  let following = document.createElement("p");
  following.textContent = `Following: ${object.following}`;

  let bio = document.createElement("p");
  bio.textContent = `Bio: ${object.bio}`;

  cardinfo.appendChild(name)
  cardinfo.appendChild(username)
  cardinfo.appendChild(location)
  cardinfo.appendChild(profile)
  cardinfo.appendChild(followers)
  cardinfo.appendChild(following)
  cardinfo.appendChild(bio)
  card.appendChild(img)
  card.appendChild(cardinfo)

  return card
}
let cards = document.querySelector(".cards")
getData("poonchy")
  .then(e => {
    cards.appendChild(divMaker(e))
  })

followersArray.forEach((element)=>{
  getData(element)
    .then(e => {
      cards.appendChild(divMaker(e))
    })
})



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
