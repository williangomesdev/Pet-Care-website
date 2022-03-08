const preloaderPage = document.querySelector(".jsPreloader");
const bodySelector = document.querySelector("body");
const headerSelector = document.querySelector(".header");
const lightAndDarkModeButtonToggle = document.querySelector(".jsSwitchBtn");
const navToggler = document.querySelector(".jsNavToggler");
const navList = document.querySelector(".jsNav");
const openButtonMenu = document.querySelector(".open");
const closeButtonMenu = document.querySelector(".close");

//Navbar clique
function navToggle() {
  navList.classList.toggle("active");
  navToggler.classList.toggle("active");
  openButtonMenu.classList.toggle("active");
  closeButtonMenu.classList.toggle("active");
}

navToggler.addEventListener("click", navToggle);

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

navToggler.addEventListener("click", compareClickInOrOut);

//Dark-Mode
function darkModeToggle() {
  bodySelector.classList.toggle("dark");
}

lightAndDarkModeButtonToggle.addEventListener("click", darkModeToggle);

//Scroll efeito no header
window.onscroll = () => {
  if (window.scrollY > 0) {
    headerSelector.classList.add("active");
  } else {
    headerSelector.classList.remove("active");
  }
};

//Preloader aparecer e desaparecer
window.addEventListener("load", () => {
  preloaderPage.classList.add("fadeOut");
  setTimeout(() => {
    preloaderPage.style.display = "none";
  }, 600);
});
