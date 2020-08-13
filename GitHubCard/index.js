

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

const followersArray = ['mohamed-essamaali','tetondan','dustinmyers','justsml', 'luishrd','bigknell'                
      ];

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
const createUser = user=>{

  const card = document.createElement('div');
  card.classList.add('card')
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  const name = document.createElement('h3');
  name.classList.add('name')
  const username = document.createElement('p');
  username.classList.add('username')
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  //add content
  userImg.src=user.avatar_url
  // name.textContent = user.login
  username.textContent = user.login
  location.textContent=`Location: ${user.location}`;
  profileLink.href = user.url;
  profile.textContent = `Profile: ${user.url}`
  
  followers.textContent =`Follwers:  ${user.followers}`;
  following.textContent= `Following: ${user.following}`
  bio.textContent = `Bio: ${user.bio}`


//append into dom
  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio)
  console.log(card);

return card

}

const cards = document.querySelector('.cards')
followersArray.map(el=>{
  axios
  .get(`https://api.github.com/users/${el}`)
  .then(res=>{
    console.log(res.data)
    cards.appendChild(createUser(res.data))
  })
  .catch(err=>{
    console.log('errors', err)
  })
})

