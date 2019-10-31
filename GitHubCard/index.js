/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


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


function cardCreator(fArray){
  
  //definition

  const aCard = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const theName = document.createElement('h3')
  const theUsername = document.createElement('p')
  const theLocation = document.createElement('p')
  const theProfile = document.createElement('p')
  const linkToProfile = document.createElement('a')
  const followerCount = document.createElement('p')
  const followingCount = document.createElement('p')
  const userBio = document.createElement('p')

  //class

  
  aCard.classList.add('card')
  cardInfo.classList.add('card-info')
  theUsername.classList.add('username') 
  theName.classList.add('name')

  //content
  image.src = fArray.avatar_url
  theName.textContent = fArray.name
  theUsername.textContent = fArray.login
  theLocation.textContent = `Location: ${fArray.location}`
  theProfile.textContent = `Profile: `
  linkToProfile.textContent = fArray.html_url
  linkToProfile.href = fArray.html_url
  
  followerCount.textContent = `Followers Count: ${fArray.followers}`
  followingCount.textContent = `Following Count: ${fArray.following}`
  userBio.textContent = `Bio: ${fArray.bio}`

  // structure
  aCard.appendChild(image)
  aCard.appendChild(cardInfo)
  
  cardInfo.appendChild(theName)
  cardInfo.appendChild(theUsername)
  cardInfo.appendChild(theLocation)
  cardInfo.appendChild(theProfile)  
  cardInfo.appendChild(followerCount)
  cardInfo.appendChild(followingCount)
  cardInfo.appendChild(userBio)
  theProfile.appendChild(linkToProfile)

  return aCard

}

axios.get('https://api.github.com/users/zimashima/')
  .then(resp =>{
    document.querySelector('.cards').appendChild(cardCreator(resp.data))
  })
  .catch(err=>{
    console.log('ERROR!')
  })


  //stretch goal
axios.get('https://api.github.com/users/zimashima/followers').then( response => {
  response.data.forEach(follower=>{
    axios.get(follower.url)
      .then(res =>{
        document.querySelector('.cards').appendChild(cardCreator(res.data))
      })
      .catch(err2 =>{
        console.log('ERROR!')
      })
  })
})






/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
