/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const gitUrl = "https://api.github.com/users/Crimson-beast"
axios.get(gitUrl)
  .then((res => {
    console.log(res.data ,'working')
  }))
  .catch(err => {console.log(err)})


  
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
const entryPoint = document.querySelector('.cards')

  axios.get('https://api.github.com/users/Crimson-beast')
  .then(res => {
    entryPoint.appendChild(gitHubCard(res.data))
  })
  .catch(err => console.log(err, 'oops'))



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then(res => {
    entryPoint.appendChild(gitHubCard(res.data))
  })
  .catch(err => console.log(err, 'oops'))

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
function gitHubCard({ name, avatar_url, login, location, html_url, followers, following, bio }) {
  const userCard = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const setName = document.createElement('h3')
  const username = document.createElement('p')
  const locate = document.createElement('p')
  const prof = document.createElement('p')
  const follower = document.createElement('p')
  const setFollowing = document.createElement('p')
  const setBio = document.createElement('p')
  const anchor = document.createElement('a')
  userCard.appendChild(img)
  userCard.appendChild(cardInfo)
  cardInfo.appendChild(setName)
  cardInfo.appendChild(username)
  cardInfo.appendChild(locate)
  prof.appendChild(anchor)
  cardInfo.appendChild(prof)
  cardInfo.appendChild(follower)
  cardInfo.appendChild(setFollowing)
  cardInfo.appendChild(setBio)
  userCard.classList.add('card')
  cardInfo.classList.add('card-info')
  setName.classList.add('name')
  username.classList.add('usename')
  img.setAttribute('src' , avatar_url)
  anchor.setAttribute('href', html_url)
  setName.textContent = name
  username.textContent = login
  locate.textContent = `Location: ${location}`
  anchor.textContent = html_url
  prof.textContent = `Profile: ${anchor}`
  userCard.addEventListener('click', () => {console.log("click activated")})
  follower.textContent = `Followers: ${followers}`
  setFollowing.textContent = `Following: ${following}`
  setBio.textContent = `Bio: ${bio}`

  return userCard
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
