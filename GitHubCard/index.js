import axios from "axios";

function cardMaker (info) {
  const div1 = document.createElement('div')
  const imgs = document.createElement('img')
  const div2 = document.createElement('div')
  const h3 = document.createElement('h3')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const a = document.createElement('a')
  const p4 = document.createElement('p')
  const p5 = document.createElement('p')
  const p6 = document.createElement('p')

  imgs.src = info.avatar_url
  h3.textContent = info.name
  p1.textContent = info.login
  p2.textContent = `Location: ${info.location}`
  a.textContent = info.html_url
  a.href = info.html_url
  p3.textContent = `Profile:`
  p4.textContent = `Followers: ${info.followers}`
  p5.textContent = `Following: ${info.following}`
  p6.textContent = `Bio ${info.bio}`

  div1.classList.add('card')
  div2.classList.add('card-info')
  h3.classList.add('name')
  p1.classList.add('username')

  div1.appendChild(imgs)
  div1.appendChild(div2)
  div2.appendChild(h3)
  div2.appendChild(p1)
  div2.appendChild(p2)
  div2.appendChild(p3)
  p3.appendChild(a)
  div2.appendChild(p4)
  div2.appendChild(p5)
  div2.appendChild(p6)

  return div1
}
const cardThing = document.querySelector('.cards')
  axios.get('https://api.github.com/users/lgallo95')
  
  .then(resp => {
    cardThing.appendChild(cardMaker(resp.data))
  })
  .catch(err => {
    console.error(err)
  })

  const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

  followersArray.forEach(elem => {
    axios.get(`https://api.github.com/users/${elem}`)
  
    .then(resp => {
      console.log(resp)
      let info = resp.data
      const cardsElement = document.querySelector('.cards');
      cardsElement.appendChild(cardMaker(info))
    })
    .catch(err => {
    console.error(err);
    })
  })