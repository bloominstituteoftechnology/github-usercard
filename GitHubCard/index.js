/* HTML structure
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

const followersArray = [
  "XueYingLin",
  "ScottSmith23",
  "bergeronmatt",
  "mmussel",
  "landoDev",
  "AlexandroM1234"
];


//Location where cards will be added
const htmlCards = document.querySelector(".cards");

function followerCard(obj){
  //main object
  const card = document.createElement('div');
  card.classList.add("card");

  //img
  const photo = document.createElement("img");
  photo.setAttribute("src", obj.data.avatar_url);
  card.appendChild(photo);

  //card-info div
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  card.appendChild(cardInfo);

  const name = document.createElement("h3");
  name.textContent = obj.data.name;
  name.classList.add("name");
  cardInfo.appendChild(name);

  const username = document.createElement("p");
  username.textContent = obj.data.login;
  username.classList.add("username");
  cardInfo.appendChild(username);

  const location = document.createElement("p");
  location.textContent = `Location: ${obj.data.location}`;
  card.appendChild(location);

  const profile = document.createElement("p");
  profile.textContent = "Profile: ";
  cardInfo.appendChild(profile);

  const link = document.createElement("a");
  link.textContent = obj.data.html_url;
  link.setAttribute("href", obj.data.html_url);
  profile.appendChild(link);

  const followers = document.createElement("p");
  followers.textContent = `Followers: ${obj.data.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement("p");
  following.textContent = `Following: ${obj.data.following}`;
  cardInfo.appendChild(following);

  const bio = document.createElement("p");
  bio.textContent = `Bio: ${obj.data.bio}`;
  cardInfo.appendChild(bio);

  //console.log(card);
  return card;
}


//Create card of own profile
axios.get("https://api.github.com/users/teaguehannam")
.then(response => {
    //Append card
    htmlCards.appendChild(followerCard(response));
})
.catch(error => {
    console.log("Error: ", error);
});

//Create cards from followers in array
followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(response => {
      //Append card
      htmlCards.appendChild(followerCard(response));
  })
  .catch(error => {
      console.log("Error: ", error);
  });
})


