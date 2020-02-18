const cardParent = document.querySelector('.cards')

//Get information from the API using axios  
axios.get('https://api.github.com/users/reidysj')
//Fill the first card with the initial response
.then(response => {
  let card = cardMaker(response.data);
  cardParent.prepend(card);
  return response.data.followers_url;
})
//Get the url from the initial object to pass values into axios again for
//More details on each follower
.then(response =>{
  axios.get(response)
  .then(response => {
    response.data.forEach(result => {
      axios.get(result.url)
      .then(response =>{
        let card = cardMaker(response.data);
        cardParent.append(card);
      })
    })
  })
})
//Log any errors
.catch(error => {
  console.log('Error: ', error)
})


function cardMaker(obj){
  //Create all required elements
  let cardDiv = document.createElement('div');
  let userPic = document.createElement('img');
  let infoDiv = document.createElement('div');
  let name = document.createElement('h3');
  let userName = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let linkToProfile = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');
  let calendar = document.createElement('img');
  let expandButton = document.createElement('p');
  
  //Add classes to certain elements
  cardDiv.classList.add('card');
  infoDiv.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  expandButton.classList.add('expandButton');
  calendar.classList.add('calendar');

  //Set content in each card based on relevant values in object passed in
  userPic.src = obj.avatar_url;
  name.textContent = obj.name;
  userName.textContent = obj.login;
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = `Profile: `;
  linkToProfile.href = obj.html_url;
  linkToProfile.textContent = obj.html_url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = obj.bio;
  calendar.src = `http://ghchart.rshah.org/${obj.login}`;
  calendar.alt = 'YO';
  expandButton.textContent = 'See Contribution Calendar';
  
  //Some styles for the calendar
  calendar.style.width = '110%';
  calendar.style.display = 'none';
  
  //Event listener to expand the card
  expandButton.addEventListener('click', () => calendar.style.display == 'none' ? calendar.style.display = 'block' : calendar.style.display = 'none');

  //Append everything to parent div
  profile.append(linkToProfile);
  infoDiv.append(name, userName, location, profile, followers, following, bio, calendar) ;
  cardDiv.append(userPic, infoDiv,expandButton);

  return cardDiv
}


