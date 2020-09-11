
import axios from 'axios';


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
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
  STEP 5: Now that you have your own card getting added to the DOM,
   either
    follow this link in your browser https://api.github.com/users/
    <Your github name>/followers,
    manually find some other users' github handles, or use the 
    list found at the
    bottom of the page. Get at least 5 different Github usernames
     and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user,
     creating a new card for each
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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


const test4nullAnswer = (response,type)=>{
  let returned = '';

  if(response == null && type === 'following' || response == null && type === 'followers'){
    returned = 'none';
  }else
  if(response == null && type === 'bio'){
    returned = 'No Response Given';
  }else if(response == null && type === 'location'){
    returned = 'No Location Given';
  }else if(response == null && type === 'active' || response == null && type === 'created'){
    returned = 'Not Known'
  }
    else{
    returned = response;
  }

  return returned;
}


const cards = document.querySelector('.cards');
const userNames = ['extrude575757','bigknell','tetondan',
'dustinmyers', 'justsml', 'luishrd', 'snowcoding','james-coulter'];
/*
  Where the action is happening componet
   <div class="cards">
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

   </div>
*/
const cardExecute = (r)=>{
    console.log('success!', r.data);
    let card = document.createElement('div');
    let cardDiv = document.createElement('div'); 

    cardDiv.classList.add('card-info');
    let name = document.createElement('h3');
    let githubName = document.createElement('h2');
    // The paragaphs 

    let pUnameActive = document.createElement('p');
    let pLocate = document.createElement('p');
    let pProfile = document.createElement('p');
    let pFollowing = document.createElement('p');
    let pFollowers = document.createElement('p');
    let pBio = document.createElement('p');
    // And their literal values
    pUnameActive.innerHTML ="<b>Last Active: </b> " +test4nullAnswer(r.data.updated_at,'active')+ " <b>Created: </b>"+test4nullAnswer(r.data.created_at,'created');;
    pLocate.innerHTML = "<b>Location: </b> " +test4nullAnswer(r.data.location,'location');;
    pProfile.innerHTML = "<b>URL: </b> <a href='"+r.data.html_url+"'>"+r.data.html_url+"</a>";
    pFollowers.innerHTML = "<b>Followers: </b> " +test4nullAnswer(r.data.followers,'followers');
    pFollowing.innerHTML = "<b>Following: </b>"+test4nullAnswer(r.data.following,'following');;
    pBio.innerHTML = "<b>Bio: </b>"+test4nullAnswer(r.data.bio,'bio');


    
    githubName.classList.add('username');
    githubName.textContent = r.data.login;
    name.classList.add('name');
    // name.classList.add('card');
    name.textContent = r.data.name;
    card.classList.add('card');
    let avatar_img_url = r.data.avatar_url;
    let img = document.createElement('img');
    img.classList.add('card');
    img.src = avatar_img_url;
    card.appendChild(img);
    cardDiv.appendChild(name);
    cardDiv.appendChild(githubName);
    cardDiv.appendChild(pUnameActive);
    cardDiv.appendChild(pLocate);
    cardDiv.appendChild(pProfile);
    cardDiv.appendChild(pFollowers);
    cardDiv.appendChild(pFollowing);
    cardDiv.appendChild(pBio);

    card.appendChild(cardDiv);
    
    cards.appendChild(card);
}


const cardCreator = (userName) =>{
  axios.get(`https://api.github.com/users/${userName}`)
  //  when a GET request is fulfilled, a .then on the promise chain allows us to access the data returned from the API
    .then((r) => {
    // ALL APIs HAVE DIFFERENT FORMATS IN THEIR RESPONSE. Print out the response or look at documentation to see what the API returned
      // handle success here
      cardExecute(r);
    
    })
  
  // when a GET request is rejected, a .catch on the chain allows us to capture errors returned from the API
  
    .catch((err) => {
      // handle error
      console.log('error!', err)
    })
  
  // a final .then (per axios docs) will be called regardless of state (fulfilled or rejected). it will be called after either the .then or the .catch.
  // you can use it to continue on with other tasks that must happen regardless of Promise state
  .then(() => {
    console.log('yahoo!')
  })
};




// The card Creator wraping through the array of github names
userNames.forEach((userName)=>{
    cardCreator(userName);
});