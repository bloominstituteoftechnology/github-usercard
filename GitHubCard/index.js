/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/achaselittlefield")
.then((resp) =>{
  document.querySelector(".cards")
.appendChild(gitHubAccount(resp.data))  
})

.catch((err) =>{
  console.log('Error!', err)
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

const followersArray = [];

axios.get("https://api.github.com/users/achaselittlefield")
.then(() =>{
  return followersArray.concat(
  ["cameronyoung94",
  "sarahrosecooper",
  "ChadDiaz",
  "LTims080913",
  "tippitytapp"])
})
.then((followers) =>{
  followers.map((followers) =>{
    axios.get(`https://api.github.com/users/${followers}`)
    .then((resp2) =>{
      document.querySelector(".cards")
      .appendChild(gitHubAccount(resp2.data)); 
    })
    .catch((err) =>{
      console.log('Error!', err)
    })
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
const gitHubAccount = (data) => {
  const divCard = document.createElement('div')
  divCard.classList.add("card");
  //created 1st div and class

  const imageTag = document.createElement('img')
  imageTag.src = data.avatar_url;
  divCard.appendChild(imageTag)

  //create image tag
  const divInfo = document.createElement('div')
  divInfo.classList.add("card-info");
  //created 2nd div and class

  const h3Tag = document.createElement('h3')
  h3Tag.classList.add("name");
  h3Tag.textContent = data.name;
  divInfo.appendChild(h3Tag)
  //created h3 tag and class

  const pUserName = document.createElement('p')
  pUserName.classList.add("username")
  pUserName.textContent = data.login;
  divInfo.appendChild(pUserName)
  //created p tag and class

  const pLocation = document.createElement('p')
  pLocation.textContent = `Location: ${data.location}`;
  divInfo.appendChild(pLocation)
  //added location

  const pProfile = document.createElement('p')
  pProfile.textContent = `Profile: `;
  divInfo.appendChild(pProfile)
  //Profile with Anchor Tag
  const anchorAdress= document.createElement('a')
  anchorAdress.textContent = data.html_url;
  pProfile.appendChild(anchorAdress)
// Url for Anchor Tag
  const pFollowers = document.createElement('p')
  pFollowers.textContent = `Followers: ${data.followers}`
  divInfo.appendChild(pFollowers)
  //# of Followers 
  const pFollowing = document.createElement('p')
  pFollowing.textContent = `Following: ${data.following}`
  divInfo.appendChild(pFollowing)
  // # of people I am following
  const pBio = document.createElement('p')
  pBio.textContent = `Bio: ${data.bio}`
  divInfo.appendChild(pBio)
  //Bio
  divCard.appendChild(divInfo);
  //Final append
  return divCard

}
console.log('is this working?')

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
