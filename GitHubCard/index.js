/**
 * @file Project JavaScript file
 * @author Harry Henry Gebel <hhgebel@gmail.com>
 * @license MIT
 */

'use strict';
import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/**
 * fill document with a GitHub user's card and the cards of the user's
 * followers
 * @param {string} userName - GitHub username of the user
 * @return {Promise} Promise associated with function
 */
async function fillContent(userName) {
  let cardData;

  await axios.get(`https://api.github.com/users/${userName}`)
    .then(function (response) {
      cardData = response.data;
      const card = makeCard(cardData);
      const cards = document.querySelector('.cards');
      cards.appendChild(card);
    });
}
fillContent('HarryHenryGebel');

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

/**
 * Create a paragraph
 * @param {string} text - Text for the paragraph. No textContent is
 * created if undefined is passed in.
 * @param {string} [paragraphClass=undefined] - The class of the
 * paragraph. If not provided, paragraph is not assigned a class.
 * @return {Element} The p element created
 */
function makeParagraph(text, paragraphClass = undefined) {
  const p = document.createElement('p');

  // optionally add class to paragraph
  if (paragraphClass)
    p.classList.add(paragraphClass);

  // don't add textContent if text is undefined
  if (text != undefined)
    p.textContent = text;

  return p;
}

/**
 * Create a card element
 * @param {Object} cardData - The GitHub record being used as the
 * source of the card
 * @return {div} - The card that was created
 */
function makeCard(cardData) {
  // Create card
  const card = document.createElement('div');
  card.classList.add('card');

  // Avatar
  const avatar = document.createElement('img');
  avatar.setAttribute('src', cardData.avatar_url);
  card.appendChild(avatar);

  // card-info
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);

  // name
  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = cardData.name;
  cardInfo.appendChild(name);

  // user name
  const userName = makeParagraph(cardData.login, "username");
  cardInfo.appendChild(userName);

  // location
  const location = makeParagraph(`Location: ${cardData.location}`);
  cardInfo.appendChild(location);

  // profile
  const profile = makeParagraph('Profile: ');
  cardInfo.appendChild(profile);
  // profileLink is inside profile
  const profileLink = document.createElement('a');
  profileLink.setAttribute('href', cardData.html_url);
  profileLink.textContent = cardData.html_url;
  profile.appendChild(profileLink);

  // followers and following
  const followers = makeParagraph(`Followers: ${cardData.followers}`);
  cardInfo.appendChild(followers);
  const following = makeParagraph(`Following: ${cardData.following}`);
  cardInfo.appendChild(following);

  // bio
  const bio = makeParagraph(`Bio: ${cardData.bio}`);
  cardInfo.appendChild(bio);

  return card;
}

/*
  LIST of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

//  LocalWords:  axios profileLink userName
