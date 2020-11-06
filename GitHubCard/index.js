import axios from 'axios';


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function gitHubName(username) {
    axios.get('https://api.github.com/users/' + username)
        .then(response => {
            console.log(response);
            console.log(response.data);
            const card = cardMaker(response.data);
            document.querySelector('div.cards').appendChild(card);
        }).catch(error => {
            console.log(error.response);
        });
}
gitHubName('bipin-shrestha');

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
followersArray.forEach(follower => {
    gitHubName(follower);
});


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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
function cardMaker(data) {
    const newCard = document.createElement('div');
    newCard.className = 'card';
    const imageCard = document.createElement('img');
    imageCard.src = data.avatar_url;
    newCard.appendChild(imageCard);
    const secondCard = document.createElement('div');
    secondCard.className = 'card-info';
    newCard.appendChild(secondCard);
    const heading3 = document.createElement('h3');
    heading3.className = 'name';
    heading3.textContent = data.name;
    secondCard.appendChild(heading3);
    const paragraphOne = document.createElement('p');
    paragraphOne.className = 'username';
    paragraphOne.textContent = data.login;
    secondCard.appendChild(paragraphOne);
    const paragraphTwo = document.createElement('p');
    paragraphTwo.textContent = "Locataion: " + data.location;
    secondCard.appendChild(paragraphTwo);
    const paragraphThree = document.createElement('p');
    paragraphThree.textContent = 'Profile: ';
    secondCard.appendChild(paragraphThree);
    const profileAddress = document.createElement('a');
    profileAddress.href = data.html_url;
    profileAddress.textContent = data.html_url;
    paragraphThree.appendChild(profileAddress);
    const followersList = document.createElement('p');
    followersList.textContent = 'Followers: ' + data.followers;
    secondCard.appendChild(followersList);
    const followingList = document.createElement('p');
    followingList.textContent = "Following: " + data.following;
    secondCard.appendChild(followingList);
    const biograph = document.createElement('p');
    biograph.textContent = 'Bio:' + data.bio;
    secondCard.appendChild(biograph);
    return newCard;
}