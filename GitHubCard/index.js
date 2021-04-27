import axios from 'axios';

const followersArray = ['joeybertschler', 'john', 'bob', 'bobby', 'bean', 'timmothy'];

//delay console.log of array, not useful here but wanted to try setTimeout 
setTimeout( ()=>{
  console.log(followersArray)
}, 0.07
);

const URL = 'https://api.github.com/users/'

const makeCards = followersArray.forEach( (id) => {
  axios.get(URL + id)
       .then( (r) => {
        console.log(r)
        const mainBoardDiv = document.querySelector('.cards')
        mainBoardDiv.appendChild(cardCreator(r.data))
       })
})

//-----------just one user version---------------------------------
// axios.get(URL + 'JoeyBertschler')
//       .then(r => {
//         console.log('success');
//         console.log('data retreived', r)
//         const foundationDiv = document.querySelector('.cards');
//         foundationDiv.appendChild(cardCreator(r.data));})
//       .catch( (err) => console.log('error or waiting'));


const cardCreator = (r) => {
    console.log('card creator initalized')
  //log passed in data
  // console.log(r);

    //main div
    const outestDiv = document.createElement('div');
    outestDiv.classList.add('card');

        //img
        const imgOfUser = document.createElement('img');
          imgOfUser.src = r.avatar_url; 
          outestDiv.appendChild(imgOfUser);

        //inner div
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('card-info')
          outestDiv.appendChild(innerDiv);

            //title i.e. user's actual name
            const h3UserName = document.createElement('h3');
              // TRY after h3UserName.textContent(data.name)
              h3UserName.classList.add('name')
              h3UserName.textContent = r.name 
              innerDiv.appendChild(h3UserName)

            //username i.e. login
            const pUserName = document.createElement('p');
              pUserName.classList.add('username')
              pUserName.textContent = r.login
              innerDiv.appendChild(pUserName);

            //location
            const pUserLocation = document.createElement('p');
              pUserLocation.textContent = "Location: " + r.location;
              innerDiv.appendChild(pUserLocation);

            //profile paragraph for around url
            const pProfile = document.createElement('p');
            pProfile.textContent = "Profile ";
            innerDiv.appendChild(pProfile);

            //profile page URL
                const pProfileLink = document.createElement('a');
                pProfileLink.textContent = "Profile: " + r.html_url
                pProfile.appendChild(pProfileLink);

            //users follower count
            const pFollowers = document.createElement('p');
              pFollowers.textContent =`Followers: ` + r.followers 
              //TRY add `` followers thingy
              innerDiv.appendChild(pFollowers);

            //following count
            const pFollowing = document.createElement('p')
              pFollowing.textContent =`Following: ` + r.following
              innerDiv.appendChild(pFollowing); 

            //their bio
            const userBio = document.createElement('p');
              pFollowing.textContent = r.bio
              innerDiv.appendChild(userBio);

            console.log('card creator finished running')
            return outestDiv;
};