import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// create funtction that gets user info from API
function getData(username) {
  
//  .get to retrieve api, uses .then to tell the function what to do with the info it recieves
  axios.get(`https://api.github.com/users/${username}`)
  .then(response => { 
    // create a variable with an object and store data
    let user = {
      avatar_url: response.data.avatar_url,
      name: response.data.name ,
      login: response.data.login,
      location:response.data.location ,
      html_url: response.data.html_url,
      followers: response.data.followers,
      following: response.data.following,
      bio:response.data.bio , 
      
    
    }
    domCreate(user)
    let entry = document.querySelector(".cards")
    entry.appendChild(domCreate(user))
    console.log(user, 'zac')
  })

  // github api going through the users
  // .then(( ) => {
  //   axios.get(`https://api.github.com/users/${username}/followers`)
  //   .then(res => {
  //     console.log(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err, 'broken')
  //   })
  // })
  .catch( err => {
  console.log(err)
  })
}

getData('miketillman95')
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

const followersArray = [
  "portsigns",
"theprajin",
"sulemanmalik03",
"ahmetabdi",
"shayanzare",
];

let cards = document.querySelector(".cards")

followersArray.forEach((followers)=> {
  axios.get(`https://api.github.com/users/${followers}`)
  .then(info => {
  cards.appendChild(domCreate(info.data))
  })
  .catch(err => {
    console.log(err)
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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function domCreate (data){
const card = document.createElement("div")
card.classList.add("card")

const pic = document.createElement('img')
pic.src = data.avatar_url
card.appendChild(pic)



 const header = document.createElement('h3')
 header.classList.add('name')
 header.textContent = data.name
 card.appendChild(header)

 const content1 = document.createElement("p")
 content1.classList.add('username')
 content1.textContent = data.login
 card.appendChild(content1)

 const content2 = document.createElement("p")
 content2.textContent = `Location: ${data.location}`
 card.appendChild(content2)
 
 const content3 = document.createElement("p")
content3.textContent = "Profile:"
card.appendChild(content3)

 const anchor = document.createElement('a')
 anchor.textContent = data.html_url
 content3.appendChild(anchor)
 

 const content4 = document.createElement("p")
 content4.textContent = `Followers: ${data.followers}`
 card.appendChild(content4)
                  
 const content5 = document.createElement("p")
 content5.textContent = `Following: ${data.following}`

 const content6 = document.createElement("p")
content6.textContent = `Bio: ${data.bio}` 
card.appendChild(content6)
return card
    }


    