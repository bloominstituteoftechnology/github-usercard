/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
console.log('promise', axios
	.get('https://api.github.com/users/mikepadiernos'));

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

function meCard(user) {

	// ELEMENTS
	const card = document.createElement('article');
	const cardImage = document.createElement('img');
	const cardInfo = document.createElement('div')
	const cardName = document.createElement('h3');
	const cardUsername = document.createElement('p');
	const cardLocation = document.createElement('p');
	const cardProfile = document.createElement('p');
	const cardProfileLink = document.createElement('a');
	const cardFollowers = document.createElement('p');
	const cardFollowing = document.createElement('p');
	const cardBio = document.createElement('p');


	// CLASSES
	card.classList.add('card');
	cardName.classList.add('name');
	cardUsername.classList.add('username');

	// BUILD CARD
	card.appendChild(cardImage);
	card.appendChild(cardInfo);
	cardInfo.appendChild(cardName);
	cardInfo.appendChild(cardUsername);
	cardInfo.appendChild(cardLocation);
	cardInfo.appendChild(cardProfile);
	cardProfile.appendChild(cardProfileLink);
	cardInfo.appendChild(cardFollowers);
	cardInfo.appendChild(cardFollowing);
	cardInfo.appendChild(cardBio);

	// CONTENT
	cardName.textContent = user.name;
	cardUsername.textContent = user.login;
	cardLocation.textContent = user.location;
	cardProfileLink.textContent = user.html_url;
	cardProfileLink.href = user.html_url;
	cardFollowers.textContent = '';
	cardFollowing.textContent = '';
	cardBio.textContent = user.bio;
	cardImage.src = user.avatar_url;

	return card;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const entryPoint = document.querySelector('.cards');

axios
	.get('https://api.github.com/users/mikepadiernos')
	.then(response => {
		console.log('response', response);
		const me = response.data;
		console.log('me', me);
		entryPoint.appendChild(meCard(me));
	})
	.catch(error => {
		if (error.includes('Network Error')) {
			console.log('Network Error');
		}
		console.log('No Data Returned');
	});