
const cardDiv = document.querySelector('div.cards');
const card = axios.get(' https://api.github.com/users/vanessadixon1')
.then(res => {
  const response = res.data;
  cardDiv.append(githubCard(response))
})
.catch(e => {
  console.log(`error is:`, e)
})

const followersArray = ["Wais-A","chelsabeth","DannyManzietti", "mary-clayton","afialydia"];

function githubCard(obj) {
  const div = document.createElement('div');
  div.classList.add('card');

  const img = document.createElement('img');
  img.src= obj.avatar_url;

  const div2 = document.createElement('div');
  div2.classList.add('card-info');

  const h3 = document.createElement('h3');
  h3.classList.add('name');
  h3.textContent = obj.name;

  const p1 = document.createElement('p');
  p1.classList.add('username');
  p1.textContent = obj.login;

  const p2 = document.createElement('p');
  p2.textContent = `Location: ${obj.location}`;

  const p3 = document.createElement('p');
  p3.textContent = `Profile: `
  const a = document.createElement('a');
  a.href=obj.html_url;
  a.textContent = obj.html_url;
  p3.append(a);

  const p4 = document.createElement('p');
  p4.textContent = `Followers: ${obj.followers}`;

  const p5 = document.createElement('p');
  p5.textContent = `Following: ${obj.following}`;

  const p6 = document.createElement('p');
  p6.textContent = `Bio: ${obj.bio}`;

  div.append(img,div2);
  div2.append(h3,p1,p2,p3,p4,p5,p6);

  return div;
}


followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then(response => {
    cardDiv.append(githubCard(response.data))
  })
})


