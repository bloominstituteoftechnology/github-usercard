import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



 let gitUser = document.querySelector('div.cards')

const getInfo = (userName) =>{
 axios.get(`https://api.github.com/users/${userName}`)
.then(data =>{
  // gitUser.appendChild(mUser(data))
  mUser(data.data)

  
  console.log(data.data)

})

.catch(err =>{console.error(err)})
.finally(done =>{console.log('this worked')})
}



const followersArray = [
  'tetondan',
 'dustinmyers',
 'justsml',
 'luishrd',
 'bigknell'];


followersArray.forEach(username => {
  getInfo(username)
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
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



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p1>Location: {users location}</p1>
        <p2>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p2>
        <p3>Followers: {users followers count}</p3>
        <p4>Following: {users following count}</p4>
        <p5>Bio: {users bio}</p5>
      </div>
    </div>
*/


 
function mUser(obj){
 
  const card = document.createElement('div')
  gitUser.appendChild(card)
        card.classList.add('card')

  const img = document.createElement('img')
  card.appendChild(img)
        img.classList.add('img')
        img.setAttribute('src',obj.avatar_url )

  const cardInfo = document.createElement('div')
  card.appendChild(cardInfo)
        cardInfo.classList.add('cardInfo')

  const h3 = document.createElement('h3')
  cardInfo.appendChild(h3)
        h3.classList.add('name')     
        h3.textContent = obj.name

  const p = document.createElement('p')
  cardInfo.appendChild(p)
        p.classList.add('p')  
        p.textContent = obj.login 
     

  const p1 = document.createElement('p')
  cardInfo.appendChild(p1)
        p1.classList.add('p1')  
        p1.textContent = `Location: ${obj.location}`

  const p2 = document.createElement('p')
  cardInfo.appendChild(p2)              
        p2.classList.add('p2') 
        p2.textContent = `Profile: ` 
  const link = document.createElement('a')
 
  p2.appendChild(link)
        link.setAttribute('href', obj.html_url)
        link.textContent = obj.html_url
 console.log(link)
  const p3 = document.createElement('p')
  cardInfo.appendChild(p3)
        p3.classList.add('p3') 
        p3.textContent = `Followers: ${obj.followers}`;

  const p4 = document.createElement('p')
  cardInfo.appendChild(p4)
        p4.classList.add('p4') 
        p4.textContent = `Followers: ${obj.following}` 

  const p5 = document.createElement('p')
  cardInfo.appendChild(p5)
        p5.classList.add('p5')      
        p5.textContent = `Bio: ${obj.bio}`
  return card;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/





// {login: "andrejohnson", id: 6566149, node_id: "MDQ6VXNlcjY1NjYxNDk=", avatar_url: "https://avatars.githubusercontent.com/u/6566149?v=4", gravatar_id: "", …}
// avatar_url: "https://avatars.githubusercontent.com/u/6566149?v=4"
// bio: null
// blog: ""
// company: null
// created_at: "2014-02-02T07:58:04Z"
// email: null
// events_url: "https://api.github.com/users/andrejohnson/events{/privacy}"
// followers: 3
// followers_url: "https://api.github.com/users/andrejohnson/followers"
// following: 1
// following_url: "https://api.github.com/users/andrejohnson/following{/other_user}"
// gists_url: "https://api.github.com/users/andrejohnson/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/andrejohnson"
// id: 6566149
// location: null
// login: "andrejohnson"
// name: "Andre K Johnson"
// node_id: "MDQ6VXNlcjY1NjYxNDk="
// organizations_url: "https://api.github.com/users/andrejohnson/orgs"
// public_gists: 0
// public_repos: 27
// received_events_url: "https://api.github.com/users/andrejohnson/received_events"
// repos_url: "https://api.github.com/users/andrejohnson/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/andrejohnson/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/andrejohnson/subscriptions"
// twitter_username: null
// type: "User"
// updated_at: "2021-09-28T05:18:24Z"
// url: "https://api.github.com/users/andrejohnson"
// __proto__: Object