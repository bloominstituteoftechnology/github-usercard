log = console.log;





//create personal card
const profileCards = document.querySelector('.cards');

axios.get('https://api.github.com/users/Artofmayhem')
.then((resolve) => 
{
  log(resolve.data)
  profileCards.appendChild(cardList(resolve.data));
})
.catch((error) => 
{
  log("ERROR MESSAGE", error);
});




//create blueprint
function cardList(data){
  
  //element creation
  const addCard = document.createElement('div');
  const addPhoto = document.createElement('img');
  const addInfo = document.createElement('div');
  const addName = document.createElement('h3');
  const addUserName = document.createElement('span');
  const addLocation = document.createElement('p')
  const addProfile = document.createElement('p')
  const addProfileLink = document.createElement('a');
  const addFollowers = document.createElement('p')
  const addFollowing = document.createElement('p')
  const addBio = document.createElement('p')
  
  //adding classes
  addCard.classList.add('card');
  addInfo.classList.add('card-info');
  addName.classList.add('name')
  addUserName.classList.add('username')

  //adding info
  addPhoto.src = data.avatar_url;
  addName.textContent = data.name;
  addUserName.textContent = data.login;
  addLocation.textContent = 'Location ' + data.location;
  addProfile.textContent = 'Profile: ' + data.html_url;
  addProfileLink.textContent = data.html_url;
  addFollowers.textContent = 'Followers: ' + data.followers;
  addFollowing.textContent = 'Following: ' + data.following;
  addBio.textContent = 'Bio: ' + data.bio


  //page build
  addCard.appendChild(addPhoto);
  addCard.appendChild(addInfo);
  addInfo.appendChild(addName);
  addInfo.appendChild(addUserName);
  addInfo.appendChild(addLocation);
  addInfo.appendChild(addProfile);
  addProfile.appendChild(addProfileLink);
  addInfo.appendChild(addFollowers);
  addInfo.appendChild(addFollowing);
  addInfo.appendChild(addBio);
  
  return addCard;
};



//create array of users
const userList = 
[
     "qirhi",
     "toninorsk",
     "logankilpatrick",
     "jwasham",
     "faahim",
];


//execute page
userList.forEach((user) => {
axios.get(`https://api.github.com/users/${user}`)
  .then((resolve) =>
  {
    profileCards.appendChild(cardList(resolve.data));
  });
});
