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

const followersArray = [];

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

function followerCard(imgsrc, name, login, location, URL, followers, following, bio){
  //new Elements in order of how they appear above. 
  const newFollowerCard = document.createElement('div');
  const followerImg = document.createElement('img');
    const followerInformation = document.createElement('div')
    const followerUN = document.createElement('h3');
    const followerGitUN = document.createElement('p');
    const followerLocation = document.createElement('p')
    const followerGitProfile = document.createElement('p');
      const profileLink = document.createElement('a');
    const userFollowerCount = document.createElement('p');
    const userFollowing = document.createElement('p');
    const userBio = document.createElement('p');


  //Classes to new elements. 
  newFollowerCard.classList.add('card');
  followerInformation.classList.add('card-info');
  followerUN.classList.add('name');
  followerGitUN.classList.add('username');

  //content for each element
  followerImg.src = imgsrc;
    followerUN.textContent = name;
    followerGitUN.textContent = login;
    followerLocation.textContent = location;
      profileLink.href = URL;
    userFollowerCount.textContent = followers;
    userFollowing.textContent = following;
    userBio.textContent = bio;

  //Append and building the DIV
  newFollowerCard.appendChild(followerImg);
  newFollowerCard.appendChild(followerInformation);
    followerInformation.appendChild(followerUN);
    followerInformation.appendChild(followerGitUN);
    followerInformation.appendChild(followerLocation);
    followerInformation.appendChild(followerGitProfile);
      followerGitProfile.appendChild(profileLink);
    followerInformation.appendChild(userFollowerCount);
    followerInformation.appendChild(userFollowing);
    followerInformation.appendChild(userBio);

  return newFollowerCard;

}
// //TESTING to make sure the function works. 
// const newGitFollower = followerCard();
// console.log(newGitFollower);
//My own Card
axios
  .get('https://api.github.com/users/ChiragThesia')
  .then(response =>{
    const gitUserInfo = response.data;
    const newGitCard = followerCard(gitUserInfo.avatar_url, gitUserInfo.name, gitUserInfo.login,
      gitUserInfo.location, gitUserInfo.URL, gitUserInfo.followers, gitUserInfo.following, 
      gitUserInfo.bio);

    const cards = document.querySelector('.cards');
    cards.appendChild(newGitCard);
  })


//My Follower's Cards
axios
  .get('https://api.github.com/users/ChiragThesia/followers')
  .then(response =>{
    const gitUserInfo = response.data;
    const myFollowerCards = followerCard(gitUserInfo.avatar_url, gitUserInfo.name, gitUserInfo.login,
      gitUserInfo.location, gitUserInfo.URL, gitUserInfo.followers, gitUserInfo.following, 
      gitUserInfo.bio);
      
      return myFollowerCards;
  })
  .then(response =>{
    const cards = document.querySelector('.cards');
    cards.appendChild(response);
  })
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
