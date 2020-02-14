/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>*/

           const entryPointInHTML = document.querySelector(".cards");
           const getPromise = axios.get("https://api.github.com/users/ballewaer");

  getPromise
  .then(response => {
    console.log(response.data);
    const myData = createCard(response.data);
    entryPointInHTML.appendChild(myData);
  })
  .catch(error => {
    console.log("SORRY! Nothing to see here!", error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 


   Skip to Step 3.*/


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.*/


          //CREATING ELEMENTS HERE\\
          function createCard(info) {
            const card = document.createElement("div");
            const userImage = document.createElement("img");
            const cardInfo = document.createElement("div");
            const name = document.createElement("h3");
            const userName = document.createElement("p");
            const location = document.createElement("p");
            const profile = document.createElement("p");
            const link = document.createElement("a");
            const followers = document.createElement("p");
            const following = document.createElement("p");
            const bio = document.createElement("p");

          //CREATING STRUCTURE HERE\\
          card.appendChild(userImage);
          card.appendChild(cardInfo);
          cardInfo.appendChild(name);
          cardInfo.appendChild(userName);
          cardInfo.appendChild(location);
          cardInfo.appendChild(profile);
          cardInfo.appendChild(link);
          cardInfo.appendChild(followers);
          cardInfo.appendChild(following);
          cardInfo.appendChild(bio);


          //CREATING CLASS NAMES\\
          card.classList.add("card");
          cardInfo.classList.add("card-info");
          name.classList.add("name");
          userName.classList.add("user-name");

          //CREATING CONTENT\\
          userImage.src = info.avatar_url;
          name.textContent = `Name: ${info.name}`;
          userName.textContent = `Username: ${info.login}`;
          location.textContent = `Location: ${info.location}`;
          profile.textContent = `Profile: `;
          link.textContent = `Visit my GitHub: `;
          link.setAttribute("href", info.html_url);
          followers.textContent = `Followers: ${info.followers}`;
          following.textConent = `Following: ${info.following}`;
          bio.textContent = `About Me: ${info.bio}`;
        
          console.log(card);
        
          return card;
   }

   const followersArray = [
    "https://api.github.com/users/DonnaBallew",
    "https://api.github.com/users/desicurry"
];


followersArray.map(element => {
  axios
    .get(element)
    .then(response => {
      // console.log(response.data);
      const followersData = createCard;
      entryPointInHTML.appendChild(followersData(response.data));
    })
    .catch(error => {
      console.log("SORRY! Nothing to see here!", error);
    });
});
