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
// .then(data => {
//     // Handles Success: here's where we get the results from server
//     console.log('response', data)
//     const images = data.data.message
//     images.forEach(imageUrl => {
//       const element = createDogCard(imageUrl, 'terrier')
//       entry.appendChild(element)
//     })
//   })
//   .catch(error => {
//     // Handles failure:
//     console.log('The dogs API is currently down, try again later', error)
//   })


axios.get('https://api.github.com/users/coryhedeen')
    .then(res => {
      const information = cardCreator(res.data);
      const cards = document.querySelector('.cards')
      cards.appendChild(information)
    })
    .catch(err => console.log(err))

    function cardCreator(profile){
      const card = document.createElement('div');
      card.classList.add('card');

      const proImage = document.createElement('img');
      proImage.setAttribute('src', `${profile.avatar_url}`);

      const info = document.createElement('div');
      info.classList.add('card-info');

      const name = document.createElement('h3');
      name.textContent = profile.name;

      const userName = document.createElement('p');
      name.textContent = profile.login;

      const location = document.createElement('p');
      location.textContent = profile.location;

      const profileLink = document.createElement('p');
      profile.textContent = "Profile: ";

      const link = document.createElement('a');
      link.href = profile.html_url;

      const followers = document.createElement('p');
      followers.textContent = `Followers: ${profile.followers}`;

      const following = document.createElement('p');
      following.textContent = `Following: ${profile.following}`;

      const bio = document.createElement('p');
      bio.textContent = `Bio: ${profile.bio || "none"}`;

      card.appendChild(proImage)
      card.appendChild(info)
      info.appendChild(name)
      info.appendChild(userName)
      info.appendChild(location)
      info.appendChild(profileLink)
      profileLink.appendChild(link)
      info.appendChild(followers)
      info.appendChild(following)
      info.appendChild(bio)

      return card
    }

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach(instructor =>{
  axios.get(`https://api.github.com/users/${instructor}`)
    .then(res => {
      const card = cardCreator(res.data);
      const cards = document.querySelector('.cards')
      cards.appendChild(card);
    });
});

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
