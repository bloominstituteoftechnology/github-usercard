import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

  const card = document.querySelector('.cards');
  console.log(card);
    axios.get('https://api.github.com/users/vanessadixonp')
    .then(response => {
    const res = response.data;
    console.log(res);
    card.append(gitCard(res));
    })
    
    axios.get('https://api.github.com/users/vanessadixonp/followers')
    .then(response=> {
      const res = response.data;
      
      res.forEach(users => {
        followersArray.forEach(follower => {
          if(users.login === follower) {
            // console.log(users);
              card.append(followerCard(users));
          }
        })
        // console.log(e.login);
      })
      // followersArray.forEach(i => {
      //   console.log(i);
        
      //   card.append()
      // }).

      
      
        // console.log(pickedUser);
      })


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

const followersArray = ["Wais-A","bayronpuac","chelsabeth","seanaleid","adkhiker","bbaney","aaamg","mary-clayton"];
// console.log(followersArray);



function gitCard(obj) {
    const div = document.createElement('div'),
          img = document.createElement('img'),
          innerDiv = document.createElement('div'),
          h3 = document.createElement('h3'),
          userName = document.createElement('p'),
          location = document.createElement('p'),
          profile = document.createElement('p'),
          aTag = document.createElement('a'),
          followers = document.createElement('p'),
          following = document.createElement('p'),
          bio = document.createElement('p');

          div.classList.add('card');
          img.src = obj.avatar_url;
          div.appendChild(img);
          innerDiv.classList.add('card-info');
          div.appendChild(innerDiv);
          h3.classList.add('name');
          h3.innerText = obj.name;
          innerDiv.appendChild(h3); 
          userName.classList.add('username');
          userName.innerText = obj.login;
          innerDiv.appendChild(userName);
          location.innerText = `Location: ${obj.location}`;
          innerDiv.appendChild(location);
        
          profile.innerText = `Profile:`;
          aTag.href = obj.html_url;
          aTag.innerText = obj.html_url;
          profile.appendChild(aTag);
          innerDiv.appendChild(profile);
          followers.innerText = `Followers: ${obj.followers}`,
          innerDiv.appendChild(followers);
          following.innerText = `Following: ${obj.following}`,
          innerDiv.appendChild(following);
          bio.innerText = `Bio: ${obj.bio}`;
          innerDiv.appendChild(bio);
        
        console.log(div);
        return div;
}



function followerCard(obj) {
  const div = document.createElement('div'),
  img = document.createElement('img'),
  innerDiv = document.createElement('div'),
  h3 = document.createElement('h3'),
  profile = document.createElement('p');

  img.src = obj.avatar_url;
  h3.innerText = obj.login;
  profile.innerText = `Profile: ${obj.html_url}`

  div.appendChild(img);
  div.classList.add('card');
  div.appendChild(innerDiv);
  innerDiv.classList.add('card-info');
  innerDiv.appendChild(h3);
  innerDiv.appendChild(profile);

  
  // console.log(div);

  return div;

}

followerCard();

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
