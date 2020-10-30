import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
.get(`https://api.github.com/users/jbry0723`)
.then ((res)=>{
  const gitData=res.data
  
  let profileCard=profileMaker(gitData)

  let endPoint=document.querySelector(".cards")

  endPoint.appendChild(profileCard)
  
  
  
  
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
  "bigknell",];

  followersArray.forEach(username=>{
    axios
      .get (`https://api.github.com/users/${username}`)
      .then (res=>{
        const getData=res.data
        let profileCard=profileMaker(getData)

        let endPoint=document.querySelector(".cards")

        endPoint.appendChild(profileCard)
  
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
function profileMaker({avatar_url,name, login, location, html_url, followers, following, bio}){

  
  
  

  let cardDiv=document.createElement('div')
  let img=document.createElement('img')
  let cardDivInfo=document.createElement('div')
  let h3Name=document.createElement('h3')
  let pUsername=document.createElement('p')
  let pLocation=document.createElement('p')
  let pProfile=document.createElement ('p')
  let aLink=document.createElement('a')
  let pFollowers=document.createElement('p')
  let pFollowing=document.createElement('p')
  let pBio=document.createElement('p')

  cardDiv.appendChild(img);
  cardDiv.appendChild(cardDivInfo);
  cardDivInfo.appendChild(h3Name)
  cardDivInfo.appendChild(pUsername)
  cardDivInfo.appendChild(pLocation)
  cardDivInfo.appendChild(pProfile)
  cardDivInfo.appendChild(pFollowers)
  cardDivInfo.appendChild(pFollowing)
  cardDivInfo.appendChild(pBio)
  pProfile.appendChild(aLink)

  cardDiv.classList.add("card")
  cardDivInfo.classList.add("card-info")
  h3Name.classList.add("name")
  pUsername.classList.add("username")
  
  h3Name.textContent=name
  img.src=avatar_url
  pUsername.textContent=login
  pLocation.textContent=`Location: ${location}`
  
  pFollowers.textContent=`Followers ${followers}`
  pFollowing.textContent=`Following ${following}`
  pBio.textContent=`Bio: ${bio}`
  
  aLink.textContent=`Profile: ${html_url}`
  aLink.href=html_url
  
  
return cardDiv
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
