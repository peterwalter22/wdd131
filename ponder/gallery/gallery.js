const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    // Only run if an <img> inside .gallery was clicked
    if (e.target.tagName === 'IMG') {
        // Get the clicked image source
        const smallSrc = e.target.getAttribute('src');

        // Replace "-sm" with "-full" or "-lg" (depending on your naming)
        // Example: images/book-sm.jpg → images/book.jpg
        const largeSrc = smallSrc.replace('-sm', '');

        // Set the modal image to the new large version
        modalImage.src = largeSrc;

        // Show the modal
        modal.showModal();
    }
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Close modal when pressing Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.close();
    }
});
