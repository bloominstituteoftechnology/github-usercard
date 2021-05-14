import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
let url = "https://api.github.com/users/AmlakBarkon";
axios.get(url)
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
.then(res=>{
  createCard(res.data)
  
  axios.get(res.data.followers_url)
  .then(res=>{
    console.log("one ", res.data)
    createFriend(res.data)
  })
  .catch(err=>{
    console.log("wrong", err)
  })
  res.data
})


.catch(err=>{
  console.log("sorry something is wrong",err)
})
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

let container = document.querySelector(".cards"); 
  let card = document.createElement("img");
  let cardTitle = document.createElement("h1");
  let cardP = document.createElement("p");
  let newdiv = document.createElement("div")
function createCard(data){
 
      cardP.classList.add("username")
      card.setAttribute("src",  `${data.avatar_url}`);
      cardTitle.textContent = `User Name: ${data.login}`;
      cardTitle.classList.add("name")
      cardP.textContent= data.bio;
      container.appendChild(card);
      container.appendChild(cardTitle);
      container.appendChild(cardP);
      
}

function createFriend(data){
  let arr=  data.map(x=>{
  let img = document.createElement("img");
  let name = document.createElement("h1");
  let p = document.createElement("p");
   img.setAttribute("src", x.avatar_url)
    name.textContent = x.login;
    p.textContent = x.url;
    container.appendChild(img)
    container.appendChild(name)
    container.appendChild(p);
    container.classList.add("card")
    console.log("this is friend ", x.avatar_url)
  })
  
  return arr;
}
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
