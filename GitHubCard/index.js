/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const divCards = document.querySelector('.cards')

const test = axios.get('https://api.github.com/users/xandre9-git')
  .then(res => {
    // console.log(res)
    let data = res.data
    //  console.log(data);
    let card = gitHubCardCreator(data);
    //  console.log(card)
    divCards.appendChild(card)
    //  console.log(divCards);

  })
  .catch(err => {
    console.log(err)
  })




// axios  //calling axios
//   .get("URL here!") // .get request!
//   .then(response => { //.then (telling axios what we want to do with the request(response) data once it has it!
//     //console.log(response); // console logging it so I can see the data structure thats returned.
//     response.data.topics.forEach(response => { 
//         const tab = topicCard(response);
//         entryPoint.appendChild(tab);
//       });
//   })// once I've seen the data and know what I want to grab, I use dot notation to navigate the object and use a foreach to loop through the object.


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

followersArray.push('Dellrodar', 'bashjoey', 'JamesLCarpino', 'ashoffmann90', 'benschinn');
console.log(followersArray[1]);

// function that takes followers array and creates their respective api.github.com card to web page
const friends = () => {
  let url = 'https://api.github.com/users/'
  for (let i = 0; i < followersArray.length; i++) {
    // console.log(url + followersArray[i])
    let apiList = [url + followersArray[i]]
    let axiosList = axios.get(apiList)
    .then(res => {
      let data = res.data
      console.log(data)
      let following = gitHubCardCreator(data)
      divCards.appendChild(following)
    })
    

  }
  return
}

friends(followersArray)


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

const gitHubCardCreator = (obj) => {
  const div1 = document.createElement('div')
  const img = document.createElement('img')
  const div2 = document.createElement('div')
  const h3 = document.createElement('h3')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const a = document.createElement('a')
  const p4 = document.createElement('p')
  const p5 = document.createElement('p')
  const p6 = document.createElement('p')

  div1.classList.add('card');
  div2.classList.add('card-info');
  h3.classList.add('name');
  p1.classList.add('username');

  img.src = `${obj.avatar_url}`
  a.href = `${obj.html_url}`  // link to github page

  const h3Text = document.createTextNode(obj.name) // name
  const p1Text = document.createTextNode(obj.login) // users username
  const locationText = document.createTextNode(obj.location)
  const aText = document.createTextNode(`${obj.html_url}`)

  p2.textContent = `Location: ${obj.location}`
  p3.textContent = "Profile:"
  a.textContent = `${obj.html_url}`
  p4.textContent = `Followers: ${obj.followers}`
  p5.textContent = `Following: ${obj.following}`
  p6.textContent = `Bio: ${obj.bio}`

  // console.log(img)
  // obj.login
  // obj.name
  // console.log(img);
  h3.appendChild(h3Text)
  div1.appendChild(img)
  div1.appendChild(div2)
  div2.appendChild(h3)
  div2.appendChild(p1)
  div2.appendChild(p2)
  div2.appendChild(p3)
  div2.appendChild(a)
  div2.appendChild(p4)
  div2.appendChild(p5)
  div2.appendChild(p6)

  // console.log(div1)

  return div1

}

// const wtfuck = gitHubCardCreator(divCards)
// console.log(wtfuck)


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
