const openMenu = document.getElementById("openMenu");
openMenu.addEventListener("click", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("hidden"); // toggle the class hidden or not
});