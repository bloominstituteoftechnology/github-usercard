/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/Manjukcthapa").then(response => {
  const info = response.data;
  const newCard = Card(
    info.avatar_url,
    info.name,
    info.login,
    info.location,
    info.url,
    info.followers,
    info.following,
    info.bio
  );
  console.log(info);
  let cards = document.querySelector(".cards");
  cards.appendChild(newCard);
});

const Card = (
  imgSrc,
  name,
  username,
  location,
  url,
  followerCount,
  followingCount,
  userBio
) => {
  // This creates the user card container
  const div = document.createElement("div");
  div.classList.add("card");

  const profileImage = document.createElement("img");
  profileImage.src = imgSrc;
  div.appendChild(profileImage);

  // Here we create the nested div for the user info
  const nestedDiv = document.createElement("div");
  nestedDiv.classList.add("card-info");
  div.appendChild(nestedDiv);

  const nameTag = document.createElement("h3");
  nameTag.classList.add("username");
  nameTag.textContent = name;
  nestedDiv.appendChild(nameTag);

  const userTag = document.createElement("p");
  userTag.classList.add("username");
  userTag.textContent = username;
  nestedDiv.appendChild(userTag);

  const userLocation = document.createElement("p");
  userLocation.textContent = `Location: ${location}`;
  nestedDiv.appendChild(userLocation);

  const profile = document.createElement("p");
  profile.textContent = `Profile: `;
  nestedDiv.appendChild(profile);

  const githubPage = document.createElement("p");
  githubPage.textContent = url;
  profile.appendChild(githubPage);

  const followers = document.createElement("p");
  followers.textContent = `Followers: ${followerCount}`;
  nestedDiv.appendChild(followers);

  const following = document.createElement("p");
  following.textContent = `Following: ${followingCount}`;
  nestedDiv.appendChild(following);

  const bio = document.createElement("p");
  bio.textContent = `Bio: ${userBio}`;
  nestedDiv.appendChild(bio);

  return div;
};

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "matt-poloni",
  "NabeelahY",
  "tyeshi181"
];

const getUser = array => {
  array.forEach(user => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(response => {
        const info = response.data;
        const otherCard = Card(
          info.avatar_url,
          info.name,
          info.login,
          info.location,
          info.url,
          info.followers,
          info.following,
          info.bio
        );
        console.log(info);
        return otherCard;
      })
      .then(response => {
        const cards = document.querySelector(".cards");
        cards.appendChild(response);
      })
      .catch(error => {
        console.log("error", error);
      });
  });
};

getUser(followersArray);
