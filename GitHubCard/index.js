import axios from 'axios'



axios.get('https://api.github.com/users/purefallen11')
  .then(res => {
        console.log(res)
        userDiv.appendChild(cardMaker(res.data) )
      })
        .catch(err => {
        console.log(err)
  })


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
const cardMaker = (data) => {
  //creating elements
  const mainDiv =document.createElement("div")
  const img = document.createElement("img")
  const cardInfo = document.createElement("div")
  const userName = document.createElement("h3")
  const actualUserName = document.createElement("p")
  const location = document.createElement("p")
  const profile = document.createElement("p")
  const addressLink = document.createElement("a")
  const followers = document.createElement("p")
  const following = document.createElement("p")
  const bio = document.createElement("p")

  //adding content
  img.src = data.avatar_url
  userName.textContent = data.name
  location.textContent = data.location
  profile.textContent = "Profile : "
  addressLink.setAttribute("href", data.html_url)
  addressLink.setAttribute("target", "_blank")
  addressLink.innerHTML = "Visit my github"
  followers.textContent = "followers" + " " + data.followers
  following.textContent = "following" + " " + data.following
  bio.textContent = data.bio

  //appending children
  mainDiv.appendChild(img)
  mainDiv.appendChild(cardInfo)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(actualUserName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(addressLink)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  //adding styling classes
  mainDiv.classList.add("card")
  cardInfo.classList.add("card-info")
  userName.classList.add("name")
  actualUserName.classList.add("username")

  return mainDiv
}

const userDiv = document.querySelector(".cards")

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
