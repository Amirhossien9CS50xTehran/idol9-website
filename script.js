const images = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentImageIndex;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
        currentImageIndex = index;
    });
});

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    lightboxImg.src = images[currentImageIndex].src;
}

function toggleContactForm() {
    const contactForm = document.getElementById('contact');
    contactForm.style.display = contactForm.style.display === 'none' || contactForm.style.display === '' ? 'block' : 'none';
}