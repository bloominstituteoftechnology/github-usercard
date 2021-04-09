
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/edisonjeon
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



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const entryPoint = document.querySelector('.cards')





function cardMaker(object) {
  const div1 = document.createElement('div');
  const img = document.createElement('img');
  const div2 = document.createElement('div'); 
  const h3 = document.createElement('h3');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const a = document.createElement('a');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');
  const p6 = document.createElement('p');

  img.src = object.avatar_url;
  h3.textContent = object.name;
  p1.textContent = object.login;
  p2.textContent = `Location: ${object.location}`;
  p3.textContent = 'Profile:';
  a.href = object.html_url;
  a.textContent = 'html_url';
  p4.textContent = `Followers: ${object.followers}`;
  p5.textContent = `Following: ${object.following}`;
  p6.textContent = `Bio: ${object.bio}`;

  div1.classList.add('card');
  div2.classList.add('card-info');
  h3.classList.add('name');
  p1.classList.add('username');

  entryPoint.appendChild('div1')
  div1.appendChild('img');
  div1.appendChild('div2');
  div2.appendChild('h3');
  div2.appendChild('p1');
  div2.appendChild('p2');
  div2.appendChild('p3');
  p3.appendChild('a');
  div2.appendChild('p4');
  div2.appendChild('p5');
  div2.appendChild('p6');

  return div1;
}

import axios from 'axios';

axios
  .get(`https://api.github.com/users/edisonjeon`)
  .then((res) => {
    const div1 = cardMaker(res.data);
    entryPoint.appendChild(div1);
  })
  .catch((err) => {
    console.log(err)
  });







/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
