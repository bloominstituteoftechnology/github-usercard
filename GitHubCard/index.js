import axios from "axios"

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/Jericho-West")
.then (x => {
  console.log(x.data)
  let pancake = x.data


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
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
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

function cardMaker (card0) {
  let attach = document.querySelector(".cards")

  let mainDiv = document.createElement("div")
  let img0 = document.createElement("img")
  let sideDiv = document.createElement("div")
  let water = document.createElement("h3")
  let p0 = document.createElement("p")
  let p1 = document.createElement("p")
  let p2 = document.createElement("p")
  let p3 = document.createElement("p")
  let p4 = document.createElement("p")
  let p5 = document.createElement("p")
  let aa = document.createElement("a")

  mainDiv.className = "card"
  sideDiv.className = "card-info"
  water.className = "name"
  p0.className = "username"
  img0.src = card0.avatar_url
  aa.href = card0.html_url
  water.textContent = card0.name
  p0.textContent = card0.login
  p1.textContent = `Location: ${card0.location}`
  p2.textContent = "Profile: "
  p3.textContent = `Followers: ${card0.followers}`
  p4.textContent = `Following: ${card0.following}`
  p5.textContent = `Bio: ${card0.bio}`
  aa.textContent = `${card0.html_url}`


  attach.appendChild(mainDiv)
  mainDiv.appendChild(img0)
  mainDiv.appendChild(sideDiv)
  sideDiv.appendChild(water)
  sideDiv.appendChild(p0)
  sideDiv.appendChild(p1)
  sideDiv.appendChild(p2)
  sideDiv.appendChild(p3)
  sideDiv.appendChild(p4)
  sideDiv.appendChild(p5)
  p2.appendChild(aa)
}





cardMaker(pancake)

})
.catch (err => {
  console.log(err)
})