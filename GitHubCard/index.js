/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

    axios
    .get("https://api.github.com/users/ndacode")
    .then (response => {
      console.log(response);
      console.log(response.data.html_url);
      cards.appendChild(CardMaker(response.data));
    })
    .catch(error => {
      console.log("The data was not returned", error);
    })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 





   Skip to Step 3.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element


*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const cards = document.querySelector('.cards');


function CardMaker (data) {

  const card = document.createElement ('div');
  const cardImg = document.createElement ('img');
  const cardInfo = document.createElement ('div');
  const name = document.createElement ('h3');
  const username = document.createElement ('p');
  const location = document.createElement('p');
  const profile = document.createElement ('p');
  const addy = document.createElement ('a');
  const followers = document.createElement ('p');
  const following = document.createElement ('p');
  const bio = document.createElement ('p');


  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  
   cardImg.src = (data.avatar_url);
   name.textContent = (data.name);
   username.textContent = (data.login);
   location.textContent = (`Location: ${data.location}`);
   profile.textContent = ("Profile: ");
   addy.textContent = (data.html_url);
   followers.textContent = (`Followers: ${data.followers}`);
   following.textContent = (`Following: ${data.following}`);
   bio.textContent = (`Bio: ${data.bio}`);


    card.appendChild(cardImg);
    card.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(username);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    profile.appendChild(addy);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);



return card

}

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["VivaCode", "primelos","MsMaddyMac","BlueImport","Lfritze","J2Macwilliams", "viewgo", "cjgodfather","hsisco","dylanmestyanek", "kmcknight"]




  
  
followersArray.forEach( e => {
    axios
    .get(`https://api.github.com/users/${e}`)
    .then (response => {
      console.log(response.data);
    cards.appendChild(CardMaker(response.data));
  })
})
.catch(error => {
  console.log("The data was not returned", error);
})





/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
