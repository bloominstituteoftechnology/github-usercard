/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector(".cards");
axios.get('https://api.github.com/users/shiva-banihashem')
  .then((results) => {
    
    const newcard =createCard(results.data);
    
    cards.appendChild(newcard);

    //Stretch Graph -- begin
    const calendarDiv = document.createElement("div");
    cards.appendChild(calendarDiv);
    
    calendarDiv.classList.add("calendar");

    new GitHubCalendar(".calendar", "shiva-banihashem");
    //Stretch Graph -- end
    
  })
  .catch((err) => {
    console.log(err);
})

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

function createCard(data){
  //Create All elements
    const card = document.createElement("div");
    const image = document.createElement("img");
    const cardInfo = document.createElement("div");
    const name = document.createElement("h3");
    const userName = document.createElement("p");
    const location = document.createElement("p");
    const urlAddress = document.createElement("a");
    const profile = document.createElement("p");
    const followers = document.createElement("p");
    const following = document.createElement("p");
    const bio = document.createElement("p");
    
// create structure
    card.appendChild(image);
    card.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);

// apply styles
    card.classList.add("card");
    cardInfo.classList.add("card-info");
    name.classList.add("name");
    userName.classList.add("username");


    // set the content

    image.src = data.avatar_url;
    name.textContent = data.name;
    userName.textContent=data.login;
    location.textContent= data.location;
    followers.textContent = `Followers: ${data.followers}`;
    following.textContent = `Following: ${data.following}`;
    bio.textContent = data.bio;

  //set content and append <a> tag
  //   <p>Profile:  
  //   <a href={address to users github page}>{address to users github page}</a>
  // </p>
     urlAddress.setAttribute("href", data.html_url);
     urlAddress.textContent = data.html_url;
     profile.textContent = "Profile: ";
     profile.appendChild(urlAddress);
    
    
    

    return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
let followersArray = [];
followersArray= ["tetondan","dustinmyers","justsml","luishrd","bigknell"];

  followersArray.forEach(follower =>
    axios
      .get(`https://api.github.com/users/${follower}`)
      .then(res => {
        cards.appendChild(createCard(res.data));
      })
      .catch(err => console.log(err))
  );
//Stretch 
//Instead of manually creating a list of followers, do it programmatically.
// Create a function that requests the followers data from the API after it has 
//received your data and create a card for each of your followers. Hint: you can chain promises.
axios
  .get("https://api.github.com/users/shiva-banihashem/followers")
  .then(res => {
    
    res.data.forEach(follower =>
      axios
        .get(`https://api.github.com/users/${follower.login}`)
        .then(res => {
          cards.appendChild(createCard(res.data));
        })
        .catch(err => console.log(err))
    );
  })
  .catch(err => console.log(err));



  