/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// obtain the parent for the github cards.
const cardContainer = document.querySelector('.cards');

// Now let's run the axios call on just one element;
// axios.get('https://api.github.com/users/karsevar')
// 	.then(response => {
// 		console.log(response);
// 		cardContainer.appendChild(cardMarkup(response.data));
// 	})
// 	.catch(err => {
// 		console.log('Can\'t find request');
// 	})

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

// Step 5: Adding the following profile usernames to the DOM parent '.cards':
// const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

// followersArray.forEach( follower => {
// 	axios.get(`https://api.github.com/users/${follower}`)
// 		.then(response => {
// 			console.log(response.data);
// 			cardContainer.appendChild(cardMarkup(response.data));
// 		})
// 		.catch(err => {
// 			console.log('Can\'t find request');
// 		})
// })

// EveryThing renders perfectly.

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

function cardMarkup(userObject) {

	// html elements:
	const cardElement = document.createElement('div');
	const userImage = document.createElement('img');
	const cardInfo = document.createElement('div');
	const name = document.createElement('h3');
	const userName = document.createElement('p');
	const location = document.createElement('p');
	const profile = document.createElement('p');
	const address = document.createElement('a');
	const followersCount = document.createElement('p');
	const followingCount = document.createElement('p');
	const bio = document.createElement('p');

	// appending the node tree structure:
	cardElement.appendChild(userImage);
	cardElement.appendChild(cardInfo);

	cardInfo.appendChild(name);
	cardInfo.appendChild(userName);
	cardInfo.appendChild(location);
	cardInfo.appendChild(profile);
	cardInfo.appendChild(followersCount);
	cardInfo.appendChild(followingCount);
	cardInfo.appendChild(bio);

	// profile.appendChild(address);

	// adding classNames and attributes:
	cardElement.className = 'card';
	userImage.src = userObject.avatar_url; 
	cardInfo.className = 'card-info';
	address.href = userObject.html_url; 
	name.className = 'name';
	userName.className = 'username';

	// text content and user information:
	name.textContent = userObject.name;
	userName.textContent = userObject.login;
	location.textContent = `Location: ${userObject.location}`;
	address.textContent = userObject.html_url;
	profile.textContent = `Profile: `;
	profile.appendChild(address); // A little quirk with nesting anchor tags.
	
	followersCount.textContent = userObject.followers;
	followingCount.textContent = userObject.following;
	bio.textContent = `Bio: ${userObject.bio}`;

	return cardElement;
}

// sprint problem programmatically parsing a github user's follower api call 
// and printing each individual follower onto a dom parent.
// Using tetondan's profile for this experiment:

// This axios call works perfectly but I might need to refactor it as a means 
// to make it more readable.

axios.get('https://api.github.com/users/tetondan')
	.then(results => {
		cardContainer.appendChild(cardMarkup(results.data));
		axios.get(results.data.followers_url)
			.then(result => {
				const followersAuto = result.data.map(follower => follower.login)

				followersAuto.forEach(follower => {
					axios.get(`https://api.github.com/users/${follower}`)
						.then(result => {
							cardContainer.appendChild(cardMarkup(result.data))
						})
						.catch(error => {
							console.log('Server error', error);
						})
				})
			})
			.catch(error => {
				console.log('tetondan has no followers')
			})
	})
	.catch(error => {
		console.log('Error', error);
	})











