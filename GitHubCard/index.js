const cards = document.querySelector('.cards');

function displayUserAndFollowers (username) {
  axios.get(`https://api.github.com/users/${username}`).then(function (res) {
    const userObj = res.data;
    cards.appendChild(cardFactory(userObj));

    axios.get(`https://api.github.com/users/${username}/followers`).then(function (res) {
      console.log(res.data);
      res.data.forEach((follower) => {
        axios.get(`https://api.github.com/users/${follower.login}`).then(function (res) {
          cards.appendChild(cardFactory(res.data));
        });
      });

    });

  }).catch(function (err) {
    console.log(err);
  });
}
displayUserAndFollowers('bvneilson');

function cardFactory (data) {
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  userImg.src = data.avatar_url;
  name.textContent = data.name;
  username.textContent = data.login;
  location.textContent = `Location: ${data.location}`;
  profile.textContent = 'Profile: ';
  link.href = data.html_url;
  link.textContent = data.html_url;
  link.target = '_blank';
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

  return card;
}
