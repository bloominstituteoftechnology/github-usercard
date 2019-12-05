/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/scurtis6')
  .then(response =>{
    console.log(response);
    const cards = document.querySelector('.cards');
    cards.append(createCard(response.data))
  })
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
followersArray.forEach(item =>{
  axios.get(`https://api.github.com/users/${item}`)
  .then(response =>{
    console.log(response);
    cards.append(createCard(response.data));
  })
})


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function createCard(object){
  const card = document.createElement('div'),
        img = document.createElement('img'),
        cardInfo = document.createElement('div'),
        name = document.createElement('h3'),
        userName = document.createElement('p'),
        location = document.createElement('p'),
        profile = document.createElement('p'),
        userLink = document.createElement('a'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        bio = document.createElement('p');

        card.append(img);
        card.append(cardInfo);
        cardInfo.append(name);
        cardInfo.append(userName);
        cardInfo.append(location);
        cardInfo.append(profile);
        cardInfo.append(followers);
        cardInfo.append(following);
        cardInfo.append(bio);
        profile.append(userLink);

        card.classList.add('card');
        cardInfo.classList.add('card-info');
        name.classList.add('name');
        userName.classList.add('username');

        img.src = object.avatar_url;
        name.textContent = object.name;
        userName.textContent = object.login;
        location.textContent = `Location: ${object.location}`;
        profile.textContent = 'Profile:';
        userLink.href = object.html_url;
        followers.textContent = `Followers: ${object.followers}`;
        following.textContent = `Following: ${object.following}`;
        bio.textContent = `Bio: ${object.bio}`


        return card;
}

// const card = document.querySelector('.card');
// card.forEach(object =>{

// })

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
