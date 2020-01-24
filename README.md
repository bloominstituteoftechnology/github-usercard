
### Part 1: Requesting Data from the GitHub API
* Include the script element linking the `axios` library in your HTML. If you do not remember the code you can find it here: https://github.com/axios/axios
* Follow the instructions found in the GitHubCard/index.js file to request data from the GitHub API.

### Part 2: Create the component function

* Once you are receiving data from the GitHub API, take some time to study the data and the information it is giving you. You will create the HTML template you see in the GitHubCard/index.js file and plugging in the dynamic data you are getting from the GitHub API.
* Once you complete the component, create a component based on your profile and add it to the DOM.

### Part 3: Your Friends

* After you have successfully added your own card to the DOM, we will get a list of your followers and programmatically add cards for them as well. Follow the instructions in GitHubCard/index.js. 

### Stretch Goals:

* Instead of manually creating a list of followers, do it programmatically. Create a function that requests the followers data from the API after it has received your data and create a card for each of your followers. Hint: you can chain promises.

* Look into adding more info as an expanding card. You will need to create some new CSS and a button that expands and contracts the card. 

* Look into adding your GitHub contribution graph. There are a number of different ways of doing this, this Stack Overflow discussion will get you started: https://stackoverflow.com/questions/34516592/embed-github-contributions-graph-in-website

Note: Just a reminder the stretch goals are just extra practice using the tools we have learned. These are not required. Only parts 1-3 are required portions of the project. If you do not get to the stretch goals, don't worry.
