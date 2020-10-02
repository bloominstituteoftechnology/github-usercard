

import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR github info! 
  You will need to understand the structure of this user, and adding that card to the DOM.
*/


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'bigknell', 'luishrd'];

followersArray.forEach(item =>
{
  axios.get(`https://api.github.com/users/${item}`)
    .then(res =>
    {
      gitAppend.appendChild(gitHubMaker(res.data))
    })
    .catch(drama => console.log(`wrongo: ${drama}`))
})


const gitAppend = document.querySelector('.container')



axios.get('https://api.github.com/users/carolinefallonlucas')
  .then(res =>
  {
    console.log(res)
    return gitHubMaker(res.data)

  })
  .catch(drama => console.log(drama))



function gitHubMaker(object)
{

  //setting elements
  const gitCard = document.createElement('div')
  const gitImg = document.createElement('img')
  const gitCardInfo = document.createElement('div')
  const gitName = document.createElement('h3')
  const gitUserName = document.createElement('p')
  const gitLocation = document.createElement('p')
  const gitProfile = document.createElement('p')
  const gitProfileA = document.createElement('a')
  const gitFollowers = document.createElement('p')
  const gitFollowing = document.createElement('p')
  const gitBio = document.createElement('p')

  //setting class names and attributes



  gitCard.classList.add('card')
  gitCardInfo.classList.add('card-info')
  gitName.classList.add('name')
  gitName.textContent = object['login']
  gitUserName.classList.add('username')
  gitUserName.textContent = object['login']
  gitImg.src = object.avatar_url


  // gitImg.src = objectURL



  // gitImg.src = avatar_url
  gitProfileA.href = object.html_url
  gitLocation.textContent = object.location
  gitFollowers.textContent = object.followers
  gitFollowing.textContent = object.following
  gitBio.textContent = object.login
  gitProfile.textContent = `Profile: ${gitProfileA}`
  //setting hierarchy
  gitAppend.append(gitCard)
  gitCard.appendChild(gitImg)
  gitCard.appendChild(gitCardInfo)
  gitCardInfo.appendChild(gitName)
  gitCardInfo.appendChild(gitUserName)
  gitCardInfo.appendChild(gitLocation)
  gitCardInfo.appendChild(gitProfile)
  gitProfile.appendChild(gitProfileA)
  gitCardInfo.appendChild(gitFollowers)
  gitCardInfo.appendChild(gitFollowing)
  gitCardInfo.appendChild(gitBio)

  return gitCard


}







