/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'

axios.get(`https://api.github.com/users/Lilia1989`)
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

const followersArray = [
  'tetondan',
'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

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
function gitAcountMaker(objectData) {
  //instantiat elements
  const card = document.createElement('div')
  const imgsrc = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileAnchor = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
  
  card.appendChild(imgsrc)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  profile.appendChild(profileAnchor)

  card.classList.add('card')
  imgsrc.classList.add('img')
  profileAnchor.classList.add('profileAnchor')
  card.textContent = "Lilia's Github"
  imgsrc.src = objectData.img
  bio.classList.add('bio')
  bio.textContent = objectData.bio
  profileAnchor.attributes = objectData.html_url
  name.textContent = objectData.name
  username.textContent = objectData.login
 
  card.addEventListener('click', () => {
    card.classList.toggle('selected')
  })
  return card;
  }
  
  const postiionRight = document.querySelector('.card')
  postiionRight.appendChild(gitAcountMaker(`https://api.github.com/users/Lilia1989`))
  /*
    List of LS Instructors Github username's:
      tetondan
      dustinmyers
      justsml
      luishrd
      bigknell
  */
  const getAccount = (acountName) => {
    axios.get(`https://api.github.com/users/${acountName}`)
    .then(({data}) => {
      const gitAcount = data.message[0]
      const card = gitActMaker({gitAcount})
      postiionRight.appendChild(card)
    })
    .catch(err => console.log(err))
  }
  console.log(getAccount('tetondan'))
  const fetchAccount = (acountName) => {
    fetch(`https://api.github.com/users/${acountName}`)
    .then(response => response.json())
    .then(data => {
      console.log('data', data)
      const gitAcount = data.message[0]
      const card = gitActMaker({gitAcount})
      postiionRight.appendChild(card)
    })
    .catch(err => console.log(err))
  }
  followersArray.forEach(item => {
    const newAcount = axios.get(`https://api.github.com/users/${item}`)
    postiionRight.appendChild(newAcount)
  })
  console.log(fetchAccount)