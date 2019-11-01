/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');

axios.get("https://api.github.com/users/YaniWessi")
.then(response => {
  cards.append(gitCard(response.data))
  // console.log(response)
});

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

const followersArray = ['jevoncochran', 'Hail91', 'Gio5298'];
followersArray.forEach(item =>{axios.get(`https://api.github.com/users/${item}`)
.then(response => {
  cards.append(gitCard(response.data))
  // console.log(response)
});
})
 
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

function gitCard(obj){

  const card = document.createElement('div'),
      cardInfo = document.createElement('div')
        img = document.createElement('img'),
        h3  = document.createElement('h3'),
        p1  = document.createElement('p'),
        p2  = document.createElement('p'),
        p3  = document.createElement('p'),
        p4  = document.createElement('p'),
        p5  = document.createElement('p'),
        p6  = document.createElement('p'),
        a   = document.createElement('a'),
 
        card.append(img);
        card.append(cardInfo);
        cardInfo.append(h3, p1, p2, p3, p4, p5,p6);
        p3.append(a);

        card.classList.add('card');
        cardInfo.classList.add('card-info');
        h3.classList.add('name');
        p1.classList.add('username');

        img.src = obj.avatar_url;
        img.alt = 'this is an image';
        h3.textContent = obj.name;
        p1.textContent = obj.login;
        p2.textContent = obj.location;
        a.textContent = obj.html_url
        a.link = obj.html_url;
        p4.textContent = obj.followers;
        p5.textContent = obj.following;
        p6.textContent = obj.bio;



      return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
