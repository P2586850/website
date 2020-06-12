"use strict";



const API_URL = "https://starwars.egghead.training/";



showData.innerText = "Loading… This Info Comes From The Dagobah System";
/*prints out loading*/



fetch(API_URL + "films")
/* array called films */

  .then(response => response.json())

  .then(films => {

    console.log(films);

    getMovieInfo(films);

  })



function getMovieInfo(films) {

  films

    .sort((a, b) => a.episode_id - b.episode_id)

    .map(film => `${film.episode_id}. ${film.title}`);

  showData.innerText = "";



  films.forEach( item => {

    const content = 

      `<dt>Episode ${item.episode_id}. ${item.title}

       <small>Directed By: ${item.director}</small></dt>

       <dd>${item.opening_crawl}</dd>`;

    showData.insertAdjacentHTML("beforeend", content);

  });

}



