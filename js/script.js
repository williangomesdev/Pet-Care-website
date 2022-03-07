//Navbar clique
const navToggler = document.querySelector(".jsNavToggler");
const navList = document.querySelector(".jsNav");
const openButtonMenu = document.querySelector(".open");
const closeButtonMenu = document.querySelector(".close");

function navToggle() {
  navList.classList.toggle("active");
  navToggler.classList.toggle("active");
  openButtonMenu.classList.toggle("active");
  closeButtonMenu.classList.toggle("active");
}

//Esconder a nav bar caso seja clicado fora do menu
function compareClickInOrOut() {
  document.addEventListener("click", (event) => {
    const isClickInsideNav = navList.contains(event.target);
    const isClickInsideNavToggler = navToggler.contains(event.target);

    if (
      !(isClickInsideNav || isClickInsideNavToggler) &&
      navList.classList.contains("active")
    ) {
      navToggle();
    }
  });
}

navToggler.addEventListener("click", navToggle);
navToggler.addEventListener("click", compareClickInOrOut);




