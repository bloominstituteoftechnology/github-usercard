/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



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

<span> click </span>

</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


const followersArray = [

  'paulsolt',
  'rojcewiczj',
  'rogermcconkiejr',
   'tetondan',
  'dustinmyers',
];




//function create(arg) 
 


//DOM methods and properties, create a component



// const cards = document.querySelector('.card');

//Axios, send a GET request to the following URL 

axios.get('https://api.github.com/users/BenSolt')
    .then( (response)=> {
        // deal with the response data in here
        console.log(response.data);
        newCard(response.data)
        //cards.append(card1);
    
        })
    .catch( (err) => {
      console.log(err)
        // deal with the error in here
    })





function newCard(data){

  //define new elements//

  const carda = document.createElement('div');
  const image = document.createElement('img');
  const cardinfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const anchor = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');  
  const bio = document.createElement('p');

  const btnSpan = document.createElement('span');

// Setup structure of elements//

// Image
  image.src = data.avatar_url;
  carda.appendChild(image);
  
// Card info
  carda.appendChild(cardinfo)


//button
  carda.appendChild(btnSpan)
  btnSpan.textContent = '\u25bc'


// name
  cardinfo.appendChild(name)
  name.textContent = data.name

  //username
   cardinfo.appendChild(username)
   username.textContent = data.login

   //location
   cardinfo.appendChild(location) 
   location.textContent = data.location


   cardinfo.appendChild(profile)
   profile.textContent= 'Profile:'

   profile.appendChild(anchor)
   anchor.textContent = data.blog
   anchor.href = data.html_url;

   cardinfo.appendChild(followers)
   followers.textContent = data.followers

   cardinfo.appendChild(following)
   following.textContent = data.following

   cardinfo.appendChild(bio)
   bio.textContent = data.bio




// set Class Names//

  carda.classList.add('card')
  
  cardinfo.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')


  btnSpan.classList.add('btnSpan')


let entrypoint = document.querySelector('.cards')
entrypoint.appendChild(carda)


///////////////////////////////////////////////
//// STRETCH SPAN CLICKED - expand card.///////

btnSpan.addEventListener('click', () => {
  console.log('card Open')
  carda.classList.toggle('card-open');
  

});  

//cardinfo, card-open



return carda
    }


    
    followersArray.forEach(items => {
      axios.get(`https://api.github.com/users/${items}`)
      .then( (response)=> {
      const newCard2 = newCard(response.data)
    //  card.appendChild(newCard2);
    }
       )

    });