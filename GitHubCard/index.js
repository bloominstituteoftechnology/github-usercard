/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



const cardLocation = document.querySelector('.cards');

axios.get('https://api.github.com/users/blakelower')
.then(response => {
  console.log(response.data);
  cardLocation.appendChild(createCard(response.data));
});
const followersArray = [
  "jordanalexander22",
  "eoinlynchcodes",
  "justsml",
  "luishrd",
  "bigknell"
];


followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(response=>{
    console.log(response.data);
    cardLocation.appendChild(createCard(response.data));
  });
});

function createCard(data) {
  const newCard = document.createElement(`div`);
  const newImage = document.createElement(`img`);
  const newCardInfo = document.createElement(`div`);
  const newName = document.createElement(`h3`);
  const newUserName = document.createElement(`p`);
  const newLocation = document.createElement(`p`);
  const newProfile = document.createElement(`p`);
  const newProfileLink = document.createElement(`a`);
  const newFollowers = document.createElement(`p`);
  const newFollowing = document.createElement(`p`)
  const newBio = document.createElement(`p`);
//class names 
  newCard.classList.add(`card`);
  newCardInfo.classList.add(`card-info`);
  newName.classList.add(`name`);
  newUserName.classList.add(`username`);
// content 
  newImage.src =`${data.avatar_url}`;
  newName.textContent = `${data.name}`;
  newUserName.textContent =`${data.login}`;
  newLocation.textContent = `Location: ${data.location}`;
  newProfile.textContent = `Profile: `;
  newProfileLink.textContent = `${data.html_url}`;
  newProfileLink.href = `${data.html_url}`;
  newFollowers.textContent = `${data.followers}`;
  newFollowing.textContent =`${data.following}`
  newBio.textContent =`${data.bio}`;
//elements
newCard.appendChild(newCardInfo);
newCard.appendChild(newImage);
newCardInfo.appendChild(newName);
newCardInfo.appendChild(newUserName);
newCardInfo.appendChild(newLocation);
newCardInfo.appendChild(newProfile);
newCardInfo.appendChild(newProfileLink);
newCardInfo.appendChild(newFollowers);
newCardInfo.appendChild(newFollowing);
newCardInfo.appendChild(newBio);

return newCard;
}


