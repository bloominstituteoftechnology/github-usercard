import axios from "axios";

axios
  .get("https://api.github.com/users/ray-rafe")
  .then((results) => {
    const newCard = cardMaker(results);
    const cards = document.querySelector(".cards");
    cards.appendChild(newCard);
  })
  .catch((err) => {
    console.log(err);
  });

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

followersArray.map(function (user) {
  axios
    .get("https://api.github.com/users/" + [user])
    .then((results) => {
      const newCard2 = cardMaker(results);
      const cards = document.querySelector(".cards");
      cards.appendChild(newCard2);
    })
    .catch((err) => {
      console.log("err");
    });
});

function cardMaker(object) {
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const userImg = document.createElement("img");
  userImg.src = object.data.avatar_url;

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const name = document.createElement("h3");
  name.classList.add("name");
  name.innerHTML = object.data.name;

  const userName = document.createElement("p");
  userName.classList.add("username");
  userName.innerHTML = object.data.login;

  const location = document.createElement("p");
  location.innerHTML = `Location: ${object.data.location}`;

  const profile = document.createElement("p");
  profile.innerHTML = "Profile: ";

  const githubAdress = document.createElement("a");
  githubAdress.href = object.data.html_url;
  githubAdress.innerHTML = object.data.html_url;

  const followers = document.createElement("p");
  followers.innerHTML = `Followers: ${object.data.followers}`;

  const following = document.createElement("p");
  following.innerHTML = `Following: ${object.data.following}`;

  const bio = document.createElement("p");
  bio.innerHTML = `Bio: ${object.data.bio}`;

  newCard.appendChild(userImg);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(githubAdress);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return newCard;
}
