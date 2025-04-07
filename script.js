// Toggle Contact Form
function toggleContactForm() {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
        contactForm.style.display = contactForm.style.display === 'none' || contactForm.style.display === '' ? 'block' : 'none';
    }
}

// Add event listener for contact form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function() {
        setTimeout(() => {
            contactForm.reset();
            toggleContactForm();
        }, 1000);
    });
}

// Add click event for gallery images
const galleryImages = document.querySelectorAll('.gallery img');
if (galleryImages) {
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const caption = this.nextElementSibling;
            caption.classList.toggle('active');
        });
    });
}

// Add click event for image-row images
const imageRowImages = document.querySelectorAll('.image-row img');
if (imageRowImages) {
    imageRowImages.forEach(img => {
        img.addEventListener('click', function() {
            const caption = this.nextElementSibling;
            caption.classList.toggle('active');
        });
    });
}

// Add click event for contact icon
const contactIcon = document.querySelector('.contact-icon');
if (contactIcon) {
    contactIcon.addEventListener('click', toggleContactForm);
}

// Highlight the active link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    }
});
