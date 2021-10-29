/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Cassius-Cassity')
.then(resp => {
  console.log(resp.data);
})
.catch(err =>{
  console.log('error');
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
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

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

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
const divCard = document.querySelector('.cards')
function myCardMaker({avatar_url, name, login, location, html_url, followers, following, bio }){
  const card = document.createElement('div');
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const h3 = document.createElement('h3')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const a = document.createElement('a')
  const p4 = document.createElement('p')
  const p5 = document.createElement('p')
  const p6 = document.createElement('p')

card.appendChild(image)
card.appendChild(cardInfo)
cardInfo.appendChild(h3)
cardInfo.appendChild(p1)
cardInfo.appendChild(p2)
cardInfo.appendChild(p3)
p3.appendChild(a)
cardInfo.appendChild(p4)
cardInfo.appendChild(p5)
cardInfo.appendChild(p6)

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  h3.classList.add('name')
  p1.classList.add('username')

image.src = avatar_url;
h3.textContent = name;
p1.textContent = login;
p2.textContent = `location: ${location}`;
p3.textContent = 'Profile:';
a.href = html_url;
a.textContent = html_url;
p4.textContent = `Followers: ${followers}`;
p5.textContent = `Following: ${following}`;
p6.textContent = `bio: ${bio}`

return card

} 

const person1 = 'Cassius-Cassity';

const CreateUserCard = async (person) => {
  try {
    const resp = await axios.get(`https://api.github.com/users/${person}`);
    console.log(resp);
    const userData = resp.data;
    const gitCard = myCardMaker(userData);
    divCard.appendChild(gitCard);
    console.log(gitCard)
  }
  catch(err) {
    console.log(err);
  }
}

followersArray.forEach(follower =>{
  CreateUserCard(follower);
})

CreateUserCard(person1);
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
