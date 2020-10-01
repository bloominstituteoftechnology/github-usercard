/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/ 
axios.get("https://api.github.com/users/CameronGarner")
.then(function(futuredata){
  cards.appendChild(createDiv(futuredata))
})
.catch(function(err){
console.log(err)
})

let cards = document.querySelector(".cards")
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



  /*STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ 
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach(function(item){
  axios.get("https://api.github.com/users/" + item)
  .then(function(thisdata){
    cards.appendChild(createDiv(thisdata))
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

function createDiv(object){
  let div = document.createElement("div")
  let img = document.createElement("img")
  let div2 = document.createElement("div")
  let h3 = document.createElement("h3")
  let p = document.createElement("p")
  let p2 = document.createElement("p")
  let p3 = document.createElement("p")
  let anchor = document.createElement("a")
  let p4 = document.createElement("p")
  let p5 = document.createElement("p")
  let p6 = document.createElement("p")
  div.classList.add("card")
  div2.classList.add("card-info")
  h3.classList.add("name")
  p.classList.add("username")
  div.appendChild(img)
  div.appendChild(div2)
  div2.appendChild(h3)
  div2.appendChild(p)
  div2.appendChild(p2)
  div2.appendChild(p3)
  div2.appendChild(p4)
  div2.appendChild(p5)
  div2.appendChild(p6)
  img.src = object.data.avatar_url
  h3.textContent = object.data.name
  p.textContent = object.data.login
  p2.textContent = `Location: ${object.data.location}`
  let text = document.createTextNode(object.data.html_url)
  anchor.href = object.data.html_url
  anchor.appendChild(text)
  p3.textContent = "Profile:"
  p4.textContent = `Followers: ${object.data.followers}`
  p5.textContent = `Following: ${object.data.following}`
  p6.textContent = `Bio: ${object.data.bio}`
  p3.appendChild(anchor)
  return div
}





/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
