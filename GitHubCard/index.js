//Axios import
import axios from 'axios';

//404 errors look at end of video

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


//--- Get Request---//
//Axios.get retrieves from the following URL
axios.get(`https://api.github.com/users/tfbielawski`)
//Then logs the data to the console
.then(( data ) => {console.log(data)})
//Catch error statement
.catch(err => console.log(err));



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

//Declare the array holding LS instructor names
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    -<div class="card">
      -<img src={image url of user} />
      -<div class="card-info">
        -<h3 class="name">{users name}</h3>
        -<p class="username">{users user name}</p>
        -<p>Location: {users location}</p>
        -<p>Profile:
          -<a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

//Define the function, passes in data
function gitHubCard(data)
{

  //---Div class "card" --//
  //Create a div element, assign to divClassCard
  const divClassCard = document.createElement("div");

  //---Image element---//
  //Crate img element and assign to imgSrc
  const imgSrc = document.createElement("img");
  //Append imgSrc to divClassCard
  divClassCard.appendChild(imgSrc);
  //Link the image to imgSrc
  imgSrc.src = data.avatar_url;

  //---Card info div element---//
  //Create a div element, assign to divCardInfo
  const divClassCardInfo = document.createElement("div");
  //Assign the class
  divClassCardInfo.classList.add("card-info");
  //Append to divClassCard
  divClassCard.appendChild(divClassCardInfo);

  //---h3 name element---//
  //Create h3 element, assign to h3ClassName
  const h3ClassName = document.createElement("h3");
  //Assign the class
  h3ClassName.classList.add("name");
  //Append h3ClassName to divClassCardInfo
  divClassCardInfo.appendChild(h3ClassName);
  //Assign the data name value to pClassName
  h3ClassName.textContent = `name: ${data.name}`;

  //---p, user name---//
  //Create p element, assign to pClassUserName
  const pClassUserName =  document.createElement("p");
  //Assign the class
  pClassUserName.classList.add("username");
  //Append pClassUserName to divClassCardInfo
  divClassCardInfo.appendChild(pClassUserName);
  //Assign the data login value to pClassUserName
  pClassUserName.textContent = `login: ${data.login}`;

  //---p location---//
  //Create p element, assign to pLocation
  const pLocation =  document.createElement("p");
  //Append pLocation to divClassCardInfo
  divClassCardInfo.appendChild(pLocation);
  //Assign the location value to pLocation
  pLocation.textContent = `location: ${data.location}`;

  //---p profile, a href---//
  //Create p element, assign to pProfile
  const pProfile=  document.createElement("p");
  //Append pProfile to divClassCardInfo
  divClassCardInfo.appendChild(pProfile);

  //Create "a" element, assign to aWebAddress
  const aWebAddress=  document.createElement("a");
  //Append aWebAddress to pProfile
  pProfile.appendChild(aWebAddress);
  //Assign the url to aWebAddress
  aWebAddress.setAttribute("href", data.url);

  //---p followers---//
  //Create p element, assign to pFollowers
  const pFollowers=  document.createElement("p");
  //Append pFollowers to divClassCardInfo
  divClassCardInfo.appendChild(pFollowers);
  //Apply the follwers data to pFollowers
  pFollowers.textContent = `followers: ${data.followers}`;

  //---p following---//
  //Create p element, assign to pFollowing
  const pFollowing =  document.createElement("p");
  //Append pFollowing to divClassCardInfo
  divClassCardInfo.appendChild(pFollowing);
  //Apply the following data value to pFollowing
  pFollowing.textContent = `following: ${data.following}`;


  //---p Bio---//
  //Create p element, assign to pBio
  const pBio =  document.createElement("p");
  //Append pBio to divClassCardInfo
  divClassCardInfo.appendChild(pBio);
  //Apply the bio data value to pBio
  pBio.textContent = `bio: ${data.bio}`;

  //Function return statement, return the divClassCard
  return divClassCard;
}

gitHubCard(data);

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
