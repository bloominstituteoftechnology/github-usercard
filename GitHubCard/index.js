/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios
//     .get("https:api.github.com/users/playtez") //
//     .then(res => {
//         console.log(res);
//     });

/* Step 2: Inspect and study the data coming back, this is YOUR 
           github info! You will need to understand the structure of this 
           data in order to use it to build your component function 

followers: 12
followers_url: "https://api.github.com/users/Playtez/followers"
following: 0
following_url: "https://api.github.com/users/Playtez/following{/other_user}"

           Skip to Step 3.
        */

/* Step 4: Pass the data received from Github into your function, 
                   create a new component and add it to the DOM as a child of .cards
        */

const cardEntry = document.querySelector(".cards");

const friendsArray = [
    "https://api.github.com/users/tetondan",
    "https://api.github.com/users/dustinmyers",
    "https://api.github.com/users/justsml",
    "https://api.github.com/users/luishrd",
    "https://api.github.com/users/bigknell"
];

axios //
    .get("https://api.github.com/users/playtez/followers") //
    .then(res => {
        let followersArray = res.data.map(users => {
            return users.url;
        });

        for (const value of followersArray) {
            axios
                .get(value) //
                .then(res => {
                    // console.log(res);
                    const ProfileCard = createComponent(res.data);
                    cardEntry.appendChild(ProfileCard);
                })
                .catch(error => {
                    console.log("The data was not returned", error);
                });
        }
    });

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

function createComponent(user) {
    const newCard_D = document.createElement("div"),
        imgUser_I = document.createElement("img"),
        cardInfo_D = document.createElement("div"),
        name_h3 = document.createElement("h3"),
        userName_p = document.createElement("p"), //playtez
        userLoca_p = document.createElement("p"),
        profile_p = document.createElement("p"),
        address_a = document.createElement("a"),
        followers_p = document.createElement("p"),
        following_p = document.createElement("p"),
        bio_p = document.createElement("p");

    name_h3.textContent = user.name;
    userName_p.textContent = user.login;
    userLoca_p.textContent = `Location: ${user.location}`;
    profile_p.textContent = `Profile: `;
    address_a.textContent = user.html_url;
    followers_p.textContent = `Followers: ${user.followers}`;
    following_p.textContent = ` Following: ${user.following}`;
    bio_p.textContent = `Bio: ${user.bio}`;

    newCard_D.appendChild(imgUser_I);
    newCard_D.appendChild(cardInfo_D);
    cardInfo_D.appendChild(name_h3);
    cardInfo_D.appendChild(userName_p);
    cardInfo_D.appendChild(userLoca_p);
    cardInfo_D.appendChild(profile_p);
    cardInfo_D.appendChild(followers_p);
    cardInfo_D.appendChild(following_p);
    cardInfo_D.appendChild(bio_p);
    profile_p.appendChild(address_a);

    imgUser_I.src = user.avatar_url;
    address_a.href = user.html_url;

    newCard_D.classList.add("card");
    cardInfo_D.classList.add("card-info");
    name_h3.classList.add("name");
    userName_p.classList.add("username");

    return newCard_D;
}

/* List of LS Instructors Github username's: 
                                          tetondan
                                          dustinmyers
                                          justsml
                                          luishrd
                                          bigknell
                                         */