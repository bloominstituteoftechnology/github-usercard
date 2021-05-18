
import axios from 'axios';
let users = "AmlakBarkon"
let url = `https://api.github.com/users/${users}`;
axios.get(url)
.then((res)=>{
//  console.log(res)
//  console.log(res.data.followers_url)
const person = gitHubCardMaker(res);
document.querySelector('.cards').appendChild(person)
axios.get(res.data.followers_url)
.then( friends=>{
 console.log("this is friends of mine ", friends.data)
   friends.data.forEach(item=>{
       document.querySelector(".container").appendChild(followersCard(item))
  })
  
})

.catch(err=>{
  console.log("something went wrong ", err)
})
})


.catch(err =>{
  console.log("There is something wrong",err)
})
function followersCard(user){

  const container = document.createElement('div') // Parent element of card
    const userImg = document.createElement('img')
    const cardContent = document.createElement('div') 
    const userNameHeading = document.createElement('h3')
    const userName = document.createElement('p')
    userImg.setAttribute("src", user.avatar_url) 
    userNameHeading.textContent = user.url
    userName.textContent = user.login
  
  // Appending elements. With Indentation.
    container.appendChild(userImg)
    container.appendChild(cardContent)
    cardContent.appendChild(userNameHeading)
    cardContent.appendChild(userName)
   
    container.classList.add('card')
    cardContent.classList.add('card-info')
    userNameHeading.classList.add('name')
   userName.classList.add('username')
 console.log("container", container, user)
 return container;
}
function gitHubCardMaker(user) {

  // Creating elements. With indentation.
    const container = document.createElement('div') // Parent element of card
    const userImg = document.createElement('img')
    const cardContent = document.createElement('div') 
    const userNameHeading = document.createElement('h3')
    const userName = document.createElement('p')
    const userBio = document.createElement("p")
   
    // Creating classes.
    container.classList.add('card')
    cardContent.classList.add('card-info')
    userNameHeading.classList.add('name')
    userName.classList.add('username')
    userBio.classList.add("username")
    // Adding values.
    userImg.setAttribute("src", user.data.avatar_url) ; 
    userNameHeading.textContent = user.data.name
    userName.textContent = user.data.login
    userBio.textContent = user.data.bio
    // Appending elements. With Indentation.
    container.appendChild(userImg)
    container.appendChild(cardContent)
    cardContent.appendChild(userNameHeading)
    cardContent.appendChild(userName)
    cardContent.appendChild(userBio)
   
  return container; // Return parent element.
}