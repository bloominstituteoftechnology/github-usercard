/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios"
//console.log (axios)
const myData = axios.get("https://api.github.com/users/Alkibijad")
console.log(myData)
myData.then ((AlkibijadData )=>{
  console.log(AlkibijadData)
})
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
    let card = document.querySelector('.cards')
    
    myData.then((res)=>{
      const userData = res.data
      const newUser = makeUserCard(userData)
      card.appendChild(newUser)
    })
    .catch((ERROR)=>{
      console.log(ERROR)
    })



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["coriestewart1989","shawn2776","ultradesigns","kdolic"];

followersArray.forEach((user) =>{
  axios.get(`https://api.github.com/users/${user}`)
  .then ((res) => {
    const userData = res.data
    card.appendChild(makeUserCard(userData))
  })
  .catch((ERROR)=>{
    console.log(ERROR)
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



function makeUserCard (object){
    let card = document.createElement('div');
    let image = document.createElement('img');
    let cardInfo = document.createElement('div');
    let name=document.createElement('h3')
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p = document.createElement('p');
    let anchor = document.createElement ('a')
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');

    card.classList.add('card')
    cardInfo.classList.add('card-info')
    name.classList.add('name')
    p1.classList.add('username')
    
    image.src = object.avatar_url
    anchor.href = object.html_url
    name.textContent= object.name;
    p1.textContent = object.login;
    p2.textContent = object.location;
    p3.textContent = object.followers;
    p4.textContent = object.following;
    p5.textContent = object.bio;

    card.appendChild(image)
    card.appendChild(cardInfo)
    cardInfo.appendChild(name)
    cardInfo.appendChild(p5)
    cardInfo.appendChild(p4)
    cardInfo.appendChild(p3)
    cardInfo.appendChild(p2)
    cardInfo.appendChild(p1)
    cardInfo.appendChild(p);
    p.appendChild(anchor)
      return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
