'use-strict'

/* GERER LA NAVBAR */

const navBTN = document.querySelector('[data-menu-toggle-btn]')
const navbar = document.querySelector('.navbar')

navBTN.addEventListener('click', () => {
    navbar.classList.toggle('active')
    console.log("Takm")
})