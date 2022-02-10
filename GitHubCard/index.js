import axios from "axios";

let GIT_URL = 'https://api.github.com/users/'


// axios.get(`${GIT_URL}DawsonReschke`).then((val)=>{
//   let card = document.querySelector('.cards'); 
//   card.appendChild(createGitCardComponent(val.data)); 
// }); 

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

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

getGitUserFollowing('DawsonReschke',(out)=>{ out.unshift('DawsonReschke');addCardsToDOMFromData(out)})

// takes and object with type, id, classes, innerText, innerHTML, attributes
function createElement({type='div', id=false ,classes=[],innerText='',innerHTML='', attributes=[]} = {}){
  let element = document.createElement(type);
  element.innerHTML = innerHTML; 
  element.innerText = innerText; 
  if(id)element.id = id; 
  classes.forEach((val)=>element.classList.add(val)); 
  attributes.forEach(val=>element.setAttribute(val.attribute,val.value))
  return element; 
}

function appendChildren(element, children){
  children.forEach(val=>element.appendChild(val))
}

function createGitCardComponent(data){
  let containerDiv = createElement({classes:['card']})
  let userImg = createElement({type:'img',attributes:[{attribute:'src',value:data.avatar_url}]})
  let cardInfo = createElement({classes:['card-info']})
  let name = createElement({type:'h3',classes:['name'],innerText:data.name})
  let userName = createElement({type:'p',classes:['username'],innerText:data.login})
  let location = createElement({type:'p',innerText:`Location: ${data.location}`})
  let profile = createElement({type:'p',innerText:'Profile: '})
  let profileLink = createElement({type:'a',attributes:[{attribute:'href',value:data.html_url}],innerText:data.html_url})
  profile.appendChild(profileLink); 
  let followers = createElement({type:'p',innerText:`Followers: ${data.followers}`})
  let following = createElement({type:'p',innerText:`Following: ${data.following}`})
  let bio = createElement({type:'p',innerText:`Bio: ${data.bio}`})
  appendChildren(cardInfo,[name,userName,location,profile,followers,following,bio])
  appendChildren(containerDiv,[userImg,cardInfo]); 
  return containerDiv; 
}

function getGitUserFollowing(user,callback){
  axios.get(`${GIT_URL}${user}/following`).then((val)=>{
    callback(val.data.map((user)=>user.login))
  })
}

function addCardsToDOMFromData(arr){
  arr.forEach(val=>axios.get(`${GIT_URL}${val}`).then((val)=>{
    let card = document.querySelector('.cards'); 
    card.appendChild(createGitCardComponent(val.data)); 
  }))
}

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
