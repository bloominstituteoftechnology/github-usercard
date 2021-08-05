/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const myName = axios.get('https://api.github.com/users/Arison13')
  console.log(myName);
// .then(response => {
  //   console.log(myName);
  // })
  // .catch (err =>{
  //   console.error(err);
  // })
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
const cards = document.querySelector('.cards');
const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
followersArray.forEach(person => {
  const newPerson = axios.get(`https://api.github.com/users/${person}`)
  makeCard(newPerson)
  cards.appendChild(makeCard(newPerson));
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
{/* <div class="card">
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
    </div> }
*/
function makeCard(object){
  //creating elements
  const containerDiv = document.createElement('div')
  const image = document.createElement('img')
  const secondDiv = document.createElement('div')
  const h3 = document.createElement('h3')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const a = document.createElement('a')
  const p4 = document.createElement('p')
  const p5 = document.createElement('p')
  const p6 = document.createElement('p')
  //kids and hierarchy
  containerDiv.appendChild(image)
  containerDiv.appendChild(secondDiv)
  secondDiv.appendChild(h3)
  secondDiv.appendChild(p1)
  secondDiv.appendChild(p2)
  secondDiv.appendChild(p3)
  secondDiv.appendChild(a)
  secondDiv.appendChild(p4)
  secondDiv.appendChild(p5)
  secondDiv.appendChild(p6)
  p3.appendChild(a)
//adding classes
  containerDiv.classList.add('card')
  secondDiv.classList.add('card-info')
  h3.classList.add('name')
  p1.classList.add('username')
object
  .then(response => {
    image.src = response.data.avatar_url
    h3.textContent = response.data.name
    p1.textContent = response.data.login
    p2.textContent = (`Location: ${response.data.location}`)
    a.textContent = `Profile: ${response.data.html_url}`
    p4.textContent = `Followers: ${response.data.followers}`
    p5.textContent = `Following: ${response.data.following}`
    p6.textContent = `Bio: ${response.data.bio}`
  })
  return containerDiv
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
