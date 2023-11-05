
function statistics() {

   // console.log("working on  statistics")
   const stats = document.querySelectorAll(".stat")
   // console.log(stats)

   for (let i = 0; i < stats.length; i++) {
    let currentStat = stats[i]

    let value = currentStat.dataset.stat

    let counter = 0

    let increment = value / 100

    //console.log(value, increment)

    setInterval(() => {
        counter = counter + increment

        if (counter > value) {
            return
        }

        currentStat.textContent = `${counter}`
    }, 10)
   }
}

export default statistics