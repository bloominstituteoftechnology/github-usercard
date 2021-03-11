import axios from 'axios';


const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name> test
*/
const header = document.querySelector('.header')

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
    .then(result => {
      cardContainer.appendChild(gitCards(result.data))
    })
})

const cardContainer = document.querySelector('.cards')

axios.get('https://api.github.com/users/wzd200')
.then(result => {
  const willGitData = gitCards(result.data)
  console.log(result.data)
  cardContainer.appendChild(willGitData)
  console.log(result.data)
})
.catch(error => {
  console.log('oops, something went wrong', error)
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

axios.get('https://api.github.com/users/wzd200')
  .then(response => {
    response.data.forEach(item => {
      let card = gitCards(item);
      cardContainer.append(card);

    })
  })
  .catch(error => {
    console.log('There was an error')
  })

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card"> done
      <img src={image url of user} /> done
      <div class="card-info"> done
        <h3 class="name">{users name}</h3> done
        <p class="username">{users user name}</p> done
        <p>Location: {users location}</p> done
        <p>Profile: done
          <a href={address to users github page}>{address to users github page}</a> done
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitCards(data) {
  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card')

  const cardImg = document.createElement('img')
  cardImg.src = `${data.avatar_url}`
  cardDiv.appendChild(cardImg)

  const cardInfoDiv = document.createElement('div')
  cardInfoDiv.classList.add('card-info')
  cardDiv.appendChild(cardInfoDiv)

  const cardH3 = document.createElement('h3')
  cardH3.classList.add('name')
  cardH3.textContent = `${data.name}`
  cardInfoDiv.appendChild(cardH3)

  const cardUsername = document.createElement('p')
  cardUsername.classList.add('username')
  cardUsername.textContent = `${data.login}`
  cardInfoDiv.appendChild(cardUsername)

  const cardLocation = document.createElement('p')
  cardLocation.textContent = `Location: ${data.location}`
  cardInfoDiv.appendChild(cardLocation)

  const cardProfile = document.createElement('p')
  cardProfile.textContent = 'Profile: '
  cardInfoDiv.appendChild(cardProfile)

  const cardUserLink = document.createElement('a')
  cardUserLink.textContent = `${data.html_url}`
  cardProfile.appendChild(cardUserLink)

  const cardFollowers = document.createElement('p')
  cardFollowers.textContent = `${data.followers}`
  cardInfoDiv.appendChild(cardFollowers)

  const cardFollowing = document.createElement('p')
  cardFollowing.textContent = `${data.following}`
  cardInfoDiv.appendChild(cardFollowing)

  const cardBio = document.createElement('p')
  cardBio.textContent = `${data.bio}`
  cardInfoDiv.appendChild(cardBio)

  return cardDiv;

}

//l
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
