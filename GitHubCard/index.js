/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/nonshalant')
.then(resp =>{
  console.log(resp.data)
  greetingCard(resp)
})
.catch(err =>{
  console.error(err)
  console.log('error dude')
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

function greetingCard(url){
  const insertHere = document.querySelector('.cards')
  
  // creating the elements 
  const containerWrapper = document.createElement('div');
  const img = document.createElement('img');
  const headerDiv = document.createElement('div');
  const h3Div = document.createElement('h3');
  const paraDiv1 = document.createElement('p');
  const paraDiv2 = document.createElement('p'); 
  const paraDiv3 = document.createElement('p'); 
  const anchorTag = document.createElement('a');
  const paraDiv4 = document.createElement('p'); 
  const paraDiv5 = document.createElement('p'); 
  const paraDiv6 = document.createElement('p'); 

  // adding the class to the elements 
  containerWrapper.classList.add('card');
  img.src = url.avatar_url;
  headerDiv.classList.add('card-info');
  h3Div.classList.add('name');
  paraDiv1.classList.add('username');

  // setting the elements 
  img.src = url.data.avatar_url
  h3Div.innerText = url.data.name;
  paraDiv2.innerText = url.data.login;
  anchorTag.innerText = url.data.url;
  paraDiv4.innerText = url.data.followers;
  paraDiv5.innerText = url.data.following;
  paraDiv6.innerText = url.data.bio;

  // appending the elements to the page

  insertHere.appendChild(containerWrapper)
  containerWrapper.appendChild(img);
  containerWrapper.appendChild(headerDiv);

  
}
{/* <div class="card">
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
</div> */}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
