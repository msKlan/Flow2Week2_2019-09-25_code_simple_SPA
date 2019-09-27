import 'bootstrap/dist/css/bootstrap.css';
import jokes from "./jokes";

// const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
// document.getElementById("jokes").innerHTML = allJokes.join("");
// function getJoke() {
//   document.getElementById("myJoke").innerHTML = jokes.getJokeById(document.getElementById("jokeId").value);
// }
// window.getJoke = getJoke;

// function addJoke() {
//   jokes.addJoke(document.getElementById("joke").value);
//   document.getElementById("jokes").innerHTML = jokes.getJokes().map(joke => "<li>"+joke+"</li>").join("");
// }
// window.addJoke = addJoke;

  document.getElementById("myButt").addEventListener("click", GetRemoteJoke);

    function GetRemoteJoke() {
       fetch('https://studypoints.info/jokes/api/jokes/period/hour')
       .then
       ((response) => {return response.json()})
       .then
       (((data) => document.getElementById("myDiv").innerHTML = data.joke));
       ;
   }

  /* function myGetRemoteJoke() {
    alert("1");
    GetRemoteJoke().then(data => document.getElementById("myDiv").innerHTML = JSON.stringify(data));
  } */