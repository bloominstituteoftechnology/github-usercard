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

const followersArray = ['Raj Upadhyaya',
                        'ArianaShackelford',
                        'ethyl2',
                        'TinySquid']
                        

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
/*
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


function createCard(object) {

let card = document.createElement('div')
let img =  document.createElement('img')
let cardInfo = document.createElement('div')
let name = document.createElement('h3')
let userName = document.createElement('p')
let loc = document.createElement('p')
let profile = document.createElement('p')
let link = document.createElement('a')
let followers = document.createElement('p')
let following = document.createElement('p')
let bio = document.createElement('p')


card.append(img)
card.append(cardInfo)
cardInfo.append(name)
cardInfo.append(userName)
cardInfo.append(loc)
cardInfo.append(link)
link.append(profile)
cardInfo.append(followers)
cardInfo.append(following)
cardInfo.append(bio)

card.classList.add('card')
img.classList.add('card-img')
profile.classList.add('p')
cardInfo.classList.add('card-info')
name.classList.add('name')
userName.classList.add('user-name')
loc.classList.add('p')
followers.classList.add('p')
following.classList.add('p')
bio.classList.add('p')


img.src = object.data.avatar_url;
name.textContent = object.data.name;
userName.textContent = `Username: ${object.data.login}`
loc.textContent = `Location: ${object.data.location}`
profile.textContent =  object.data.html_url
followers.textContent = `Followers: ${object.data.followers}`
following.textContent = `Following: ${object.data.following}`
bio.textContent = `Bio: ${object.data.bio}`

link.href = object.data.html_url

return card

}


const cards = document.querySelector('.cards');



axios.get("https://api.github.com/users/ksemenza")
.then((response) => {
  createCard(response);
  // console.log(response);
  
  const newCard = createCard(response);
  cards.append(newCard)
})
.catch( error => {
  console.log("the data was not returned", error)
})

axios
.get("https://api.github.com/users/ksemenza/followers")
.then((res) => {
  console.log('returned', res)

  res.data.forEach(element => {

    cards.appendChild(element)
  });

})
.catch( error => {
  console.log("the data was not returned", error)
})






/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
