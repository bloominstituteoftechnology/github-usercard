/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
{/* 
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
</div> */}

const Card = (imgSrc, name, username, location, url, followerCount, followingCount, userBio) => {
  // This creates the user card container
  const div = document.createElement('div')
  div.classList.add('card')
  
  const profileImage = document.createElement('img')
  profileImage.src = imgSrc
  div.appendChild(profileImage)

  // Here we create the nested div for the user info
  const nestedDiv = document.createElement('div')
  nestedDiv.classList.add('card-info')
  div.appendChild(nestedDiv)

  const nameTag = document.createElement('h3')
  nameTag.classList.add('username')
  nameTag.textContent = name
  nestedDiv.appendChild(nameTag)

  const userTag = document.createElement('p')
  userTag.classList.add('username')
  userTag.textContent = username
  nestedDiv.appendChild(userTag)

  const userLocation = document.createElement('p')
  userLocation.textContent = `Location: ${location}`
  nestedDiv.appendChild(userLocation)

  const profile = document.createElement('p')
  profile.textContent = `Profile: `
  nestedDiv.appendChild(profile)

  const githubPage = document.createElement('p')
  githubPage.textContent = url
  profile.appendChild(githubPage)

  const followers = document.createElement('p')
  followers.textContent = `Followers: ${followerCount}`
  nestedDiv.appendChild(followers)

  const following = document.createElement('p')
  following.textContent = `Following: ${followingCount}`
  nestedDiv.appendChild(following)

  const bio = document.createElement('p')
  bio.textContent = `Bio: ${userBio}`
  nestedDiv.appendChild(bio)

  return div
}

axios.get('https://api.github.com/users/gcolegonzales')
  .then(response => {
    const info = response.data
    const newCard = Card(info.avatar_url, info.name, info.login, info.location, info.url, info.followers, info.following, info.bio)

    let cards = document.querySelector('.cards')
    cards.appendChild(newCard)
  })

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

const followersArray = ['garretthogan', 'LoralieFlint', 'tetondan', 'justsml', 'bigknell'];

const getUser = (array) => {
  array.forEach((user) => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      const info = response.data
      const otherCard = Card(info.avatar_url, info.name, info.login, info.location, info.url, info.followers, info.following, info.bio)
      return otherCard
    })
    .then(response => {
      const cards = document.querySelector('.cards')
      cards.appendChild(response)
    })
  })
}

getUser(followersArray)

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
