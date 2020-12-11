import axios from 'axios'; //<--- axios was installed via npm, this import is added to the top. REMEMBER!!! Imports always go on the top of your files. 


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

   
        // The request printed an object in the browser console There's a lot of data here: 

          /*Object
          config: {url: "https://api.github.com/users/Rex-1031", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}

          data: {login: "Rex-1031", id: 64785141, node_id: "MDQ6VXNlcjY0Nzg1MTQx", avatar_url: "https://avatars1.githubusercontent.com/u/64785141?v=4", gravatar_id: "", …}
          ^^^^This is what we want! 

          headers: {cache-control: "public, max-age=60, s-maxage=60", content-length: "533", content-type: "application/json; charset=utf-8", etag: "W/
          "eb47c708be12636101d34d1ce97d2c54e979ab818d343b64e13cc9122f92a318"", last-modified: "Fri, 11 Dec 2020 00:20:52 GMT", …}
          request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
          status: 200
          statusText: "OK"
          __proto__: Object
          
          Here is what the data key values look like:
              data:
              avatar_url: "https://avatars1.githubusercontent.com/u/64785141?v=4"
              bio: "Burgeoning Web Developer, living in NE Ohio with my wife and dog. "
              blog: ""
              company: null
              created_at: "2020-05-04T12:21:24Z"
              email: null
              events_url: "https://api.github.com/users/Rex-1031/events{/privacy}"
              followers: 0
              followers_url: "https://api.github.com/users/Rex-1031/followers"
              following: 6
              following_url: "https://api.github.com/users/Rex-1031/following{/other_user}"
              gists_url: "https://api.github.com/users/Rex-1031/gists{/gist_id}"
              gravatar_id: ""
              hireable: null
              html_url: "https://github.com/Rex-1031"
              id: 64785141
              location: "NE Ohio"
              login: "Rex-1031"
              name: "Steve Clair"
              node_id: "MDQ6VXNlcjY0Nzg1MTQx"
              organizations_url: "https://api.github.com/users/Rex-1031/orgs"
              public_gists: 0
              public_repos: 34
              received_events_url: "https://api.github.com/users/Rex-1031/received_events"
              repos_url: "https://api.github.com/users/Rex-1031/repos"
              site_admin: false
              starred_url: "https://api.github.com/users/Rex-1031/starred{/owner}{/repo}"
              subscriptions_url: "https://api.github.com/users/Rex-1031/subscriptions"
              twitter_username: null
              type: "User"
              updated_at: "2020-12-11T00:20:52Z"
              url: "https://api.github.com/users/Rex-1031"
          
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

const followersArray = ['tetondan', 'dustinmyers','justsml', 'luishrd', 'bigknell'];

/* this function takes the followers from the array above,  loops through the info using a for each method via an axios request and returns the information into the gitCardMaker I created earlier. These new cards are added to the browser. */ 

followersArray.forEach((user)=>{
  axios.get(`https://api.github.com/users/${user}`)
  .then((res)=>{
    const newCard = gitCardMaker(res)
    entry.appendChild(newCard)
    console.log(res)
})
.catch((err) =>{
  debugger
  console.log(err)
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card"> <--------------------------------------------------------------------This is the main div, class name card.  It contains all of the data. 
      <img src={image url of user} /> <-----------------------------------------------------this img element is a child of the main div
      <div class="card-info"> <-------------------------------------------------------------this is the second div know as div2 it is also a child of the main div 
                                             <----------------------------------------------------------------------
        <h3 class="name">{users name}</h3>                                                                         |
        <p class="username">{users user name}</p>      <-p1                                                        |
        <p>Location: {users location}</p>              <-p2                                                        |
        <p>Profile:                                    <-p3                                                        |
          <a href={address to users github page}>{address to users github page}</a><- this element is a child to p3|  <<All of these elements are children of div2>>
        </p>                                                                                                       |
        <p>Followers: {users followers count}</p>      <-p4                                                        |
        <p>Following: {users following count}</p>      <-p5                                                        |
        <p>Bio: {users bio}</p>                        <-p6                                                        |
                                            <-----------------------------------------------------------------------
      </div>
    </div>
*/


// Card Maker Function
const gitCardMaker = (obj) =>{

  //Creating the elements and adding class names and content. 
  const div = document.createElement('div');
  div.classList.add('card');

  const img = document.createElement('img');
  img.src = obj.data.avatar_url;
  

  const div2 =document.createElement('div');
  div2.classList.add('card-info')
  

  const h3 = document.createElement('h3');
  h3.classList.add('name')
  h3.textContent = `Name: ${obj.data.name}`
  
  const p = document.createElement('p');
  p.classList.add('username');
  p.textContent = `Username: ${obj.data.login}`;

  const p2 = document.createElement('p');
  p2.textContent = `Location: ${obj.data.location}`;
 
  const p3 = document.createElement('p');
  p3.textContent = `Profile:`;
  const a = document.createElement('a');
  a.href = obj.data.url
  a.textContent = `${obj.data.url}`
  

  const p4 = document.createElement('p');
  p4.textContent = `Followers: ${obj.data.followers}`
  

  const p5 = document.createElement('p');
  p5.textContent = `Following: ${obj.data.following}`
  

  const p6 = document.createElement('p');
  p6.textContent = `Bio: ${obj.data.bio}`
 
//Appending the Children to their Parent. 
  p3.appendChild(a);

  div2.appendChild(h3);
  div2.appendChild(p);
  div2.appendChild(p2);
  div2.appendChild(p3);
  div2.appendChild(p4);
  div2.appendChild(p5);
  div2.appendChild(p6);

  div.appendChild(img);
  div.appendChild(div2);


  return div; //<----returning the div, always return something in your function!!
}

const entry = document.querySelector('.cards') //<---Entry point for the data, this is located in a div with the class name .cards in the index.html file.  The data for the card will be 'injected' here


axios.get('https://api.github.com/users/Rex-1031') //Using an axios get request to find my github account info. 
.then((res)=>{//<--- res aka response

  const newCards =gitCardMaker(res) //<---combining gitCardMaker and res into a new variable
  entry.appendChild(newCards) //<---Appending the card data to it's parent; the entry point : .card div on index.html. 
  console.log(res)  //<-----If the request gets resolved, the .then() function will be called and the console log will print out the request into the browser console. 
})
  .catch((err)=>{//<-- err aka error
    debugger
    console.log(err)//<----If the request is rejected, the .catch() function will be called and this  console log will catch the error launch debugger and print the error message if unsuccessful. 
  });

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
