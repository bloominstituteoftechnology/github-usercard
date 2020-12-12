import axios from 'axios';
/*
 [x] STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
 //it works!
/*
  [x]STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

   [x] Skip to STEP 3.
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

const followersArray = [{}];//not sure if i'm using this correctly

const existingCardsDivInDom = document.querySelector('div.cards');// This is the container we're adding our created card to

function gitHubCardMaker (someObject){
  console.log('trying to make card w/ this info: ', someObject);
  //CREATE ELEMENTS
  const divMainCard = document.createElement('div');
  //instantiating  
  const imageElement = document.createElement('img');
  const divCardInfo = document.createElement('div');
  const usersNameElement = document.createElement('h3');
  const firstParagraphElementUsersUserName = document.createElement('p');
  const secondParagraphElementLocation = document.createElement('p');
  const thirdParagraphElementProfile = document.createElement('p');
  const fourthParagraphElementFollowers = document.createElement('p');
  const fifthParagraphElementFollowing = document.createElement('p');
  const sixthParagraphElementBio = document.createElement('p');
  const urlAddressElement = document.createElement('a');
 
  //CREATE CLASSES
  firstParagraphElementUsersUserName.classList.add('username');
  divMainCard.classList.add('card');
  divCardInfo.classList.add('card-info');
  usersNameElement.classList.add('name');

  //ADD CONTENT
  imageElement.src = someObject.avatar_url;
  usersNameElement.innerText = someObject.name;
  firstParagraphElementUsersUserName.innerText = someObject.login;
  secondParagraphElementLocation.innerText = `Location: ${someObject.location}`;
  thirdParagraphElementProfile.textContent = 'Profile: ';
  //

  urlAddressElement.href = someObject['html_url'];
  urlAddressElement.textContent = 'GitHubURL';
  fourthParagraphElementFollowers.innerText = someObject.followers;
  fifthParagraphElementFollowing.innerText = someObject.following;
  sixthParagraphElementBio.innerText = `Bio: ${someObject.bio}`;
  
  //APPENDCHILD()
  divMainCard.appendChild(imageElement);
  divMainCard.appendChild(divCardInfo);
  divCardInfo.appendChild(usersNameElement);
  divCardInfo.appendChild(firstParagraphElementUsersUserName);
  divCardInfo.appendChild(secondParagraphElementLocation);
  divCardInfo.appendChild(thirdParagraphElementProfile);
  thirdParagraphElementProfile.appendChild(urlAddressElement);
  divCardInfo.appendChild(fourthParagraphElementFollowers);
  divCardInfo.appendChild(fifthParagraphElementFollowing);
  divCardInfo.appendChild(sixthParagraphElementBio);


  return divMainCard;
}

function getGitHubAccounts(cardMakerCallbackFn) {
  const existingCardsDivInDom = document.querySelector('div.cards');

  // First, we find molly's GitHub info
  axios.get(`https://api.github.com/users/mollybee`)
    .then((mollyGitHub) => { 
      // Then, we create a card using her info
      const mollyAccountInfo = mollyGitHub.data;
      const card = cardMakerCallbackFn(mollyAccountInfo);
      // And add it to the DOM
      existingCardsDivInDom.appendChild(card);

      // Next, we use the "followers_url" we found in her GitHub info
      // to find out who all of her followers are.
      axios.get(mollyAccountInfo.followers_url)
        .then(mollyFollowers => {
          // Now that we found all of molly's followers, we need to
          // iterate over them, and get the data for each of them
          const arrayOfMollyFollowers = mollyFollowers.data;
          console.log('mollys followers: ', mollyFollowers);

          // Iterate over each follower
          arrayOfMollyFollowers.forEach(follower => {
            const followerUsername = follower.login;

            // Get their GitHub info
            axios.get(`https://api.github.com/users/${followerUsername}`)
              .then(followerGitHub => { 

                // Then, we create a card using her info
                const followerAccountInfo = followerGitHub.data;
                const card = cardMakerCallbackFn(followerAccountInfo);
                // And add it to the DOM
                existingCardsDivInDom.appendChild(card);
              });
          });

        });
    });
}

getGitHubAccounts(gitHubCardMaker);

// const mollyCard = gitHubCardMaker(followersArray); //Here I'm calling the function to make a card, passing in the followersarray which holds my info
//And then I store that data in the mollyCard variable, so as to then add it to the DOM, see below.


// existingCardsDivInDom.appendChild(mollyCard);
/*
  [X]STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

   x <div class="card">
   x   <img src={image url of user} />
   x   <div class="card-info">
   x     <h3 class="name">{users name}</h3>
   x     <p class="username">{users user name}</p>
   x     <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const arrayOfGitHubUsernames = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
]

arrayOfGitHubUsernames.forEach(username => {
  const existingCardsDivInDom = document.querySelector('div.cards');

  // First, we find molly's GitHub info
  axios.get(`https://api.github.com/users/${username}`)
    .then((usersGitHubInfo) => { 

      // Then, we create a card using her info
      const userAccountInfo = usersGitHubInfo.data;
      const card = gitHubCardMaker(userAccountInfo);
      // And add it to the DOM
      existingCardsDivInDom.appendChild(card);
    });
});