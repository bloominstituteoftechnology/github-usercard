import axios from 'axios';

const followersArray = [ 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

const userCard = document.querySelector('.cards');

function getFollowers (followers){
  followers.forEach(User =>{
    axios.get(`https://api.github.com/users/${User}`)
    .then(response => {
    document.querySelector('.cards').append(userCardMaker(response.data))}
    )
  })
}

function getUser (gitHubUserName){
  axios.get(`https://api.github.com/users/${gitHubUserName}`)
.then(response => {
  userCard.appendChild(userCardMaker(response.data))
  console.log(response.data);
})
.catch(error => {
  console.error(error);
})
.finally(() => console.log("WOOOOOHOOOO I WORK!"))
}

getUser('lomelo-x')
getFollowers(followersArray)

function userCardMaker(gitUser) {
  const card = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardInfo = document.createElement('div')
  const cardName = document.createElement('h3');
  const cardUserName = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('p');
  const cardProfileLink = document.createElement('a')
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')

  card.classList.add('card');
  cardImage.src = gitUser.avatar_url;
  cardImage.classList.add('user-image');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardName.textContent = gitUser.name;
  cardUserName.classList.add('username');
  cardUserName.textContent = gitUser.login;
  cardLocation.textContent = `Location: ${gitUser.location}`;
  cardProfile.textContent = 'Profile: ';
  cardProfileLink.textContent = gitUser.html_url;
  cardProfileLink.href = gitUser.html_url;
  cardFollowers.textContent = `Followers: ${gitUser.followers}`;
  cardFollowing.textContent = `Following: ${gitUser.following}`;
  cardBio.textContent = `Bio: ${gitUser.bio}`;

  
  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUserName);
  cardInfo.appendChild(cardLocation)
  cardInfo.appendChild(cardProfile);
  cardProfile.appendChild(cardProfileLink);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio)

  return card;
}
