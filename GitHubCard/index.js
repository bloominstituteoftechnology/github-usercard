/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



// axios.get("https://api.github.com/users/alexandercsierra")
//   .then(response => {
//     let container = document.querySelector(".cards");
//     container.appendChild(createCard(response.data));
//     // console.log(response.data);
//   })
//   .catch(err => console.log(err));



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


axios.get("https://api.github.com/users/JHaydenDev/followers")
  .then(obj => {
    let otherfollowersArray = obj.data;
    console.log(otherfollowersArray);
    return otherfollowersArray;})
  
  .then(
    arr => arr.map(user => {
      let profileURL = "https://api.github.com/users/" + user.login;
      axios.get(profileURL)
      .then(response => {
        console.log(profileURL);
        let container = document.querySelector(".cards");
        container.appendChild(createCard(response.data));
        console.log(response.data); })
      console.log(profileURL);
    })
    
  )
  .catch(error => console.log(error))


// const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

// followersArray.map(user => {
//   let profileURL = "https://api.github.com/users/" + user;
//   axios.get(profileURL)
//   .then(response => {
//     let container = document.querySelector(".cards");
//     container.appendChild(createCard(response.data));
//     // console.log(response.data);
//   })
//   .catch(err => console.log(err));
// })



  
  
  
  

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



function createCard(user){
  const card = document.createElement("div");
  card.classList.add("card");

  const avatar = document.createElement("img");
  avatar.src = user.avatar_url;

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const name = document.createElement("h3");
  name.classList.add("name");
  name.textContent = user.name;

  const username = document.createElement("p");
  username.classList.add("username");
  username.textContent = user.login;

  const location = document.createElement("p");
  location.textContent = "Location: " + user.location;

  const profile = document.createElement("p");
  profile.textContent = "Profile: ";

  const address = document.createElement("a");
  address.href = user.html_url;
  address.textContent = user.html_url;

  const followers = document.createElement("p");
  followers.textContent = "Followers: " + user.followers;

  const following = document.createElement("p");
  following.textContent = "Following: " + user.following;

  const bio = document.createElement("p");
  bio.textContent = "Bio: " + user.bio;


  profile.appendChild(address);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  card.appendChild(avatar);
  card.appendChild(cardInfo);

  return card;
}

// let alex = {
// avatar_url: "https://avatars2.githubusercontent.com/u/26785156?v=4",
// bio: null,
// blog: "",
// company: null,
// created_at: "2017-03-30T05:36:58Z",
// email: null,
// events_url: "https://api.github.com/users/alexandercsierra/events{/privacy}",
// followers: 0,
// followers_url: "https://api.github.com/users/alexandercsierra/followers",
// following: 0,
// following_url: "https://api.github.com/users/alexandercsierra/following{/other_user}",
// gists_url: "https://api.github.com/users/alexandercsierra/gists{/gist_id}",
// gravatar_id: "",
// hireable: null,
// html_url: "https://github.com/alexandercsierra",
// id: 26785156,
// location: null,
// login: "alexandercsierra",
// name: null,
// node_id: "MDQ6VXNlcjI2Nzg1MTU2",
// organizations_url: "https://api.github.com/users/alexandercsierra/orgs",
// public_gists: 0,
// public_repos: 30,
// received_events_url: "https://api.github.com/users/alexandercsierra/received_events",
// repos_url: "https://api.github.com/users/alexandercsierra/repos",
// site_admin: false,
// starred_url: "https://api.github.com/users/alexandercsierra/starred{/owner}{/repo}",
// subscriptions_url: "https://api.github.com/users/alexandercsierra/subscriptions",
// type: "User",
// updated_at: "2019-12-04T16:29:32Z",
// url: "https://api.github.com/users/alexandercsierra"
// }

// let container = document.querySelector(".cards");
// container.appendChild(createCard(alex));
