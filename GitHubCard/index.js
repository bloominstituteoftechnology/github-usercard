/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/coriwooley')
  .then(response => {
    document.querySelector('.cards').appendChild(githubUser(response.data))
  })
  .catch(error => console.log(error))
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

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach((user) => {
  axios.get('https://api.github.com/users/' + user)
  .then(response => {
    document.querySelector('.cards').appendChild(githubUser(response.data))
  })
  .catch(error => console.log(error))
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

function githubUser(profileObj){
  const cardDiv = document.createElement('div')
  const userImg = document.createElement('img')
  const cardInfoDiv = document.createElement('div')
  const profileName = document.createElement('h3')
  const profileUsername = document.createElement ('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileLink = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  cardDiv.classList.add('card')
  cardInfoDiv.classList.add('card-info')
  profileName.classList.add('name')
  profileUsername.classList.add('username')

  cardDiv.appendChild(userImg)
  cardDiv.appendChild(cardInfoDiv)
  cardInfoDiv.appendChild(profileName)
  cardInfoDiv.appendChild(profileUsername)
  cardInfoDiv.appendChild(location)
  cardInfoDiv.appendChild(profile)
  profile.appendChild(profileLink)
  cardInfoDiv.appendChild(followers)
  cardInfoDiv.appendChild(following)
  cardInfoDiv.appendChild(bio)

  userImg.src = profileObj.avatar_url

  profileName.textContent = profileObj.name
  profileUsername.textContent = profileObj.login
  location.textContent = `Location: ${profileObj.location}`
  profile.textContent = 'Profile:'
  profileLink.textContent = 'Link to Github profile'
  profileLink.href = profileObj.html_url
  followers.textContent = profileObj.followers
  following.textContent = profileObj.following
  bio.textContent = profileObj.bio
  
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

