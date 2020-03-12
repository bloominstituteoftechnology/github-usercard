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

 followersArray = [];

axios
    .get('https://api.github.com/users/jcdaly97')

    .then( response1 => {
        console.log(response1);
        document.querySelector('.cards').append(cardCreator(response1.data));

        axios
        .get(response1.data.followers_url)
        .then(response2=> {
          console.log(response2);
          response2.data.forEach(follower => {
          document.querySelector('.cards').append(cardCreator(follower));
          });
        })
        .catch(err2 => {
          console.log('the follower data was not returned' + err2);
        })

    })

    .catch( err1 => {
        console.log('the data was not returned' + err1);
    })

function cardCreator(user){
  //create objects
  const 
  card = document.createElement('div'),
  userImg = document.createElement('img'),
  cardInfo = document.createElement('div'),
  name = document.createElement('h3'),
  userName = document.createElement('p'),
  location = document.createElement('p'),
  profile = document.createElement('p'),
  profileLink = document.createElement('a',)
  followers = document.createElement('p'),
  following = document.createElement('p'),
  bio = document.createElement('p');
  //fill objects with content
  userImg.src = user.avatar_url;
  name.textContent = user.name;
  userName.textContent = user.login;
  location.textContent = `Location: ${user.location}`;
  profile.textContent = 'Profile: ';
  profileLink.textContent = user.url;
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio}`;
  //give elements their classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  //setup the structure
  card.append(userImg);
  card.append(cardInfo);
  cardInfo.append(name);
  cardInfo.append(userName);
  cardInfo.append(location);
  cardInfo.append(profile);
  profile.append(profileLink);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);
  //return card
  return card;
}

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
