/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


axios.get('https://api.github.com/users/weng7533')
  .then(user => {
    console.log(user);
  })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

axios.get('https://api.github.com/users/weng7533')
  .then(user => {
    const ACard = cardCreator(user);
    document.querySelector('.cards').append(ACard);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  })

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

axios.get('https://api.github.com/users/weng7533/followers')
  .then(followers => {
    console.log(followers)
    followers.data.forEach(follower => {


      axios.get(follower.url)
        .then(user => {
          const ACard = cardCreator(user);
          document.querySelector('.cards').append(ACard);
        })
        .catch(error => {
          console.log("The data was not returned", error);
        })

    }
    )
  })
  .catch(error => {
    console.log("The data was not returned", error);
  })





const followersArray = [
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell'
];




followersArray.forEach(userLink => {
  axios.get(userLink)
    .then(user => {
      const ACard = cardCreator(user);
      document.querySelector('.cards').append(ACard);
    })
    .catch(error => {
      console.log("The data was not returned", error);
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
        <a href={address to users github page}>{address to users github page}</a>
      </p>
      <p>Followers: {users followers count}</p>
      <p>Following: {users following count}</p>
      <p>Bio: {users bio}</p>
    </div>
</div>
*/

function cardCreator(UserObject) {
  const card = document.createElement('div'),
    img = document.createElement('img'),
    cardInfo = document.createElement('div'),
    name = document.createElement('h3'),
    userName = document.createElement('p'),
    location = document.createElement('P'),

    Profile = document.createElement('p'),
    addressToUsersGithubPage = document.createElement('a'),

    followers = document.createElement('p'),
    following = document.createElement('p'),
    bio = document.createElement('p');

  card.append(img);
  card.append(cardInfo);

  cardInfo.append(name);
  cardInfo.append(userName);
  cardInfo.append(location);
  cardInfo.append(Profile);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);



  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')

  img.setAttribute('src', UserObject.data.avatar_url)

  name.textContent = UserObject.data.name;
  userName.textContent = UserObject.data.login;
  location.textContent = `Location: ${UserObject.data.location}`;

  Profile.textContent = `Profile: `;
  addressToUsersGithubPage.setAttribute('href', UserObject.data.html_url);
  addressToUsersGithubPage.textContent = UserObject.data.html_url;

  Profile.append(addressToUsersGithubPage);

  followers.textContent = `Followers: ${UserObject.data.followers}`;
  following.textContent = `Following: ${UserObject.data.following}`;
  bio.textContent = `Bio: ${UserObject.data.bio}`;


  return card;
}

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
