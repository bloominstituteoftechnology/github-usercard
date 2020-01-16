/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



const cardLocation = document.querySelector('.cards');

axios.get('https://api.github.com/users/blakelower')
.then(response => {
  console.log(response.data);
  cardLocation.appendChild(createCard(response.data));
});
const followersArray = [
  "jordanalexander22",
  "eoinlynchcodes",
  "justsml",
  "luishrd",
  "bigknell"
];



