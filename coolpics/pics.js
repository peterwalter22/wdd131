// ============================
// Menu Functionality
// ============================
const menuButton = document.querySelector(".menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.style.display = nav.style.display === "block" ? "none" : "block";
});

// ============================
// Window Resize Handling
// ============================
window.addEventListener("resize", () => {
  if (window.innerWidth >= 600) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
});

// ============================
// Image Viewer (Modal)
// ============================
const modal = document.createElement("dialog");
modal.classList.add("viewer");

const modalImage = document.createElement("img");
const closeButton = document.createElement("button");
closeButton.textContent = "X";
closeButton.classList.add("close-viewer");

modal.appendChild(modalImage);
modal.appendChild(closeButton);
document.body.appendChild(modal);

// ============================
// Viewer Template Function
// ============================
function viewerTemplate(imageURL, altText) {
  modalImage.src = imageURL;
  modalImage.alt = altText;
  modal.showModal();
  modal.classList.add("fade-in");
}

// ============================
// Event Handling (Gallery Click)
// ============================
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    viewerTemplate(img.src, img.alt);
  });
});

// ============================
// Close Modal Events
// ============================

// 1️⃣ Close when X is clicked
closeButton.addEventListener("click", () => {
  fadeOutModal();
});

// 2️⃣ Close when clicking outside the image
modal.addEventListener("click", (event) => {
  const rect = modalImage.getBoundingClientRect();
  const clickedInsideImage =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (!clickedInsideImage) {
    fadeOutModal();
  }
});

// 3️⃣ Fade-out animation before closing
function fadeOutModal() {
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal.close();
    modal.classList.remove("fade-out");
  }, 250); // matches CSS animation duration
}
