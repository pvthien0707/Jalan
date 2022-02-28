document.addEventListener("DOMContentLoaded", function() {
    const menuOpen = document.querySelector(".header-top__toggle");
    const menuClose = document.querySelector(".header-top__menu-close");
    const menu = document.querySelector(".header-top__menu");
    if(!menuOpen || !menuClose || !menu) return;

    menuOpen.addEventListener("click", function() {
        menu.classList.add("is-active");
    });

    menuClose.addEventListener("click", function() {
        menu.classList.remove("is-active");
    });
})