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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/






// axios.get('https://api.github.com/users/zpallday')
// .then((data) => {
//   cardCon.appendChild(createCard(data.data));
//   console.log(data);
// })
// .catch((data) => {
//   console.log('data not available')
// });

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd','bigknell','zpallday' ];

followersArray.forEach(name => {
  let cardCon = document.querySelector('.cards');
  axios.get(`https://api.github.com/users/${name}`)
  .then(user => {
    cardCon.appendChild(createCard(user.data));
  })
  .catch(error => {
    console.log(error);
  })

})



function createCard(userObj) {
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const fullName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userPro = document.createElement('p');
  const link = document.createElement('p');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio= document.createElement('p');
  const address = document.createElement('a');
 

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  fullName.classList.add('name');
  userName.classList.add('username');
  userImg.setAttribute('src', userObj['avatar_url']);
  address.setAttribute('href', userObj['html_url']);

  fullName.textContent = userObj['name'];
  userName.textContent = userObj['login'];
  userLocation.textContent = 'Location: ' + userObj['location'];
  address.textContent = 'Profile: ' + userObj['html_url'];
  userFollowers.textContent = 'Followers:' +userObj['followers'];
  userFollowing.textContent = 'Following:' +userObj['following'];
  userBio.textContent = 'Bio:' + userObj['bio'];



   card.appendChild(userImg)
   card.appendChild(cardInfo)
   cardInfo.appendChild(fullName)
   cardInfo.appendChild(userName)
   cardInfo.appendChild(userLocation)
   link.appendChild(address)
   cardInfo.appendChild(userPro)
   cardInfo.appendChild(link)
   cardInfo.appendChild(userFollowers)
   cardInfo.appendChild(userFollowing)
   cardInfo.appendChild(userBio)







   return card;
}
  

