// Show/Hide Nav Menu link in small devices
let navMenuIcon = document.querySelector(".nav__menu-icon");
let navMenuLinks = document.querySelector(".nav__menu-links");
let navMenuLinksItems = document.querySelectorAll(".nav__menu-links li")

// Show/Hide menu when clicking the menu icon
navMenuIcon.addEventListener("click", () => {
  navMenuLinks.classList.toggle("shown");
});

// In item click, hide the menu and restore the default menu icon
navMenuLinksItems.forEach(item => {
  item.addEventListener("click", () => {
    navMenuLinks.classList.toggle("shown");
    navMenuIcon.checked = false;
  })
})

