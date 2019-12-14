/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/





// let gitData = [];
// axios
//   .get('https://api.github.com/users/avpimblesr')
//   .then( response => {
//     // deal with the response data in here
//     console.log(response.data)
// })
// .catch( err => {
//     // deal with the error in here
// })
//
// console.log(gitData)






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

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
*/

// console.log(gitData.data.avatar_url)


function createGitComponent() {
  const theCard = document.createElement('div')
  theCard.classList.add("card")

  const usrAvatar = document.createElement('img')
  usrAvatar.src = "https://avatars3.githubusercontent.com/u/22718695?v=4";
  usrAvatar.alt = "User's Image";

  const usrCardInfo = document.createElement('div')
  usrCardInfo.classList.add("card-info")

  const usrName = document.createElement('h3')
  usrName.classList.add("name")
  usrName.innerHTML = "";

  const usrUserName = document.createElement('p')
  usrUserName.classList.add("username")
  usrUserName.innerText = "";

  const usrLocation = document.createElement('p')
  usrLocation.innerHTML = `Profile: `;

  const usrProfile = document.createElement('p')
  usrProfile.innerHTML = `Profile: `

  const usrPageURL = document.createElement('a')
  usrPageURL.href = "";
  usrPageURL.innerText = "";

  const usrFollowers = document.createElement('p')
  usrFollowers.innerText = "";

  const usrFollowing = document.createElement('p')
  usrFollowing.innerText = ;

  const usrBio = document.createElement('p')
  usrBio.innerText = ;

  // Assemble the elements
  theCard.appendChild(usrAvatar)
  theCard.appendChild(usrCardInfo)

  usrCardInfo.appendChild(usrName)
  usrCardInfo.appendChild(usrUserName)
  usrCardInfo.appendChild(usrLocation)
  usrCardInfo.appendChild(usrProfile)
  usrProfile.appendChild(usrPageURL)
  usrCardInfo.appendChild(usrFollowers)
  usrCardInfo.appendChild(usrFollowing)
  usrCardInfo.appendChild(usrBio)



  return myComponent;
}

const theCards = document.querySelector('.cards')
theCards.appendChild(avatar)

// This will return my card at this time
// theCards.appendChild(gitComponent(gitData))






/*
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
