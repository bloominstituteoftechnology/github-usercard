const divCard = document.querySelector('.cards')

const followersArray = ['danimalcrackrz', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']

const getData = (arr) => {
  arr.forEach((user) => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(res => {
        divCard.appendChild(cardMaker(res))
    })
    .catch(err => console.error(err))
  })
}

getData(followersArray)

function cardMaker(obj)  {

  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const address = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  img.src = obj.data.avatar_url
  name.textContent = obj.data.name
  username.textContent = obj.data.login
  location.textContent = 'Location: ' + obj.data.location
  profile.textContent =  'Profile: ' 
  address.textContent = obj.data.html_url
  address.href = obj.data.url
  followers.textContent = 'Followers: ' + obj.data.followers
  following.textContent = 'Following: ' + obj.data.following
  bio.textContent = 'Bio: ' + obj.data.bio
  
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')

  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(address)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  
  return card
}