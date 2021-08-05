/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function bigData (name){
  axios.get(`https://api.github.com/users/${name}`)
   .then(res => {
     console.log(res)
     const newCard = cardMaker(res.data);
     document.querySelector('.cards').appendChild(newCard)
   })
   .catch(err => {
    console.error(err);
   })
  }
  
  bigData('LeonelHays')
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

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then(res => {
    console.log('HERE');
    const manyCards = cardMaker(res.data)
    document.querySelector('.cards').appendChild(manyCards)
  })
  .catch(err => {
   console.error(err);
  })
 })

/*List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
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
//select
const cardHolder = document.querySelector('.cards')
function cardMaker(user){
  console.log(user);
  //create
 const card = document.createElement('div');
 const image = document.createElement('img');
 const info = document.createElement('div');
 const logname = document.createElement('h3');
 const username = document.createElement('p');
 const location = document.createElement('p');
 const profile = document.createElement('p');
 const address = document.createElement('a');
 const followers = document.createElement('p');
 const following = document.createElement('p');
 const bio = document.createElement('p');
 profile.textContent = 'Profile: '
 //Child support
 cardHolder.appendChild(card)
 card.appendChild(image)
 card.appendChild(info)
 info.appendChild(logname)
 info.appendChild(username)
 info.appendChild(location)
 info.appendChild(profile)
 //why?
 profile.appendChild(address)
 //y tho?
 info.appendChild(followers)
 info.appendChild(following)
 info.appendChild(bio)
 
 //Classes
card.classList.add('card')
info.classList.add('cardinfo')
logname.classList.add('name')
username.classList.add('username')

 //text
logname.textContent = user.name 
username.textContent = user.login
location.textContent = `Location: ${user.location}`
address.textContent = user.html_url
following.textContent = `Following: ${user.following}`
followers.textContent = `Followers: ${user.followers}`
bio.textContent = `Bio: ${user.bio}`
//image
image.setAttribute('alt', user.name)
image.src = user.avatar_url

//link

 address.setAttribute('href', user.url) 



return card
}





/*List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
