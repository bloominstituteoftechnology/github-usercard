/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>


*/
/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
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

const cardMaker = obj => {
    //creates a div HTML element with class of "card"
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    //creates an img HTML element with src of obj.avatar_url (user's avatar), & appends that img to cardDiv
    let cardImage = document.createElement("img");
    cardImage.src = obj.avatar_url;
    cardDiv.appendChild(cardImage);

    //creates a div HTML element with class of "card-info" & appends that div to CardDiv
    let cardInfoDiv = document.createElement("div");
    cardInfoDiv.classList.add("card-info");
    cardDiv.appendChild(cardInfoDiv);

    //creates a h3 HTML element with class of "name" and textContent of obj.name (user's natural name) & appends that h3 to cardInfoDiv
    let naturalUserNameH3 = document.createElement("h3");
    naturalUserNameH3.classList.add("name");
    naturalUserNameH3.textContent = obj.name;
    cardInfoDiv.appendChild(naturalUserNameH3);

    //creates a p HTML element with class of "username" and textContent of obj.login (user's username) & appends that p to cardInfoDiv
    let loginUserNameP = document.createElement("p");
    loginUserNameP.classList.add("username");
    loginUserNameP.textContent = obj.login;
    cardInfoDiv.appendChild(loginUserNameP);

    //creates a p HTML element with textContent of obj.location (user's location) & appends that p to cardInfoDiv
    let userLocationP = document.createElement("p");
    userLocationP.textContent = `Location: ${obj.location}`;
    cardInfoDiv.appendChild(userLocationP);

    //creates a p HTML element & appends that p to cardInfoDiv
    let userProfileP = document.createElement("p");
    cardInfoDiv.appendChild(userProfileP);

    //creates an a HTML element, sets its link attribute to the user's github page and appends that a to userProfileP
    let userPageURLAnchor = document.createElement("a");
    userPageURLAnchor.setAttribute("href", obj.html_url);
    userProfileP.appendChild(userPageURLAnchor);


    //creates a p HTML element with the user's followers count and appends that p to cardInfoDiv
    let userFollowersP = document.createElement("p");
    userFollowersP.textContent = `Followers: ${obj.followers}`;
    cardInfoDiv.appendChild(userFollowersP);

    //creates a p HTML element with the user's following count and appends that p to cardInfoDiv
    let userFollowingP = document.createElement("p");
    userFollowingP.textContent = `Following: ${obj.following}`;
    cardInfoDiv.appendChild(userFollowingP);

    //creates a p HTML element with the user's bio and appends that p to cardInfoDiv
    let userBioP = document.createElement("p");
    userBioP.textContent = `Bio: ${obj.bio}`;
    cardInfoDiv.appendChild(userBioP);

    //returns the complete cardDiv element that has been created with this function
    let cardsDiv = document.querySelector(".cards");
    cardsDiv.appendChild(cardDiv);
    return cardDiv;

}


/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

const gitAPICaller = (stringURL, elementCreator) => {
    axios.get(stringURL)
        .then(gitSuccessData => {
            //    call cardMaker using the user info received from the github API
            console.log(gitSuccessData.data);
            elementCreator(gitSuccessData.data);
        })
        .catch(gitErrorData => {
            //    deal with error data
            console.log("there is an error with the github API call through axios");
        });
}

gitAPICaller("https://api.github.com/users/lex-node", cardMaker);


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


axios.get("https://api.github.com/users/lex-node/followers")
    .then(gitSuccessData => {
        console.log(gitSuccessData.data);
        gitSuccessData.data.forEach(follower => {
            gitAPICaller(`https://api.github.com/users/${follower.login}`, cardMaker);
        });
    })
    .catch(gitErrorData => {
        //    deal with error data
        console.log("there is an error with the github API call through axios");
    });







