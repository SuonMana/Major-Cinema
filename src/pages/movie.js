// import functions from another file
    import displayMovies from "../components/displayMovies.js"
    import carousel from "../components/carousel.js"
    import sidenav from "../components/sidenav.js"

window.addEventListener('DOMContentLoaded', () => {

    sidenav()

    carousel()

    displayMovies()
})