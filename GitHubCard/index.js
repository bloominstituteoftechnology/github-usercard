/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
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

function toggleCalendar(calendarNo) {
  const calendarDisplay =  document.querySelector(calendarNo).style.display 
 
  if (calendarDisplay=== "block") {
    gsap.to(calendarNo, {
      duration: 1,
      display: "none",
      opacity: 0,
      height: 0,
    })
  } else {
    gsap.to(calendarNo, {
      duration: 1,
      display: "block",
      opacity: 1,
      height: 175
    })
  }

}

function createGitHubCard(obj, i) {
  let cardDiv = document.createElement("div");
  cardDiv.className = "card";
  let img = document.createElement("img");
  img.setAttribute("src", obj.avatar_url);
  const calendarDiv = document.createElement("div")
  calendarDiv.className = `calendar-${i}`
  calendarDiv.classList.add("calendar")
  calendarDiv.style.display = "block"
  cardDiv.addEventListener("click", () => {
    toggleCalendar(`.calendar-${i}`)
  })
  const { login, location, url, followers, following, bio } = obj;
  let cardInfo = document.createElement("div");
  cardInfo.className = "card-info";
  let h3Name = document.createElement("h3");
  h3Name.className = "name";
  h3Name.textContent = login;
  let pUsername = document.createElement("p");
  pUsername.className = "username";
  pUsername.textContent = login;
  let pLocation = document.createElement("p")
  pLocation.textContent = location;
  let pProfile = document.createElement("p");
  pProfile.textContent = "Profile: ";
  let a = document.createElement("a");
  a.setAttribute("href", url);
  a.textContent = url;
  pProfile.appendChild(a);
  let pFollowers = document.createElement("p");
  pFollowers.textContent = `Followers: ${followers}`;
  let pFollowing = document.createElement("p");
  pFollowing.textContent = `Following: ${following}`;
  let pBio = document.createElement("p");
  pBio.textContent = `Bio: ${bio}`;
  let cardInfoChildren = [
    h3Name,
    pUsername,
    pLocation,
    pProfile,
    pFollowers,
    pFollowing,
    pBio
  ];
  cardInfoChildren.forEach((info) => cardInfo.appendChild(info));
  cardDiv.appendChild(img)
  cardDiv.appendChild(cardInfo)
  cardDiv.appendChild(calendarDiv)
  return cardDiv;
}

// followersArray.forEach((follower) => {
//   axios
//   .get(`https://api.github.com/users/${follower}`)
//   .then(function(res) {
//     // console.log(res)
//     document.querySelector(".cards").appendChild(createGitHubCard(res.data))
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
// })
const me = "thomatoh";

// new GitHubCalendar(".calendar", me)

axios
  .get(`https://api.github.com/users/${me}/followers`)
  .then(function(res) {
    res.data.forEach((follower, i)=> {
      axios.get(`https://api.github.com/users/${follower.login}`).then((res) => {
        document.querySelector(".cards").appendChild(createGitHubCard(res.data, i))
        new GitHubCalendar(`.calendar-${i}`, follower.login, { responsive: true})
      }).catch((err) =>{
        console.log(err)
      })
    });
  })
  .catch(function(err) {
    console.log(err);
  });

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
