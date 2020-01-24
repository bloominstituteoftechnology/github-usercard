/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/




const test = axios.get("https://api.github.com/users/Tereamarie")
     console.log(test)
    .then(response => {
   console.log('.then fires when SUCCSESS happens')
  console.log('res', response)
    console.log('res.data.message', response.data.message)
    
    response.data.message.forEach(url => {
      const newDevCard = devCard(url)
      console.log(newDevCard)
      
      
      cardsPointInHTML.appendChild(newDevCard)
    })
  })
.catch(error => {
    console.log('.catch fires when ERROR happens')
    console.log('error!!!', error)
})

function cardCreator(obj) {
 
  // Create Elements
   
  const newCard = document.createElement('div');
   
  const newImg = document.createElement('img');
   
  const cardInfo = document.createElement('div');
   
  const name = document.createElement('h3');
   
  const userName = document.createElement('p');
   
  const location = document.createElement('p');
   
  const profile = document.createElement('p');
   
  const profileLink = document.createElement('a');
   
  const followers = document.createElement('p');
   
  const following = document.createElement('p');
   
  const bio = document.createElement('p');
 }

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


