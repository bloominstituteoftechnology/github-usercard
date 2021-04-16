import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

  axios.get('https://api.github.com/users/tasnim-rahman')
    .then(response => {
      console.log(response.data)
      const dat = response.data
      const userCards = document.querySelector('.cards')
      console.log(userCards)
      userCards.appendChild(userCard(dat))
      followersArray.forEach((follower) => {

        axios.get('https://api.github.com/users/' + follower)
          .then(response => {
            console.log(response.data)
            userCards.appendChild(userCard(response.data))
          })
          .catch(err => {
            console.log(err)
          })
      })

    })
    .catch(error => {
      console.log(error)
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

    function userCard(information) {
      console.log(information)
      let card = document.createElement('div')
      let image = document.createElement('img')
      let cardInfo = document.createElement('div')
      let name = document.createElement('h3')
      let userName = document.createElement('p')
      let myLocation = document.createElement('p')
      let myProfile = document.createElement('p')
      let address = document.createElement('a')
      let myFollowers = document.createElement('p')
      let myFollowing = document.createElement('p')
      let myBio = document.createElement('p')

      card.classList.add('card')
      image.src = information.avatar_url
      cardInfo.classList.add('card-info')
      name.classList.add('name')
      userName.classList.add('username')
      address.href = information.html_url

      card.appendChild(image)
      card.appendChild(cardInfo)
      cardInfo.appendChild(name)
      cardInfo.appendChild(userName)
      cardInfo.appendChild(myLocation)
      cardInfo.appendChild(myProfile)
      cardInfo.appendChild(myFollowers)
      cardInfo.appendChild(myFollowing)
      cardInfo.appendChild(myBio)
      myProfile.appendChild(address)
      console.log(card)

      name.textContent = information.name
      userName.textContent = information.login
      myLocation.textContent = "location: " + information.location
      myFollowers.textContent = "followers: " + information.followers
      myFollowing.textContent = "following: " + information.following
      myBio.textContent = "bio: " + information.bio

      let theCards = document.querySelector('div .cards')
      return card
    }
  

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
