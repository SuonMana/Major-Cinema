// import functions from another file

import MOVIES from "../db/data.js"
import displayDetailMovie from "../components/displayDetailMovie.js"
import tabbar from "../components/tabbar.js"


window.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(window.location.search)

    const id = parseInt(params.get('id'))

    //console.log("the id of movie is", id)

    const foundMovie = MOVIES.find((eachMovie) => eachMovie.id ==id)

    //console.log(foundMovie)

    displayDetailMovie(foundMovie)

    tabbar()
  
})