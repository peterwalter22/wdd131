// Toggle mobile navigation menu
const menuButton = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  const isVisible = navMenu.style.display === "flex";
  navMenu.style.display = isVisible ? "none" : "flex";
});
