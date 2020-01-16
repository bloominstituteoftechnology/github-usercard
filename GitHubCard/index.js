axios.get('https://api.github.com/users/elijahdaniel').then(data => {
  const myInfo = data.data
  const cards = document.querySelector('.cards')
  const cardInfo = myCard(myInfo)
  cards.appendChild(cardInfo)
})

const cards = document.querySelector('.cards')

const myCard = info => {
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileAnchor = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  img.classList.add('img')
  card.classList.add('card')
  name.classList.add('name')
  userName.classList.add('username')
  bio.classList.add('p')

  card.append(img)
  card.append(cardInfo)
  cardInfo.append(name)
  cardInfo.append(userName)
  cardInfo.append(location)
  cardInfo.append(profile)
  profile.append(profileAnchor)
  cardInfo.append(followers)
  cardInfo.append(following)
  cardInfo.append(bio)

  const anchor = info.html_url

  img.src = info.avatar_url
  location.textContent = info.location
  name.textContent = info.name
  userName.textContent = info.login
  profileAnchor.innerHTML = anchor.link(info.html_url)
  followers.textContent = `Followers: ${info.followers}`
  following.textContent = `Following: ${info.following}`
  bio.textContent = info.bio

  return card
}

const followersArray = [
  'fireblastdaniel',
  'msinnema33',
  'rofstudios',
  'shawnpatel98',
  'kejdacelaj',
  'guytonoriji'
]

followersArray.forEach(user => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(data => {
      const myInfo = data.data
      const cards = document.querySelector('.cards')
      const cardInfo = myCard(myInfo)
      cards.appendChild(cardInfo)
    })
    .catch(err => err)
})
