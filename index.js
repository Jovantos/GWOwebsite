// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".navigation-bar ul");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
