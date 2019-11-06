/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cardsContainer = document.querySelector('.cards');
function addGithubUserCard(username){
axios.get(`https://api.github.com/users/${username}`)
	.then(response => {
		console.log(response);
		cardsContainer.appendChild(createCardComponent(response.data));
	})
	.catch(error => console.error(error));
}
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3. This is done
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

const followersArray = [
  'maxjamb',
	'tetondan',
	'dustinmyers',
	'justsml',
	'luishrd',
	'bigknell'
];

followersArray.forEach(addGithubUserCard);
console.log(addGithubUserCard);
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

function createCardComponent(data) {
	const card = document.createElement('div');
	card.classList.add('card');
	const img = document.createElement('img');
	img.src = data.avatar_url;
	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');
	const h3 = document.createElement('h3');
	h3.classList.add('name');
	h3.textContent = `${data.name}`;
	const pUser = document.createElement('p');
	pUser.classList.add('username');
	pUser.textContent = `${data.login}`;
	const p2 = document.createElement('p');
	p2.textContent = `Location: ${data.location ? data.location : 'Unknown'}`;
	const p3 = document.createElement('p');
	p3.textContent = 'Profile: ';
	const a = document.createElement('a');
	a.textContent = data.html_url;
	a.href = data.html_url;
	const p4 = document.createElement('p');
	p4.textContent = `Followers: ${data.followers}`;
	const p5 = document.createElement('p');
	p5.textContent = `Following: ${data.following}`;
	const p6 = document.createElement('p');
	p6.textContent = `Bio: ${data.bio ? data.bio : 'No bio'}`;

	p3.appendChild(a);

	cardInfo.appendChild(h3);
	cardInfo.appendChild(pUser);
	cardInfo.appendChild(p2);
	cardInfo.appendChild(p3);
	cardInfo.appendChild(p4);
	cardInfo.appendChild(p5);
	cardInfo.appendChild(p6);

	card.appendChild(img);
	card.appendChild(cardInfo);


	return card;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
