/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



let cards = document.querySelector(".cards");

axios.get('https://api.github.com/users/fjhansen')
  .then(response => {

    let newCard = gitCreator(response.data);
    cards.appendChild(newCard);
  })
  .catch(error => {
    console.log(error)
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

const followersArray = [];

const followCards = () => {
  axios.get('https://api.github.com/users/fjhansen/followers')
    .then(response => {

      //console.log(response.data);
      response.data.forEach(item => {

        followersArray.push(axios
          .get(item.url)
          .then(response => {
            let newFollow = gitCreator(response.data);

            cards.appendChild(newFollow);

          }))

      })
    })
    .catch(error => console.error(error))
}

followCards();




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

function gitCreator(obj) {

  let card = document.querySelector('.card');
  let div1 = document.createElement('div');
  let img = document.createElement('img');
  let div2 = document.createElement('div');
  let h3 = document.createElement('h3');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let a = document.createElement('a');
  let p4 = document.createElement('p');
  let p5 = document.createElement('p');
  let p6 = document.createElement('p');

  // Classes

  div1.classList.add('card');
  div2.classList.add('card-info');
  h3.classList.add('name');
  p1.classList.add('username');

  // Text

  img.src = obj.avatar_url;
  h3.textContent = obj.name;
  p1.textContent = obj.login;
  p2.textContent = obj.location;
  p3.textContent = obj.html_url;
  p4.textContent = obj.followers;
  p5.textContent = obj.following;
  p6.textContent = obj.bio;
  a.textContent = obj.html_url;


  // Append

  div1.appendChild(div2);
  div1.prepend(img);
  div2.appendChild(h3);
  div2.appendChild(p1);
  div2.appendChild(p2);
  div2.appendChild(p3);
  p3.appendChild(a);
  div2.appendChild(p4);
  div2.appendChild(p5);
  div2.appendChild(p6);

  return div1

}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/