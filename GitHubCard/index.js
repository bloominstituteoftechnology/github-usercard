/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/
const gitcard = axios.get("https://api.github.com/users/beelcodes");

gitcard
  .then((resolved) => console.log(resolved.data))
  .catch((err) => console.log(err));
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
gitcard
  .then((resolved) => {
    const githubStuff = resolved.data;
    let cards = document.querySelector(".cards");
    let card = maker(githubStuff);
    cards.appendChild(card);
  })
  .catch((err) => console.log(err));
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

followersArray.forEach((user) => {
  const gitcard = axios.get(`https://api.github.com/users/${user}/followers`);
  gitcard
    .then((resolved) => {
      const githubStuff = resolved.data;
      console.log(githubStuff);
      let cards = document.querySelector(".cards");
      githubStuff.forEach((follower) => {
        let card = maker(follower);
        cards.appendChild(card);
      });
    })
    .catch((err) => console.log(err));
});

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function maker(obj) {
  console.log(obj);
  let mainDiv = document.createElement("div");
  let mainImg = document.createElement("img");
  let middleDiv = document.createElement("div");
  let h3 = document.createElement("h3");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let a = document.createElement("a");
  let p4 = document.createElement("p");
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");

  mainDiv.appendChild(mainImg);
  mainDiv.appendChild(middleDiv);
  middleDiv.appendChild(h3);
  middleDiv.appendChild(p1);
  middleDiv.appendChild(p2);
  middleDiv.appendChild(p3);
  middleDiv.appendChild(p4);
  middleDiv.appendChild(p5);
  middleDiv.appendChild(p6);
  p3.appendChild(a);

  mainDiv.classList.add("card");
  middleDiv.classList.add("card-info");
  h3.classList.add("name");
  p1.classList.add("username");

  mainImg.setAttribute("src", obj.avatar_url);
  h3.textContent = obj.login;
  p1.textContent = obj.login;
  p2.textContent = obj.location || "Draper, Utah";
  a.textContent = obj.html_url;
  p4.textContent = obj.followers;
  p5.textContent = obj.following;
  p6.textContent = obj.bio || "Web developer at Lambda School";

  return mainDiv;
}
