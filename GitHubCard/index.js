/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
function cardMaker(profileInfo) {

  // create all elements
  const newCard = document.createElement('div');
  const cardPic = document.createElement('img')
  const cardContent = document.createElement('div');
  const cardName = document.createElement('h3')
  const cardUserName = document.createElement('p');
  const cardLoc = document.createElement('p');
  const cardLink = document.createElement('p');
  const cardLinkBtn = document.createElement('a');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');
  const userCalendar = document.createElement('div')

  // create structure
  newCard.appendChild(cardPic);
  newCard.appendChild(cardContent);
  cardContent.appendChild(cardName);
  cardContent.appendChild(cardUserName);
  cardContent.appendChild(cardLoc);
  cardContent.appendChild(cardLink);
  cardContent.appendChild(cardLinkBtn);
  cardContent.appendChild(cardFollowers);
  cardContent.appendChild(cardFollowing);
  cardContent.appendChild(cardBio);
  newCard.appendChild(userCalendar);

  // set the content
  cardPic.setAttribute('src', profileInfo.avatar_url)
  cardName.textContent = profileInfo.name
  cardUserName.textContent = profileInfo.login
  cardLoc.textContent = `Location: ${profileInfo.location}`
  cardPic.setAttribute('alt', `${profileInfo.name}'s photo`)
  cardLink.setAttribute('href', profileInfo.html_url)
  cardLink.textContent = `Profile: ${profileInfo.html_url}`
  cardLinkBtn.setAttribute('href', profileInfo.html_url)
  cardFollowers.textContent = `Followers: ${profileInfo.followers}`
  cardFollowing.textContent = `Following: ${profileInfo.followers}`
  cardBio.textContent = `Bio: ${profileInfo.bio}`

  // apply styles
  newCard.classList.add('card');
  cardContent.classList.add('card-info');
  cardName.classList.add('name');
  cardUserName.classList.add('username');
  userCalendar.classList.add(`${profileInfo.login}`)
  cardLinkBtn.classList.add('fa','fa-github');
  cardLinkBtn.style.fontSize ='30px';
  cardLinkBtn.style.textDecoration ='none';
  cardLinkBtn.style.color ='black';

  /* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
  //return newCard;
  const cards = document.querySelector('.cards');
  cards.appendChild(newCard);

  new GitHubCalendar(`.${profileInfo.login}`, profileInfo.login);

}

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/


function cardMakerAPI(fullname) {
  axios.get(`https://api.github.com/users/${fullname}`)
    .then(res => {
      console.log(res.data);
      cardMaker(res.data);
    })
    .catch(err => {
      console.log(err);
    })
}
const gitUsers = ["AnaTulea", "JesseBentley", "Rodney-Race", "dcastaneda82", "Alphaseinor", "MileyWright"];

gitUsers.forEach(user => {
  console.log("user", user);
  cardMakerAPI(user);
});



// axios.get(`https://api.github.com/users/AnaTulea`)
// .then(res => {
//   console.log("hhhhhhh", res)
//   cardMaker(res.data)
//   })
//   .catch(err => {
//     console.log(err)
//   })

//   axios.get(`https://api.github.com/users/JesseBentley`)
// .then(res => {
//   console.log(res.data)
//   cardMaker(res.data)
//   })
//   .catch(err => {
//     console.log(err)
//   })


//   axios.get(`https://api.github.com/users/dcastaneda82`)
//   .then(res => {
//     console.log(res.data)
//     cardMaker(res.data)
//     })
//     .catch(err => {
//       console.log(err)
//     })


//   axios.get(`https://api.github.com/users/Rodney-Race`)
//   .then(res => {
//     console.log(res.data)
//     cardMaker(res.data)
//     })
//     .catch(err => {
//       console.log(err)
//     })


//     axios.get(`https://api.github.com/users/Alphaseinor`)
//     .then(res => {
//       console.log(res.data)
//       cardMaker(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })

//       axios.get(`https://api.github.com/users/MileyWright`)
//       .then(res => {
//         console.log(res.data)
//         cardMaker(res.data)
//         })
//         .catch(err => {
//           console.log(err)
//         })

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['https://api.github.com/users/JesseBentley', 'https://api.github.com/users/cesarhj19', 'https://api.github.com/users/Rodney-Race', 'https://api.github.com/users/Alphaseinor', 'https://api.github.com/users/MileyWright'];

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/