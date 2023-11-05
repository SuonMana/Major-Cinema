function tabbar() {
  //console.log('working on tabbar')

  const tabbar = document.querySelector(".tabbar")
  const tabbtns = document.querySelectorAll(".tab-btn")
  const tabs = document.querySelectorAll(".tab")

  console.log(tabbar, tabbtns, tabs)

  tabbar.addEventListener("click", (e) => {

    const activeTab = e.target
    const id = activeTab.dataset.id

    //console.log(activeTab, id)

    for (let i = 0; i < tabbtns.length; i++) {
        let currentTabbtn = tabbtns[i]
        currentTabbtn.classList.remove("active")
    }

    for (let i = 0; i < tabs.length; i++) {
        let currentTab = tabs[i]

        currentTab.classList.remove("active-tab")
    }

    activeTab.classList.add("active")

    const displayTab = document.querySelector("#"+id)

    displayTab.classList.add("active-tab")

  })

}

export default tabbar