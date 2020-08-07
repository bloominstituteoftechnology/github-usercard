/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const primeUser = 'Jr08151';
const cardContainer = document.querySelector('.cards');
let followersArray = [  'adrichardson112',
                        'justsml',
                        'luishrd',
                        'bigknell',
                        'wSedlacek'];


function displayCard (username) {
  axios.get(`https://api.github.com/users/${username}`)
        .then(function (response) {
              // handle success
              console.log(response.data);
              const card = makeCard(response.data);

              if (username === primeUser) {

                cardContainer.insertBefore(card, cardContainer.childNodes[0]);
              } else {
                cardContainer.appendChild(card);
              }
        }) 
        .catch(function (error) {

          console.log(error);
        });
}

function displayFollowersCards (username) {
  axios.get(`https://api.github.com/users/${username}/followers`)
        .then(function (response) {
          let followers = response.data.map(follower=>follower.login);
          followers.forEach(follower=>displayCard(follower));
          return followers;
        })
        .catch(function (error) {
          console.log(error);
          return null;
        });
}

function makeCard (user) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = user.avatar_url;
  card.appendChild(img);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = user.name;
  cardInfo.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = user.login;
  cardInfo.appendChild(username);

  const profile = document.createElement('p');
  profile.textContent = `Profile: `;
  const profileLink = document.createElement('a');
  profileLink.href = user.html_url;
  profileLink.textContent = user.html_url;
  profile.appendChild(profileLink);
  cardInfo.appendChild(profile);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${user.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${user.following}`;
  cardInfo.appendChild(following);

  if (user.bio != null) {
    const bio = document.createElement('p');
    bio.textContent = `Bio: ${user.bio}`;
    cardInfo.appendChild(bio);
  }

  // v Stretch v

  const calendar = document.createElement('div');
  calendar.classList.add('calendar');
  calendar.textContent = `Loading the data just for you & ${user.login}`;
  cardInfo.appendChild(calendar);
  GitHubCalendar(calendar, user.login, { responsive: true });
  calendar.style.display = `none`;

  let closed = true;
  const openButton = document.createElement('i');
  openButton.style.position = `relative`;
  openButton.style.color = `darkturquoise`;
  openButton.style.left = `1rem`;
  openButton.style.margin = `5px`;
  openButton.classList.add('fas');
  openButton.classList.add('fa-2x');
  openButton.classList.add('fa-plus-circle');
  cardInfo.appendChild(openButton);

  openButton.addEventListener('click',()=> {
        if (closed) {
          calendar.style.display = `inline-block`;
          openButton.classList.remove('fa-plus-circle');
          openButton.classList.add('fa-minus-circle');
          closed = false;
        } else {
          calendar.style.display = `none`;
          openButton.classList.remove('fa-minus-circle');
          openButton.classList.add('fa-plus-circle');
          closed = true;
        }
    });

  return card;
}

displayCard(primeUser);
displayFollowersCards(primeUser);
followersArray.forEach(follower=>displayCard(follower));
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
