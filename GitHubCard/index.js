import axios from 'axios'
import React from 'react'

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        users: users
    }
  }

    componentDidMount() {
      this.fetchCards("babeytapratt");
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.users !== this.state.users) {
      if (this.state.users === 'luishrd') {
            this.fetchCards('babeytapratt');
          }
      }
    }


  fetchCards = (users) => {
    axios.get(`https://api.github.com/${users}`)
        .then(res => {
          this.setState({
            users:res.data.message
          });
        })
      .catch(err => console.log(err))
  }

  handleChange = (e) => {
    this.setState({ users:e.target.value})
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.fetchCards(this.state.users);
    this.setState({users: ""})
  }

  render() {
    return (
      <div className="App">
        <h1>Search for Github Member's Profiles</h1>
        <form onSubmit={this.handleSearch}>
          <input value={this.state.users} onChange={this.handleChange} type="text" />
          <button>Get Members</button>
        </form>

        <div className = "githubCard">
          <div className = "imageContainer">
            <img width="200" key={item} src = {item} alt={item} />
            <h2>{this.state.userName}</h2>
          </div>

          <div className = "cardInfo">
            <h3>{this.state.userLogin}</h3>
            <h3>{this.state.userLocation}</h3>
            <h3>{this.state.url}</h3>
            <h3>{this.state.followers}</h3>
            <h3>{this.state.following}</h3>
          </div>

        </div>
      </div>
    )
  }

}
export default App
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
// const entryPoint = document.querySelector('.cards')

// function githubCardsMaker(object) {

//   const githubCard = document.createElement('div')
//   const image = document.createElement('img')
//   const userName = document.createElement('h2')
//   const cardInfo = document.createElement('div')
//   const userLogin = document.createElement('p')
//   const userLocation = document.createElement('p')
//   const userProfile = document.createElement('p')
//   const userHtml_url = document.createElement('a')
//   const userFollowers = document.createElement('p')
//   const userFollowing = document.createElement('p')
//   const userBio = document.createElement('p')

//   githubCard.appendChild(image)
//   githubCard.appendChild(cardInfo)
//   cardInfo.appendChild(userName)
//   cardInfo.appendChild(userLogin)
//   cardInfo.appendChild(userLocation)
//   cardInfo.appendChild(userProfile)
//   userProfile.appendChild(userHtml_url)
//   cardInfo.appendChild(userFollowing)
//   cardInfo.appendChild(userFollowers)
//   cardInfo.appendChild(userBio)

//   githubCard.classList.add('card')
//   image.classList.add('image')
//   cardInfo.classList.add('card-info')
//   userName.classList.add('name')
//   userLogin.classList.add('username')
//   userLocation.classList.add('location')
//   userProfile.classList.add('profile')
//   userHtml_url.classList.add('user-url')
//   userFollowers.classList.add('followers')
//   userFollowing.classList.add('following')
//   userBio.classList.add('bio')

//   image.src = object.avatar_url
//   userName.textContent = object.name
//   userLogin.textContent = object.login
//   userLocation.textContent = `Location: ${object.location}`
//   userProfile.textContent = `Profile: ${object.url}`
//   userFollowers.textContent = `Followers: ${object.followers}`
//   userFollowing.textContent = `Following: ${object.following}`
//   userBio.textContent = `Bio: ${object.bio}`

//   return githubCard
// }

// axios.get('https://api.github.com/users/babeytapratt')
//   .then(res =>  {
//     const card = githubCardsMaker(res.data)

//       console.log(card)
//       entryPoint.append(card)

//       const followersArray = ['luishrd', 'bigknell', 'tetondan', 'dustinmyers', 'justsml' ];

//       followersArray.forEach((follower) => {
//         axios.get(`https://api.github.com/users/${follower}`)
//         .then(follower => {
//         entryPoint.appendChild(githubCardsMaker(follower.data))
//         });
//       })

//     });

//   })
//   .catch(error => {

//   })

// }

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
