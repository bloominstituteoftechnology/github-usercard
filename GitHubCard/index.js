import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/miketillman95")
.then(response => {
console.log(response)
})
.catch( err => {
console.log(err)
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
 const grabData = (event) => {
  axios.get("https://api.github.com/users/miketillman95")
  .then(response => {
  console.log(response)
  })
  .catch( err => {
  console.log(err)
  })
    event.append(".cards")
} 

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
  "portsigns",
"theprajin",
"sulemanmalik03",
"ahmetabdi",
"shayanzare",
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
function domCreate (dom){
const card = document.createElement("div")
  card.classList.add(".card")

    const pic = document.createElement('img')
      pic.src = "https://api.github.com/users/miketillman95"

        const header = document.createElement('h3')
        header.classList.add('.name')
        header.textContent = grabData.username

          const content1 = document.createElement("p")
          content1.classList.add('.username')
          content1.textContent = 

           const content2 = document.createElement("p")
              content2.textContent.add(`Location: ${grabData.location}`)

                const content3 = document.createElement("p")
                  const anchor = document.createElement('a')
                    content3.addel

                      const content3 = document.createElement("p")
                        content3.textContent.add()
                  
                            const content4 = document.createElement("p")
                               content4.textContent.add() 

                               const content4 = document.createElement("p")
                               content4.textContent.add(`Bio: ${}`) 
    }
    }