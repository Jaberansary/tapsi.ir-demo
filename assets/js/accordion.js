const accordionHeaders = document.querySelectorAll(".accordion_header");
const accordion = document.querySelector(".accordion");

accordionHeaders.forEach((item) => {
    item.addEventListener("click", (e) => {
        console.log(e.target.parentElement);
        e.target.parentElement.classList.toggle("accordion_expanded");
    });
});