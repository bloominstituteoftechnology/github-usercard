

axios.get("https://api.github.com/users/alexandercsierra/followers")
  .then(obj => {
    let otherfollowersArray = obj.data;
    return otherfollowersArray;})
  
  .then(
    arr => arr.map(user => {
      let profileURL = "https://api.github.com/users/" + user.login;
      axios.get(profileURL)
      .then(response => {
        let container = document.querySelector(".cards");
        container.appendChild(createCard(response.data));
      })
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

  const calDiv = document.createElement("div");
  calDiv.classList.add("calendar");

  


  profile.appendChild(address);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  // calDiv.appendChild(calendar);
  cardInfo.appendChild(calDiv);
  card.appendChild(avatar);
  card.appendChild(cardInfo);
  // console.log(calendar);

  const calendar = new GitHubCalendar(calDiv, user.login);
  return card;
}



