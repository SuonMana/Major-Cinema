
function sidenav() {


  //console.log('working on sidenav')

  const menuBtn = document.querySelector('#menuBtn')
  const sidenav = document.querySelector('.sidenav')


  console.log(menuBtn, sidenav)

  menuBtn.addEventListener("click", () => {
    sidenav.classList.toggle('showSidenav')
  })
}


export default sidenav