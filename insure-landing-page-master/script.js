const mobileNav = document.querySelector(".mobile-nav-btn");

const navHeader = document.querySelector(".navbar-info");

const toggleNavbar = () => {
    navHeader.classList.toggle("active")
};

mobileNav.addEventListener("click" , () =>toggleNavbar());