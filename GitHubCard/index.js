/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/dustinmyers")
  .then(response => {
    console.log(response);
  });




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

//get the names i want to display
const namesArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"]

//create an array of their data objects
const followersArray = [];

namesArray.forEach((item) => {
  axios.get("https://api.github.com/users/" + item)
  .then(response => {
    followersArray.push(response.data);
  });
});


//this function creates and returns a card for the object passed
function createCard(inputObj) {

  //create div
  let card = document.createElement("div");
  card.classList.add("card");
      //create img
      let userImg = document.createElement("img");
      userImg.src = inputObj.avatar_url;
      card.appendChild(userImg);
      //create card info div
      let cardInfo = document.createElement("div");
      cardInfo.classList.add("card-info");
      card.appendChild(cardInfo);
          //create h3
          let name = document.createElement("h3");
          name.classList.add("name");
          name.textContent = inputObj.name;
          cardInfo.appendChild(name)
          //create p
          let username = document.createElement("p");
          username.classList.add("username");
          username.textContent = inputObj.login;
          cardInfo.appendChild(userName);
          //create p
          let location = document.createElement("p");
          location.textContent = `Location: ${inputObj.location}`;
          cardInfo.appendChild(location);

          //create a
          let githubAddress = document.createElement("a");
          githubAddress.href = inputObj.url;
          githubAddress.textContent = inputObj.url;
          //create p
          let profile = document.createElement("p");
          profile.textContent = `Profile: ${githubAddress}`;
          cardInfo.appendChild(profile);

          //create p
          let followers = document.createElement("p");
          followers.textContent = `Followers: ${inputObj.followers}`;
          cardInfo.appendChild(followers);
          //create p
          let following = document.createElement("p");
          following.textContent = `Following: ${inputObj.following}`;
          cardInfo.appendChild(following);
          //create p
          let bio = document.createElement("p");
          bio.textContent = `Following: ${inputObj.bio}`;
          cardInfo.appendChild(fbio);


  return card;
}
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




// MY DATA 


// login: "vtopham"
// id: 49505499
// node_id: "MDQ6VXNlcjQ5NTA1NDk5"
// avatar_url: "https://avatars0.githubusercontent.com/u/49505499?v=4"
// gravatar_id: ""
// url: "https://api.github.com/users/vtopham"
// html_url: "https://github.com/vtopham"
// followers_url: "https://api.github.com/users/vtopham/followers"
// following_url: "https://api.github.com/users/vtopham/following{/other_user}"
// gists_url: "https://api.github.com/users/vtopham/gists{/gist_id}"
// starred_url: "https://api.github.com/users/vtopham/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/vtopham/subscriptions"
// organizations_url: "https://api.github.com/users/vtopham/orgs"
// repos_url: "https://api.github.com/users/vtopham/repos"
// events_url: "https://api.github.com/users/vtopham/events{/privacy}"
// received_events_url: "https://api.github.com/users/vtopham/received_events"
// type: "User"
// site_admin: false
// name: null
// company: null
// blog: ""
// location: null
// email: null
// hireable: null
// bio: null
// public_repos: 23
// public_gists: 0
// followers: 1
// following: 1
// created_at: "2019-04-11T02:49:03Z"
// updated_at: "2020-03-10T21:37:09Z"
