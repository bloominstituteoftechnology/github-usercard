// import { object } from "prop-types";

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

let followersArray = ["freedomwriter", "nataliastewart", "devjaymoe","Diddleslip","Riley-Robinson"];

function gitHubCard(obj){
  const cardHolder = document.createElement("div"),
        img = document.createElement("img"),
        cardInfo = document.createElement("div"),
        nameInfo = document.createElement("h3"),
        userName = document.createElement("p"),
        locationInfo = document.createElement("p"),
        profileInfo = document.createElement("p"),
        linkTag = document.createElement("a"),
        followerInfo = document.createElement("p"),
        followingInfo = document.createElement("p"),
        bioInfo = document.createElement("p");

  cardHolder.classList.add("card");
  cardInfo.classList.add("card-info");
  nameInfo.classList.add("name");
  userName.classList.add("username");

  img.src = obj.data.avatar_url;
  nameInfo.textContent = obj.data.name;
  userName.textContent = obj.data.login;
  locationInfo.textContent = `Location: ${obj.data.location}`;
  profileInfo.textContent = `Profile:`;
  linkTag.textContent = obj.data.html_url;
  followerInfo.textContent = `Follower: ${obj.data.followers}`;
  followingInfo.textContent = `Following: ${obj.data.following}`;
  bioInfo.textContent = `Bio: ${obj.data.bio}`;
  
  cardHolder.append(img, cardInfo);
  cardInfo.append(nameInfo, userName, locationInfo, profileInfo, followerInfo, followingInfo, bioInfo);
  profileInfo.append(linkTag);

  
 return cardHolder 
}

parentTag = document.querySelector(".cards")

axios.get('https://api.github.com/users/joowoonk')
  .then(response => {
    parentTag.append(gitHubCard(response));
    console.log(response)
  })
  .then(()=> {
    followersArray.forEach(person => 
  axios.get(`https://api.github.com/users/${person}`)
  .then(response=> 
    parentTag.append(gitHubCard(response)))
    )    
  })
  .catch(error => {
    console.log("the data was not returned", error);
  })


// //


  // console.log(followersAr


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
