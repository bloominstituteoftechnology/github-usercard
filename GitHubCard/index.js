/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Manjukcthapa')
.then(data =>{
  const myInfo = data.data;
    console.log('UserInfo', myInfo);
    const cardInfo = cardCreator(myInfo);
    console.log(cardInfo);
    cards.appendChild(cardInfo);
})


const cards = document.querySelector('.cards');
console.log(cards);
function cardCreator (arg) {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('user-name');

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  img.src = arg.avatar_url;
  location.textContent = arg.location;
  name.textContent = arg.name;
  userName.textContent = arg.login;
  const aProfileLink = arg.html_url;
  profileLink.innerHTML = aProfileLink.link(arg.html_url);
  followers.textContent = `Followers: ${arg.followers}`;
  following.textContent = `Following: ${arg.following}`;
  bio.textContent = arg.bio;

  return card;
}



const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  'matt-poloni',
  'NabeelahY',
  'tyeshi181'
];


  i = 0;
  followersArray.forEach((user, i) => {
  axios.get(`https://api.github.com/users/${followersArray[i]}`)
    .then (data => {
      const myInfo = data.data;
      console.log('UserInfo', myInfo);
      const cards = document.querySelector('.cards');
      const cardInfo = cardCreator(myInfo);
      console.log(cardInfo);
      cards.appendChild(cardInfo);
    }), i++;
}) 

