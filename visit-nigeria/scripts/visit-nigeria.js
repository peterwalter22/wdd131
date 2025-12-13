/* -----------------------------------------------------------
   SLIDES FOR HERO SLIDESHOW (HOME PAGE)
----------------------------------------------------------- */
const slides = [
  "images/lagos-skyline.png",
  "images/Urban-abuja.png",
  "images/obudu-mountain.png"
];

/* -----------------------------------------------------------
   FEATURED DESTINATIONS (HOME PAGE)
----------------------------------------------------------- */
export const featuredDestinations = [
  {
    name: "Lagos",
    image: "images/lagos-skyline.png",
    description: "Nigeria's vibrant coastal megacity full of culture and nightlife."
  },
  {
    name: "Abuja",
    image: "images/Urban-abuja.png",
    description: "The capital city known for its beauty, security, and modern design."
  },
  {
    name: "Obudu Mountain Resort",
    image: "images/obudu-mountain.png",
    description: "A peaceful highland escape with clouds, mountains, and cool weather."
  }
];

/* -----------------------------------------------------------
   DESTINATIONS PAGE DATA
----------------------------------------------------------- */
export const destinations = [
  {
    name: "Lagos",
    category: "city",
    image: "images/lagos-skyline.png",
    description: "Nigeria’s most vibrant coastal megacity with beaches, nightlife, and culture."
  },
  {
    name: "Abuja",
    category: "city",
    image: "images/Urban-abuja.png",
    description: "The peaceful capital city with famous monuments like Aso Rock."
  },
  {
    name: "Obudu Mountain Resort",
    category: "nature",
    image: "images/obudu-mountain.png",
    description: "Cool climate, cable cars, and scenic highlands."
  },
  {
    name: "Makoko Market",
    category: "culture",
    image: "images/Makoko-market.png",
    description: "A floating community and one of Lagos’ most unique cultural experiences."
  },
  {
    name: "Hausa Traditions",
    category: "culture",
    image: "images/Hausa-tradition.png",
    description: "Experience rich festivals, traditional clothing, music, and cultural heritage."
  }
];

/* -----------------------------------------------------------
   HAMBURGER MENU (ALL PAGES)
----------------------------------------------------------- */
const hamburgerBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });
}

/* -----------------------------------------------------------
   SLIDESHOW FUNCTION (HOME PAGE ONLY)
----------------------------------------------------------- */
const heroImg = document.querySelector("#hero-image");

if (heroImg) {
  let slideIndex = 0;

  function changeSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    heroImg.src = slides[slideIndex];
  }

  setInterval(changeSlide, 4000);
}

/* -----------------------------------------------------------
   FEATURED DESTINATIONS (HOME PAGE ONLY)
----------------------------------------------------------- */
const featuredContainer = document.querySelector("#featured-container");

if (featuredContainer) {
  function renderFeatured() {
    featuredContainer.innerHTML = "";
    featuredDestinations.forEach(dest => {
      featuredContainer.innerHTML += `
        <div class="card">
          <img src="${dest.image}" alt="${dest.name}" loading="lazy">
          <h3>${dest.name}</h3>
          <p>${dest.description}</p>
        </div>
      `;
    });
  }

  renderFeatured();
}

/* -----------------------------------------------------------
   DESTINATION FILTERING (DESTINATIONS PAGE ONLY)
----------------------------------------------------------- */
const destinationContainer = document.querySelector("#destinations-container");
const filterButtons = document.querySelectorAll(".filter-btn");

if (destinationContainer) {
  function loadDestinations(list) {
    destinationContainer.innerHTML = "";
    list.forEach(dest => {
      destinationContainer.innerHTML += `
        <div class="card">
          <img src="${dest.image}" alt="${dest.name}" loading="lazy">
          <h3>${dest.name}</h3>
          <p>${dest.description}</p>
        </div>
      `;
    });
  }

  // Initial load
  loadDestinations(destinations);

  // Filtering logic
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;

      if (category === "all") {
        loadDestinations(destinations);
      } else {
        const filtered = destinations.filter(item => item.category === category);
        loadDestinations(filtered);
      }
    });
  });
}

/* -----------------------------------------------------------
   GALLERY MODAL (GALLERY PAGE ONLY)
----------------------------------------------------------- */

const galleryImages = document.querySelectorAll(".gallery-grid img");
const modal = document.querySelector("#modal");
const modalImg = document.querySelector("#modalImg");
const modalClose = document.querySelector("#modalClose");

if (galleryImages.length > 0) {
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.remove("hidden");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
}

/* -----------------------------------------------------------
   CONTACT FORM VALIDATION (CONTACT PAGE ONLY)
----------------------------------------------------------- */

const contactForm = document.querySelector("#contactForm");
const errorText = document.querySelector("#errorText");
const successText = document.querySelector("#successText");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page refresh

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "" || !email.includes("@")) {
      errorText.classList.remove("hidden");
      successText.classList.add("hidden");
      return;
    }

    // If valid
    errorText.classList.add("hidden");
    successText.classList.remove("hidden");

    // Clear the form
    contactForm.reset();
  });
}
