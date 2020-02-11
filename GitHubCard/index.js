/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let cardParent = document.querySelector('.cards')
//MVP

const followersArray = ['SandersForPresident', 'techforwarren', 'tetondan', 'dustinmyers', 'justsml' ];


// axios.get('https://api.github.com/users/reidysj')
//   .then(response =>{
//     let card = cardMaker(response.data);
//     cardParent.prepend(card);
//     console.log(response.data)
//   })
//   .catch( error => {
//     console.log('Error: ', error);
//   });

//   followersArray.forEach(follower => {
//     axios.get(`https://api.github.com/users/${follower}`)
//     .then(response =>{
//       let card = cardMaker(response.data);
//       cardParent.append(card);
//     })
//     .catch(error => {
//       console.log('Error: ', error);
//     });
//   })


  
axios.get('https://api.github.com/users/tetondan')
.then(response => {
  let card = cardMaker(response.data);
  cardParent.prepend(card);
  return response.data.followers_url;
})
.then(response =>{
  axios.get(response)
  .then(response => {
    response.data.forEach(result => {
      axios.get(result.url)
      .then(response =>{
        let card = cardMaker(response.data);
        cardParent.append(card);
      })
    })
    .catch(error => console.log('Error retrieving url ', error))
  })
  .catch(error => console.log('Error retrieving followers_url ', error))
})
.catch(error => {
  console.log('Error: ', error)
})
  function cardMaker(obj){
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    let userPic = document.createElement('img');
    userPic.src = obj.avatar_url;
    let infoDiv = document.createElement('div');
    infoDiv.classList.add('card-info');
    let name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = obj.name;
    let userName = document.createElement('p');
    userName.classList.add('username');
    userName.textContent = obj.login;
    let location = document.createElement('p');
    location.textContent = `Location: ${obj.location}`;
    let profile = document.createElement('p');
    profile.textContent = `Profile: `;
    let linkToProfile = document.createElement('a');
    linkToProfile.href = obj.html_url;
    linkToProfile.textContent = obj.html_url;
    profile.append(linkToProfile);
    let followers = document.createElement('p');
    followers.textContent = `Followers: ${obj.followers}`;
    let following = document.createElement('p');
    following.textContent = `Following: ${obj.following}`;
    let bio = document.createElement('p');
    bio.textContent = obj.bio;
    let expandButton = document.createElement('p');
    expandButton.classList.add('expandButton');
    expandButton.textContent = 'READ MORE';
    expandButton.addEventListener('click', () => cardDiv.classList.toggle('card-open'))
    infoDiv.append(name, userName, location, profile, followers, following, bio);
    cardDiv.append(userPic, infoDiv,expandButton);

    return cardDiv
  }

  // function followerCardMaker(obj){
    

  // }
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


