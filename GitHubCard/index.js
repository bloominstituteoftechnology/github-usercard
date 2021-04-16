import axios from 'axios';

const cardDiv = document.querySelector('div.cards')
axios.get('https://api.github.com/users/blackcatwizard')
.then(res => {
  const response = res.data
  cardDiv.append(cardMaker(response))
})
.catch(err => {
  console.log('ERROR!', err)
})


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']


function cardMaker(object){
const gitDivOne = document.createElement('div')
const gitImage = document.createElement('img')
const gitDivTwo = document.createElement('div')
const gitHead = document.createElement('h3')
const gitPOne = document.createElement('p')
const gitPTwo = document.createElement('p')
const gitPThree = document.createElement('p')
const gitAnchor = document.createElement('a')
const gitPFour = document.createElement('p')
const gitPFive = document.createElement('p')
const gitPSix = document.createElement('p')

gitDivOne.classList.add('card')
gitDivTwo.classList.add('card-info')
gitHead.classList.add('name')
gitPOne.classList.add('username')

gitImage.src = object.avatar_url
gitAnchor.href = object.html_url
gitAnchor.text = object.html_url

gitHead.textContent = object.name
gitPOne.textContent = object.login
gitPTwo.textContent = "Location: " +object.location
gitPThree.textContent = "Profile: " 
gitPFour.textContent = "Followers: " +object.followers
gitPFive.textContent = "Following: " +object.following
gitPSix.textContent = "Bio: " +object.bio

gitDivOne.appendChild(gitImage)
gitDivOne.appendChild(gitDivTwo)
gitDivTwo.appendChild(gitHead)
gitDivTwo.appendChild(gitPOne)
gitDivTwo.appendChild(gitPTwo)
gitDivTwo.appendChild(gitPThree)
gitPThree.appendChild(gitAnchor)
gitDivTwo.appendChild(gitPFour)
gitDivTwo.appendChild(gitPFive)
gitDivTwo.appendChild(gitPSix)

return gitDivOne
}

followersArray.forEach(item => { 
axios.get(`https://api.github.com/users/${item}`)
.then(res => {
  console.log(res.data)
  cardDiv.appendChild(cardMaker(res.data))
})

})
.catch(err => console.log('ERROR TWO', err))

