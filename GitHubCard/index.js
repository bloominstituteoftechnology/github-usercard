//jshint esversion:6

const parent = document.querySelector('.cards');

//Axios Calls
axios.get('https://api.github.com/users/devaneyj3').then(res => {
  let myCard = makeCard(res.data);
  parent.append(myCard);
}).catch(err => console.error(err));

axios.get('https://api.github.com/users/devaneyj3/followers')
  .then(res => {
    res.data.forEach(friend => {
      parent.appendChild(makeCard(friend));
    });
  }).catch(err => { console.error(err); });

function makeCard(data) {
  //create element
  const card = document.createElement('div');
  const image = document.createElement('img');
  const card_info = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  //append elements
  card.appendChild(image);
  card.appendChild(card_info);
  card_info.appendChild(name);
  card_info.appendChild(username);
  card_info.appendChild(location);
  card_info.appendChild(profile);
  card_info.appendChild(followers);
  card_info.appendChild(following);
  card_info.appendChild(bio);

  //add classes
  card.classList.add('card');
  card_info.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  //add textContent, src, innerHTML
  image.src = data.avatar_url;
  name.textContent = data.name;
  username.textContent = data.login;
  location.textContent = `Location: ${data.location}`;
  profile.innerHTML = `Profile: <a href="${data.html_url}"> ${data.html_url}</a>`;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

  return card;
}