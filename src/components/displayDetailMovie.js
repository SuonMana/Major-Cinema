function displayDetailMovie(movie) {

  console.log("working on display detail movie")

  const main = document.querySelector("main")
  
  main.innerHTML = `
  <section class="detail-container" style="background-image: url(${movie.cover});">
    <div class="overlay">
      <div class="detail-header">
        <h1>${movie.title}</h1>
        <div class="tabbar">
          <button class="tab-btn active" data-id="detail">Detail</button>
          <button class="tab-btn" data-id="video">Video</button>
          <button class="tab-btn" data-id="reviews">Reviews</button>
        </div>
      </div>
      <div class="detail-body">
        <section class="tab detail-tab active-tab" id="detail">
          <p>
            <ion-icon name="information-circle"></ion-icon>
            <span class="text">OVERVIEW: ${movie.overview}</span>
          </p>
          <p>
            <ion-icon name="pricetags"></ion-icon>
            <span class="text">CATEGORY: ${movie.category.map((item) => item).join(" - ")}</span>
          </p>
          <p>
            <ion-icon name="alarm"></ion-icon>
            <span class="text">DURATION: ${movie.duration}</span>
          </p>
          <p>
            <ion-icon name="calendar-number"></ion-icon>
            <span class="text">RELEASED DATE: ${movie.releasedDate}</span>
          </p>
        </section>

        <section class="tab video-tab" id="video">
          <iframe src="${movie.trailerId}" allowfullscreen></iframe>
        </section>

        <section class="tab review-tab" id="reviews">
            ${generateReviews(movie.cast)}
        </section>

      </div>
    </div>
  </section>
  `
}

function generateReviews(casts) {
    //console.log(casts)

    let reviewsContent = ""
    for (let i = 0; i < casts.length; i++) {
        let currentCast = casts[i]
        reviewsContent += `
        <div class="review">
            <img src="./images/user.png" alt="">
            <p>Some comment by - ${currentCast}</p>
        </div>
        `
    }
     return reviewsContent
}

export default displayDetailMovie