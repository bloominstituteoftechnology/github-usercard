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
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

//const followersArray = [];

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
function github_card(obj){

  //creating 
  const card=document.createElement('div');
  const user_img_url=document.createElement('img');
  const card_info=document.createElement('div');
  const name=document.createElement('h3');
  const user_name=document.createElement('p');
  const location=document.createElement('p');
  const profile=document.createElement('p');
  const github_address=document.createElement('a');
  const followers=document.createElement('p');
  const following=document.createElement('p');
  const bio=document.createElement('p');
  

  //append
  card.appendChild(user_img_url);
  card.appendChild(card_info);
  card_info.appendChild(name);
  card_info.appendChild(user_name);
  card_info.appendChild(location);
  card_info.appendChild(profile);
  profile.appendChild(github_address);
  card_info.appendChild(followers);
  card_info.appendChild(following);
  card_info.appendChild(bio);
  

//classlist
card.classList.add('card');
card_info.classList.add('card-info');

//content update
user_img_url.src=obj.avatar_url;
name.textContent=obj.name;
user_name.textContent=obj.login;
location.textContent="location:"+obj.location;
profile.textContent="Profile:"+obj.html_url;

//github_address.setAttribute('href',obj.html_url);
//github_address.setAttribute('textContent', "hi");
github_address.href=obj.html_url;
console.log(github_address.href);
github_address.textContent="github link";
console.log(github_address);
//github_address.href=obj.html_url;
//github_address.textContent=obj.html_url;
followers.textContent="followers:"+obj.followers;
following.textContent="following:"+obj.following;
bio.textContent="bio:"+obj.bio;




  return card ;

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
const followersArray=[ 
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];
  
const cards=document.querySelector('.cards');

let name = "Nandhini-Madan";
followersArray.forEach(element=>{
  console.log(element);

  axios
  .get(`https://api.github.com/users/${element}`)
  .then((res) => {
   // console.log("Here is the res: ", res);
    cards.append(github_card(res.data));
  })
  .catch((err) => {
    console.log("There was an error: ", err);
  });

});
