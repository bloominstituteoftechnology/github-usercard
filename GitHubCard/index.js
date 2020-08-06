import axios from 'axios';
import GitHubCalendar from 'github-calendar';

const myProfile = 'https://api.github.com/users/devbeau'; 
function getCard(profile){ // function gets a card based on api url
  axios.get(profile)
      .then(response => {
        console.log(response);
        let userDataObj = response.data;
        let card = createCard(userDataObj); //creates card from dataObj
        appendToPage(card); //attaches card to the cards container
      })
      .catch(error => {
        console.log("something went wrong", error)
        debugger
      });}

function getFollowerCards (profile){ // gets the url of followers from the api
  const followersArray = [];         // call on a profile and then requests 
  axios.get(`${profile}/followers`)  // their profile from the api.
      .then(response => {
        response.data.forEach((item, index) =>{ // urls into array
          followersArray[index] = item.url
        })
        followersArray.forEach(item =>{ // array into profile urls for getCard
          getCard(item);
        })
      })
      .catch(error => {
        console.log('something went wrong followers', error)
        debugger;
      })
}

// create an element with element, classname, and textcontent
function createElement(htmlElement, className = 0, textContent = 0){
  let element = document.createElement(htmlElement);
  // ternary conditions for default values
  className !== 0 ? element.classList.add(className) : element;
  textContent !== 0 ? element.textContent = textContent : element.textContent = null;
  return element;
}
// create an image with src attribute
function createImg(imgSrc){
  let image = createElement('img');
  image.setAttribute('src', imgSrc);
  return image;
}
// create an anchor with url and text attributes
function createAnchor(anchorUrl, anchorText){
  let anchor = createElement('a', 0, anchorText);
  anchor.setAttribute('href', anchorUrl);
  return anchor;
}
// append completed card to page
function appendToPage(card){
  let container = document.querySelector('.cards'); //container for cards
  return container.appendChild(card);
}
// instantiate elements and create the structure and content of the component:
function createCard(userDataObj){

  //instantiate the elements:
  let expandDiv = createElement('div', 'expand-div');
  let cardDiv = createElement('div','card');
  let cardImg = createImg(userDataObj.avatar_url);
  let cardInfo = createElement('div','card-info');
  let cardHeader = createElement('h3', 'name', userDataObj.name);
  let cardUsername = createElement('p', 'username', userDataObj.login);
  let cardLocation = createElement('p', 0, `Location: ${userDataObj.location}`);
  let cardProfile = createElement('p', 0, 'Profile: ');
  let profileAnchor = createAnchor(userDataObj.html_url, userDataObj.html_url);
  let cardFollowers = createElement('p', 0, `Followers: ${userDataObj.followers}`);
  let cardFollowing = createElement('p', 0, `Following: ${userDataObj.following}`);
  let cardBio = createElement('p', 0, userDataObj.bio);
  let expandButton = createElement('div','expand-button', '+');
  let statsDiv = createElement('div', 'stats-div');

  //appending the structure:
  cardProfile.appendChild(profileAnchor);
  console.log("cardProfile", cardProfile)
  

  for (let el of  [cardHeader, cardUsername, cardLocation,
                  cardProfile, cardFollowers, cardFollowing, cardBio]){
        console.log("appending loop", el);
        cardInfo.appendChild(el);
      }
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardInfo);
  expandDiv.appendChild(cardDiv);
  expandDiv.appendChild(statsDiv);
  

  // add the github calendar to the page
  GitHubCalendar(statsDiv, userDataObj.login, {responsive: true,
                 global_stats: false,
                summary_text: `Contributions made by @${userDataObj.login}`});

  console.log("card right before return", cardDiv);

  expandCard(expandButton);

  expandDiv.appendChild(expandButton);
  return expandDiv; // returns card component
}

function expandCard (button){
  button.addEventListener('click', (event) => {
    let parNode = button.parentNode;
    let statsContainer = button.previousElementSibling;
    parNode.classList.toggle('toggle-open');
    statsContainer.classList.toggle('toggle-on');
    console.log("expandCard ->", event);
  })
}

getCard(myProfile);                    //execute

getFollowerCards(myProfile);           //execute

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
