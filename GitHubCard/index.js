
import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get(`https://api.github.com/users/lailaarkadan`)
.then(res => {
  console.log(res.data)
})
.catch(error => {
  console.log(error)
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

//const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

function createCard(data) {

    const cardDiv = document.createElement("div");
    const image = document.createElement("img");
    const cardInDiv = document.createElement("div");
    const h3 = document.createElement("h3");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const anch = document.createElement("a");
    const para3 = document.createElement("p");
    const para4 = document.createElement("p");
    const para5 = document.createElement("p");
    const para6 = document.createElement("p");

//  structure
    cardDiv.appendChild(image);
    cardDiv.appendChild(cardInDiv);
    cardInDiv.appendChild(h3);
    cardInDiv.appendChild(para1);
    cardInDiv.appendChild(para2);
    cardInDiv.appendChild(para3);
    cardInDiv.appendChild(para4);
    cardInDiv.appendChild(para5);
    cardInDiv.appendChild(para6);

// styles
    cardDiv.classList.add("card");
    cardInDiv.classList.add("card-info");
    h3.classList.add("name");
    para6.classList.add("username");


    //content

    image.src = data.avatar_url;
    h3.textContent = data.name;
    para1.textContent=data.login;
    para2.textContent= data.location;
    para4.textContent = `Followers: ${data.followers}`;
    para5.textContent = `Following: ${data.following}`;
    para6.textContent = data.bio;

    
    return cardDiv;
}

const followersArray = ["bigknell","tetondan","dustinmyers","justsml","luishrd"];  
followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(res => {
    console.log('Github info: ', res)
    const myData = res.data;
    console.log(myData);
    const userCard = createCard(myData);
    
  })
  .catch(error => {
    console.log(error)
  })

})
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
