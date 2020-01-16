/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/haase1020/followers")
.then(response =>{
  followersArray.push(response.data);
  console.log(response);
  
  
  // response.data.login.forEach(item =>{
  //   const newStudent = studentCard(item);
  //   entryPoint.appendChild(newStudent);
  // })
})
.catch(error =>{
  console.log("the data was not returned", error)
})

const followersArray = [];
console.log(followersArray);

const entryPoint = document.querySelector(".cards");
console.log ("entrypoint",entryPoint)
followersArray.forEach(data=>{
  const newCard = gitCard(data);
  entryPoint.append(newCard);
  console.log (newCard);
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
function studentCard(ghcard){
  const newCard= document.createElement('div'),
        newImg = document.createElement('img'),
        cardInfo = document.createElement('div'),
        nameCard = document.createElement('h3'),
        userName = document.createElement('p'),
        location = document.createElement('p'),
        profile = document.createElement('p'),
        address = document.createElement('a'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        bio = document.createElement('p');

        newCard.classList.add('card');
        cardInfo.classList.add('card-info');
        nameCard.classList.add('name');
        userName.classList.add('username');
        const i=index;
        newImage.src = imgUrl;
        newCard.append(newImage);
        newCard.append(cardInfo);
        cardInfo.append(nameCard);
        cardInfo.append(userName);
        cardInfo.append(location);
        cardInfo.append(profile);
        cardInfo.append(address);
        cardInfo.append(followers);
        cardInfo.append(following);
        cardInfo.append(bio);

        img.src = followersArray[i].avatar.url;
        h3.textContent = followersArray[i].name;
        userName.textContent = followersArray[i].login;
        location.textContent = followersArray[i].location;
        h3.textContent = followersArray[i].name;
        profileUrl.src = followersArray[i].html_url;
        profileUrl.textContent = followersArray[i].followers;
        followers.textContent = followersArray[i].followers;
        following.textContent = followersArray[i].following;
        bio.textContent = followersArray[i].bio;

        return newCard;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
