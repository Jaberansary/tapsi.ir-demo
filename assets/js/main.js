const toggler = document.querySelector(".nav_toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
    console.log("clicked");
    navbar.classList.toggle("nav_expanded");
});