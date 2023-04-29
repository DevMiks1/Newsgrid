const burger = document.querySelector("#icon");
const triggerIcon = document.querySelector("#triggerIcon");
const navLinks = document.querySelector("#navLinks");



// Trigger for hamburger menu
triggerIcon.addEventListener("click", (e) => {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-close");

    navLinks.classList.add("show");
    navLinks.classList.remove("hide");
  } else {
    icon.classList.remove("fa-close");
    icon.classList.add("fa-bars");

    navLinks.classList.add("hide");
    navLinks.classList.remove("show");
  }
});



