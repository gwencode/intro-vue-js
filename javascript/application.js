console.log("hello from application.js")

import Mustache from "mustachejs";

const template = document.querySelector("#movieCardTemplate").innerHTML
const results = document.querySelector("#results")

fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    const movieData = {"movies": data.Search}
    const output = Mustache.render(template, movieData);
    results.innerHTML = output;
  })

// fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   .then(response => response.json())
//   .then((data) => {
//     const results = document.querySelector('#results');
//     const template = document.querySelector("#movieCardTemplate").innerHTML;
//     data.Search.forEach((movie) => {
//       const output = Mustache.render(template, movie);
//       results.insertAdjacentHTML("beforeend", output)
//     })
//   })

// fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   .then(response => response.json())
//   .then((data) => {
//     const results = document.querySelector('#results');
//     const template = document.querySelector("#movieCardTemplate");
//     data.Search.forEach((movie) => {
//       const clone = template.content.cloneNode(true);
//       clone.querySelector("img").src = movie.Poster;
//       clone.querySelector("h6").textContent = movie.Title;
//       clone.querySelector("p").textContent = movie.Year;
//       clone.querySelector("a").href = `https://www.imdb.com/title/${movie.imdbID}`;
//       results.appendChild(clone);
//     })
//   })
