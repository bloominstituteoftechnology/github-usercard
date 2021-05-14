/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'
// axios
// .get("https://api.github.com/users/anushazia")
// .then((response) => {
//   const responseData = response.data
//   entryPoint.appendChild(gitHubCardMaker(responseData))
// })
// .catch(error => console.log(error))
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
const entryPoint = document.querySelector('.card')
axios
.get("https://api.github.com/users/anushazia")
.then(response => {
  const userData = response.data
  entryPoint.appendChild(gitHubCardMaker)
})
.catch(error => console.log(error))



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
  'PVigar88',
  'aburn7577',
  'Rachel311',
  'MatthiasBakken',
  'mikelovelace',
  'hanselviva',
  'chisao101',
  'tdubs42',
  'stu-wd'
];

followersArray.forEach(Element => {
  axios
  .get(`https://api.github.com/users/${Element}`)
  .then(futureData => {
    const otherUserData = futureData.data
    entryPoint.appendChild(gitHubCardMaker)
  })
  .catch(error => console.log('error'))
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
function gitHubCardMaker(object) {
//instansiating the elements
  const userCard = document.createElement('div')
    const image = document.createElement('img')
    const cardInfo = document.createElement('div')
      const name = document.createElement('h3')
      const userName = document.createElement('p')
      const location = document.createElement('p')
      const profile = document.createElement('p')
        const gitHubUserUrl = document.createElement('a')
      const followers = document.createElement('p')
      const following = document.createElement('p')
      const bio = document.createElement('p')
  //creating class lis=-093  
  userCard.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')

  //setting text content and attributes
  image.src = object.avatar_url
  name.textContent = object.name
  userName.textContent = object.login
  location.textContent = object.location
  profile.textContent = `Location: ${object.location}`
  gitHubUserUrl.href = object.html_url
  gitHubUserUrl.textContent = object.html_url
  followers.textContent = `Followers: ${object.followers}`
  following.textContent = `Following: ${object.following}`
  bio.textContent = `Bio: ${object.bio}`
//creating the heirarchy
  userCard.append(image)
  userCard.append(cardInfo)
    cardInfo.append(name)
    cardInfo.append(userName)
    cardInfo.append(location)
    cardInfo.append(profile)
      profile.append(gitHubUserUrl)
    cardInfo.append(followers)
    cardInfo.append(following)
    cardInfo.append(bio)

//return
  return userCard
}

// const card = gitHubCardMaker({
//   imageURL: "https://avatars.githubusercontent.com/u/36708362?v=4"
// })

// entryPoint.appendChild(card)
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
