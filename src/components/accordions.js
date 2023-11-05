function accordion() {

    //console.log("working on accordion")
    const accordionTitle = document.querySelectorAll (".accordion-title")

    //console.log(accordionTitle)
    for (let i = 0; i < accordionTitle.length; i++) {
        let currentTitle = accordionTitle[i]

        currentTitle.addEventListener("click", () => {

            let currentBody = currentTitle.nextElementSibling

            //console.log(currentBody)

            currentBody.classList.toggle("show-accordion-body")
        })
    }
}

export default accordion