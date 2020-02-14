

const userCards = document.querySelector('.cards');

axios.get('https://api.github.com/users/zpepi')
  .then((results) => {
    cardCreator(results);
    console.log(results);

    const newCard = cardCreator(results);
    userCards.appendChild(newCard);
  })
  .catch( err => {
    console.log("Error:", err);
  });

const followersArray = [];
const friendsArray = ['vrndavana',
'keyeric',
'nobro777',
'cristinaedens',
'johnkirtley'
];

friendsArray.forEach((user) => {
  const url = 'https://api.github.com/users/' + user;

  axios.get(url)
    .then((results) => {
      cardCreator(results);
    console.log(results);

    const newCard = cardCreator(results);
    userCards.appendChild(newCard);
  }) .catch((err) => {
  console.log('Error:', err);
  })
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
@@ -46,6 +82,59 @@ const followersArray = [];
*/

function cardCreator(user) {
  //elements
  const card = document.createElement('div');
    const img = document.createElement('img');
    const info = document.createElement('div');
    const name = document.createElement('h3');
    const username = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const address = document.createElement('a')
    const followers = document.createElement('p')
    const following = document.createElement('p');
    const bio = document.createElement('p');

  //content
  img.src = user.data.avatar_url;
  name.textContent = user.data.name;
  username.textcontent = user.data.login;
  location.textcontent = 'Location: ' + user.data.location;
profile.innerHTML = `Profile: <a href="${user.data.html_url}">${user.data.html_url}</a>`;
  address.href = user.data.html_url;
  followers.textContent = "Followers: " + user.data.followers;
  following.textContent = "Following: " + user.data.following;
  bio.textContent = "Bio: " + user.data.bio;


//Structure
card.appendChild(img);
card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
    profile.appendChild(address);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);


  //styles

  card.classList.add('card');
  img.classList.add('img');
  name.classList.add('name');
  username.classList.add('username');
  location.classList.add('p');
  profile.classList.add('p');
  followers.classList.add('p');
  following.classList.add('p');
  bio.classList.add('p');

  return card;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  */