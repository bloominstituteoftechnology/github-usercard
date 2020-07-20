import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

  const card = document.querySelector('.cards');

    axios.get('https://api.github.com/users/vanessadixonp')
    .then(response => {
    const res = response.data;
    card.append(gitCard(res));
    })
    .catch(err => {
      console.log(`The error is: ${err} `);
    });
    
    // axios.get('https://api.github.com/users/vanessadixonp/followers')
    // .then(response=> {
    //   const res = response.data;

    //   res.forEach(users => {
    //     followersArray.forEach(follower => {
    //       if(users.login === follower) {
    //           card.append(followerCard(users));
    //       }
    //     })
    //   });

    //   })
    //   .catch(err=> {
    //     console.log(`The error is: ${err} `);
    //   });

  
const followersArray = ["Wais-A","bayronpuac","chelsabeth","seanaleid","adkhiker","umekow","aaamg","mary-clayton"];


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
        
          profile.innerText = `Profile: `;
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
        return div;
}


function followerCard(obj) {
  const div = document.createElement('div'),
  img = document.createElement('img'),
  innerDiv = document.createElement('div'),
  h3 = document.createElement('h3'),
  aTag = document.createElement('a'),
  profile = document.createElement('p');

  img.src = obj.avatar_url;
  h3.innerText = obj.login;
  profile.innerText = `Profile: `;
  aTag.href = obj.html_url;
  aTag.innerText = obj.html_url;
  profile.appendChild(aTag);

  div.appendChild(img);
  div.classList.add('card');
  div.appendChild(innerDiv);
  innerDiv.classList.add('card-info');
  innerDiv.appendChild(h3);
  innerDiv.appendChild(profile);

  return div;
}


//stretch goal 1
function showCard(url) {
  let followers = []; 
  axios.get(url)
  .then(users => {
      followers = [...users.data];
        followers.forEach(user => {
          card.append(followerCard(user));
        })
  })
}
showCard(`https://api.github.com/users/vanessadixonp/followers`);



