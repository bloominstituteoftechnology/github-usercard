import axios from 'axios';

const followersArray = ['rayaschroeder', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach((element) => {
  axios
  .get('https://api.github.com/users/${element}')
  .then((response) => { 
      const card = cardCreator(response);
      const entryPoint = document.querySelector('.cards');
      entryPoint.appendChild(card);
  })
  .catch((error) => { 
      console.log('Error message: ${error}');
  })
  .then(() => { 
      console.log('All set!')
  })
})

function cardCreator (obj) { 
    //create the elements
    const card = document.createElement('div');
    const image = document.createElement('img');
    const cardInfoContainer = document.createElement('div');
    const name = document.createElement('h3');
    const username = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const profileLink = document.createElement('a');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');

    // //Add classes / attributes to the elements
    card.classList.add('card');
    image.src = obj.data.avatar_url;
    cardInfoContainer.classList.add('card-info');
    name.classList.add('name');
    username.classList.add('username');
    profileLink.href = obj.data.html_url;

    // //Add text content to the elements
    name.textContent = obj.data.name;
    profile.textContent = `Profile: `;
    username.textContent = obj.data.login;
    profileLink.textContent = obj.data.html_url;
    location.textContent = `Location: ${obj.data.location}`;
    followers.textContent = `Followers: ${obj.data.followers}`;
    following.textContent = `Following: ${obj.data.following}`;
    bio.textContent = `Bio: ${obj.data.bio}`;

    //Append element to profile
    profile.appendChild(profileLink);

    //Append elements to cardInfoContainer
    cardInfoContainer.appendChild(name);
    cardInfoContainer.appendChild(username);
    cardInfoContainer.appendChild(location);
    cardInfoContainer.appendChild(profile);
    cardInfoContainer.appendChild(followers);
    cardInfoContainer.appendChild(following);
    cardInfoContainer.appendChild(bio);

    //Append image and cardInfoContainer to card
    card.appendChild(image);
    card.appendChild(cardInfoContainer);

    //return card
    return card;
  }
