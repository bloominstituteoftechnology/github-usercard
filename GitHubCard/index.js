/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/BarbosaRicardo
*/

axios.get('https://api.github.com/users/BarbosaRicardo')
  .then (data => {
    console.log('data: ', data)
    const myInfo = data.data;
    console.log('UserInfo: ', myInfo)
    

    //step 4
    const cards = document.querySelector('.cards')
    const cardInfo = cardCreator(myInfo)
    cards.appendChild(cardInfo)

    
  })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];


followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
    .then (data => {
      const card = cardCreator(data.data)
      const cards = document.querySelector('.cards')
      cards.appendChild(card)
    }) 
    
})


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card"> -yes
  <img src={image url of user} /> -yes
  <div class="card-info"> -yes

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

  const cards = document.querySelector('.cards');
  console.log(cards);

  function cardCreator(arg) {
    //create class elements 
    const card = document.createElement('div');
    const img = document.createElement('img');
    const cardInfo = document.createElement('div');
    const name = document.createElement('h3');
    const userName = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const profileLink = document.createElement('a');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');

    //create class lists 
    card.classList.add('card')
    cardInfo.classList.add('card-info')
    name.classList.add('name')
    userName.classList.add('username')
    
    //append children 
    card.appendChild(img)
    card.appendChild(cardInfo)
    cardInfo.appendChild(name)
    cardInfo.appendChild(userName)
    cardInfo.appendChild(location)
    cardInfo.appendChild(profile)
    cardInfo.appendChild(profileLink)
    cardInfo.appendChild(followers)
    cardInfo.appendChild(following)
    cardInfo.appendChild(bio)

    //textcontent 
    img.src = arg.avatar_url
    location.textContent = arg.location 
    name.textContent = arg.name
    userName.textContent = arg.login 
    const theProfileLink = arg.url
    profileLink.innerHTML = theProfileLink.link(arg.url)
    followers.textContent = `Followers: ${arg.followers}`
    following.textContent = `Following: ${arg.following}`
    bio.textContent = arg.bio 

    return card
  }






    








/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
