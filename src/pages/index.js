// import functions from another file
import accordion from '../components/accordions.js'
import carousel from '../components/carousel.js'
import sidenav from '../components/sidenav.js'
import statistics from '../components/statistics.js'


window.addEventListener('DOMContentLoaded', () => {

    sidenav()

    accordion()

    carousel()

    statistics()
})