const burger = document.getElementById("hamburger")
const menu = document.getElementById("menu")

burger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});