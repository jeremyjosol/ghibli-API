import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import StudioGhibli from './ghibli.js';

function searchGhibli(id) {
  StudioGhibli.searchGhibli(id)
    .then(function(response) {
      if (response) {
        outputFilm(response);
      } else {
        outputError(response);
      }
    });
}

// UI Logic

function outputFilm(response) {
  document.querySelector('#showResponse').innerHTML = 
  `<h2 class="name">${response.title} <br /> ${response.original_title}</h2>
  <h3>Directed by: ${response.director}</h3>
  <h4>Released: ${response.release_date}</h4> <br />
  <img class="movie-banner" src=${response.movie_banner} width="250" height="250"> <br />
  <br />
  ${response.description}`;
}

function outputError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the film data for
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const id = document.querySelector('#film').value;
  document.querySelector('#film').value = null;
  searchGhibli(id);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});