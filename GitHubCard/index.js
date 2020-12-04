import axios from "axios"

function cardMaker (obj){
const div = document.createElement("div")
const image = document.createElement("img")
const div2 = document.createElement("div")
const heading = document.createElement("h3")
const parag = document.createElement("p")
const para2 = document.createElement("p")
const anchor = document.createElement("a")
const para3 =document.createElement("p")
const para4 = document.createElement("p")
const para5 = document.createElement("p")
const para6 = document.createElement("p")




div.appendChild(image)
div.appendChild(div2)
div2.appendChild(heading)
div2.appendChild(parag)
div2.appendChild(para2)
div2.appendChild(para3)
div2.appendChild(para4)
div2.appendChild(para5)
div2.appendChild(para6)


 heading.textContent =obj.name
 image.src = obj.avatar_url
 parag.textContent = obj.login
 para2.textContent= obj.location
 para3.textContent = "Profile"
 anchor.href = obj.html_url
 anchor.textContent = obj.html_url
 para4.textContent =  obj.followers
 para5.textContent =  obj.following
 para6.textContent =  obj.bio

 
  div.classList.add('card')
  div2.classList.add (".card-info")
  heading.classList.add(".name")
  parag.classList.add(".username")


return div;








}
const cards = document.querySelector(".cards")

axios
.get('https://api.github.com/users/giorgio40')
.then((res) => {
  const received = res.data
  const newCard = cardMaker(received);
  
  cards.appendChild(newCard)

  // console.log(res.data)
})
.catch((err) => {
  
  console.log(err);
});


const followersArray = ['tetondan','dustinmyers', 'justsml', 'luishrd', 'bigknell'];



followersArray.forEach(link => {
axios
.get('https://api.github.com/users/' + link)
 .then(res =>{
  const recieve = res.data
  const newCards = cardMaker(recieve)
 
  cards.appendChild(newCards)
})
  .catch((err) => {
  
    console.log(err);
  });
 


});














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
        <h3 class="name"></h3>
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
