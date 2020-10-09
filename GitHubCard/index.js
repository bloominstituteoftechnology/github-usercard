import axios from 'axios';

axios.get('https://api.github.com/users/jonahdhadlock')
    .then(response => {
        const data = response.data;
        const cardDiv = document.querySelector('.cards');
        const cardMulti = getRequest(data);
        cardDiv.appendChild(cardMulti);
        console.log(data)
    })
    .catch(error => {
        console.log(error);
    })


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

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
function getRequest(data) {
    const div = document.createElement('div');
    const div1 = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const img = document.createElement('img');
    div.appendChild(h3);
    div.appendChild(img);
    img.src = data.avatar_url;
    div.appendChild(p);
    div.appendChild(div1);
    div1.appendChild(p1);
    div1.appendChild(p2);
    div1.appendChild(p3);
    div1.appendChild(p4);
    div1.appendChild(p5);
    div.classList.add('card');
    div1.classList.add('card-info');
    p.classList.add('username');
    p1.classList.add('location');
    p2.classList.add('html_url');
    p3.classList.add('followers');
    p4.classList.add('following');
    p5.classList.add('bio');
    h3.textContent = `Name: ${data.name}`;
    p.textContent = `Username: ${data.login}`;
    p1.textContent = `Location: ${data.location}`;
    p2.textContent = `URL: ${data.html_url}`;
    p3.textContent = `Followers: ${data.followers}`;
    p4.textContent = `Following: ${data.following}`;
    p5.textContent = `Bio: ${data.bio}`;
    return div;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/