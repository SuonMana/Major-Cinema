let index = 0

function carousel() {
  
   // console.log("working on carousel")
    const slides = document.querySelectorAll(".slide")
    const dots = document.querySelectorAll(".dot")

    for (let i=0; i< slides.length; i++) {
        let currentSlide = slides[i]

        currentSlide.style.display = "none"
    }

    for (let i=0; i< dots.length; i++) {
        let currentDot = dots[i]

        currentDot.classList.remove("dot-active")
    }

    index = index + 1
    if (index > slides.length) {
        index = 1
    }

    let nextSlide = slides[index -1]
    let nextDot = dots[index -1]

    

    nextSlide.style.display = "block"
    nextDot.classList.add('dot-active')

    setTimeout(carousel, 1000)


}

export default carousel