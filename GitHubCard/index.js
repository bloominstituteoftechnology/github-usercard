
const cardsAttach = document.querySelector('.cards');

  function createUserCard(obj){

    // Create DOM elements
  
    const card = document.createElement('div');
    const userImg = document.createElement('img');
    const cardInfo = document.createElement('div');
    const name = document.createElement('h3');
    const userName = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const profileAddress = document.createElement('a');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');
  
  
    // Set classes
  
    card.className = ('card');
    cardInfo.className = ('card-info');
    name.className = ('name');
    userName.className = ('username');
  
  
    // Set contents / text
  
    userImg.setAttribute('src', obj.avatar_url);
    name.textContent = obj.name;
    userName.textContent = obj.login;
    location.textContent = obj.location;
    profile.textContent = 'Profile: '
    profileAddress.textContent = obj.html_url;
    //profileAddress.textContent = `${obj.html_url}`;
    profileAddress.setAttribute('href', obj.html_url);
    followers.textContent = `Followers: ${obj.followers}`;
    following.textContent = `Following: ${obj.following}`;
    bio.textContent = `Bio: ${obj.bio}`;
  
  
    // Create Structure
  
    card.appendChild(userImg);
    card.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    profile.appendChild(profileAddress);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);
  
  
    return card;
  
  
  }

  // rendering my card 
  axios.get('https://api.github.com/users/samcode206')
  .then(response => {

    const gitData = response.data;

    cardsAttach.appendChild(createUserCard(gitData));

  })

  .catch(error => {
    console.log('Here is the problem', error);
  })

// rendering the instructor cards

const instructors = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

instructors.forEach(inst => {
  axios.get(`https://api.github.com/users/${inst}`)
    .then(response => {

      const gitData = response.data;

      cardsAttach.appendChild(createUserCard(gitData));
    })

    .catch(error => {
      console.log('Here is the problem', error)
    })
})

