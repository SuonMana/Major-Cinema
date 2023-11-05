import MOVIES from '../db/data.js'

function displayMovies() {
    //console.log("working on display movie")
    //console.log(MOVIES)

    const totalMovies = document.querySelector("#totalMovies")
    totalMovies.textContent = MOVIES.length

    const moviesWrapper = document.querySelector(".movies-wrapper")

    moviesWrapper.innerHTML = ``

    for (let i=0; i < MOVIES.length; i++) {
        let currentMovie = MOVIES[i]

        moviesWrapper.innerHTML += `
      <div class="movie">
        <div class="movie-thumbnail">
          <img src="${currentMovie.cover}" alt="">
        </div>
        <div class="movie-detail">
          <h4>${currentMovie.title}</h4>
          <div class="movie-info">
            <p>
              <ion-icon name="calendar-number"></ion-icon>
              ${currentMovie.releasedDate}
            </p>
            <p>
              <ion-icon name="alarm"></ion-icon>
              ${currentMovie.duration}
            </p>
            <p>
              <ion-icon name="pricetag"></ion-icon>
              ${currentMovie.category}
            </p>
          </div>
  
          <div class="btn-group">
            <a role="button" class="btn btn-main" id="showDetailBtn" href="detail.html?id=${currentMovie.id}">SHOW DETAIL</a>
          </div>
  
        </div>
      </div> 

        `
    }

}

export default displayMovies