/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/luishrd')
.then(response=>{
  console.log(response);
  const cards = document.querySelector('.cards');
  cards.append(createCard(response.data));
  getFollowers(response);
})
.catch(error=>{
  console.log(error);
  
});

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

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
/* 
followersArray.forEach(follower=>{
  axios.get(`https://api.github.com/users/${follower}`)
    .then(response=>{
      console.log(response);
      const cards = document.querySelector('.cards');
      cards.append(createCard(response.data));
    })
    .catch(error=>{
      console.log(error);
    });
})
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
function createCard(obj){
  function checkIfNull(str){
    if(str) return str;
    return '';
  }
  //Create HTML
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<img src=${checkIfNull(obj.avatar_url)} />
  <div class="card-info">
    <h3 class="name">${checkIfNull(obj.name)}</h3>
    <p class="username">${obj.login}</p>
    <p>Location: ${checkIfNull(obj.location)}</p>
    <p>Profile:  
      <a href=${obj.html_url}>${obj.html_url}</a>
    </p>
    <p>Followers: ${obj.followers}</p>
    <p>Following: ${obj.following}</p>
    <p>Bio: ${checkIfNull(obj.bio)}</p>
  </div>`;
  //Create button
  const button = document.createElement('span');
  button.addEventListener('click', event=>{
    
  })
  return card;
}

function getFollowers(obj){
  axios.get(obj.data.followers_url)
    .then(response=>{
      console.log(response);
      const cards = document.querySelector('.cards');
      response.data.forEach(follower=>{
        axios.get(follower.url)
          .then(response=>{
            cards.append(createCard(response.data));
          })
          .catch(error=>{
            console.error(error);
            
          });
      })
      return response;
    })
    .catch(error=>{
      console.log(error);
      
    })
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
