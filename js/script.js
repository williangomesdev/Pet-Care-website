//Navbar clique
const navToggler = document.querySelector(".jsNavToggler");
const nav = document.querySelector(".jsNav");

function navToggle() {
  nav.classList.toggle("active");
}

navToggler.addEventListener("click", navToggle);
