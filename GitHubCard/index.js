/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


const htmlCards = document.querySelector(".cards");

//Get own profile
axios.get("https://api.github.com/users/teaguehannam")
.then(response => {
    console.log(response);
    //Append card
    htmlCards.appendChild(followerCard(response));
})
.catch(error => {
    console.log("Error: ", error);
});


function followerCard(obj){

  //main object
  const card = document.createElement('div');
  card.classList.add("card");

  //img
  const photo = document.createElement("img");
  photo.setAttribute("src", obj.data.avatar_url);

  //card-info div
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  card.appendChild(cardInfo);

  const name = document.createElement("h3");
  name.classList.add("name");

  const username = document.createElement("p");
  username.classList.add("username");

  const location = document.createElement("p");
  location.textContent = `Location: ${obj.data.location}`;
  card.appendChild(location);

  const profile = document.createElement("p");


  const link = document.createElement("a");


  const followers = document.createElement("p");


  const following = document.createElement("p");


  const bio = document.createElement("p");

  //car-info div



  //add to card info conainter 

  //add to container






  return card;
}


//Get Follow Profiles
const followersArray = [
  "XueYingLin",
  "ScottSmith23",
  "bergeronmatt",
  "mmussel",
  "landoDev",
  "AlexandroM1234"
];

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(response => {
      console.log(response);
      //Append card
      htmlCards.appendChild(followerCard(response));
  })
  .catch(error => {
      console.log("Error: ", error);
  });
})


/*
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
