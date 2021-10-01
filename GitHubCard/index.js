import 'regenerator-runtime/runtime'  // To fix regeneratorRuntime is not defined` error
import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// const assignInfo = myInfo => {
//   const test = document.querySelector('.header')
//   const para = document.createElement('p')
//   if (myInfo) {
//     const info = myInfo.data
//     para.textContent = `${info.name}`
//   }
//   test.appendChild(para)
// }











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

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "bryantIT"
];

const getMyGithub = async () => {
  try {
    return await axios.get('https://api.github.com/users/cheyenneb96')
  } catch (error) {
    console.log(error)
  }
}

const getMyFollowers = async (follower) => {
  try {
    return await axios.get(`https://api.github.com/users/${follower}`)
  } catch (error) {
    console.log(error)
  }
}

const eachFollower = async () => {
  let responses = []
  for (const followerInfo of followersArray) {
    const response = await getMyFollowers(followerInfo)
    responses.push(response.data)
  }
  return responses
}

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

function hubMaker(myProfile, theirProfile) {
  let allUsers = []
  theirProfile.forEach((profile) => {
    allUsers.push(profile)
  })
  allUsers.unshift(myProfile.data)
  allUsers.map(user => {
  const cards = document.querySelector('.cards');
  const card = document.createElement('div')
  const info = document.createElement('div')
  const name = document.createElement('h3')
  const subTitle = document.createElement('h4')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const link = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
  const avatar = document.createElement('img')

card.classList.add('card')
info.classList.add('card-info')
name.classList.add('name')
username.classList.add('username')

name.textContent = user.name
avatar.src = user.avatar_url;
username.textContent = user.login;
location.textContent = user.location;
link.textContent = user.html_url;
followers.textContent = user.followers;
following.textContent = user.following;
bio.textContent = user.bio;
subTitle.textContent = "It's Me!!"
 cards.appendChild(card)
 card.appendChild(avatar)
 card.appendChild(info)
 info.appendChild(name)
 if (user.login === 'Cheyenneb96') {
   info.appendChild(subTitle)
 }
 info.appendChild(username)
 info.appendChild(location)
 info.appendChild(profile)
 info.appendChild(followers)
 info.appendChild(following)
 info.appendChild(bio)
 profile.appendChild(link)




return card
  })
}

const runHubMaker = async () => {
  hubMaker(await getMyGithub(), await eachFollower())
}

runHubMaker()

console.log(
  "%cI've been trying to reach you about your car's extended warranty",
  "color:white;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold"
  )