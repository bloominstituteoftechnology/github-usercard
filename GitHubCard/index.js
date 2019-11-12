
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/shyabiswas')
  .then(response => {


    const entryPoint = document.querySelector('.cards');

    const shyabiswas = githubUser(response);
    entryPoint.appendChild(shyabiswas);

  })
  .then(response => {
    
    axios.get(response.data.followers_url)
      .then(response =>{

        const followersArray = [];

        response.data.forEach((object) => {
          const followerUrl = object.url;
          followersArray.push(followerUrl);
        })

          followersArray.forEach((follower) => {

              axios.get(follower)
                .then(response => {

                  const entryPoint = document.querySelector('.cards');
                  const newFollower = githubUser(response);
                  entryPoint.appendChild(newFollower);
                })
                .catch(error => {
                  console.log(error);
                })
          })

      })
      .catch(error => {
        console.log(error);
      })
  })
  .catch( error => {
    console.log(error);
  })
// axios
// .get('https://api.github.com/users/shyabiswas')
// .then(response => {
//   const entryPoint = document.querySelector('.cards');
//   const shyabiswas = githubUser('response');
//   entryPoint.appendChild(shyabiswas);
//   return response;
// })

// .then(response => {
//   axios.get(response.data.followers_url)
//   .then(response =>{
//     const followersArray = [];
//     response.data.forEach((object)=> {
//       const followerUrl = object.url;
//       followersArray.push(followerUrl);
//     })
//     followersArray.forEach((follower)=> {
//       axios.get(follower)
//       .then(response => {
//         const entryPoint = document.querySelector('.cards');
//         const newFollower = githubUser(response);
//         entryPoint.appendChild(newFollower);
//       })  
//     })
//   //   axios.get(follower)
  //   .then(response => {
  //     const entryPoint = document.querySelector('.cards');
  //     const newFollower = githubUser(response);
  //     entryPoint.appendChild(newFollower);
  //   })
  // })
// })
// .catch(error => {
//   console.log('Error, inside 3rd .then nested inside of 2nd:', error);
// })

// .catch( error => {
// console.log("Error, Inside 1st or 2nd .then chain:", error);
// })





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


// const followersArray = ['tetondan', 'dustinmyers', 
// 'justsml', 'luishrd', 'bigknell'];

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
const githubUser =  (follower1) => 
{
  const card = document.createElement('div');
  const card_img = document.createElement('img');
  const card_info1 = document.createElement('div');
  const card_name = document.createElement('h3');
  const card_UN = document.createElement('p');
  const card_location = document.createElement('p');
  const card_profile = document.createElement('p');
  const card_link = document.createElement('a');
  const card_follow = document.createElement('p');
  const card_following = document.createElement('p');
  const card_bio = document.createElement('p');

  card_img.src = follower1.avatar_url;
  card_name.textContent = `Name: ${follower1.name}`;
  card_UN.textContent = `Username: ${follower1.login}`;
  card_location.textContent = `Location: ${follower1.location}`;
  card_profile.textContent = `Profile: `;
  card_link.href = follower1.html_url;
  card_link.textContent = `${follower1.html_url}`;
  card_follow.textContent = `Followers: ${follower1.followers}`;
  card_following.textContent = `Following: ${follower1.following}`;
  card_bio.textContent = `About: ${follower1.bio}`;


  card.append(card_img, card_info1);
  card_info1.append(card_name, card_UN, card_location, 
    card_profile, card_follow, card_following, card_bio);
  card_profile.append(card_link);

  card.classList.add('card');
  card_info1.classList.add('card-info');
  card_name.classList.add('name');
  card_UN.classList.add('username');

return card;
  }

// const cardsContainer1 = document.querySelector('.container')
// followersArray.forEach(event =>  {axios.get(`https://api.github.com/users/${event}`)
// .then(response => {
//   console.log(response.data);
//   const cardResponse = card1(response.data);

//   const allCard = document.querySelector('.cards');
//   allCard.append(cardResponse);
// });

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
  */
