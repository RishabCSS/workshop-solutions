// script.js
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideWrapper = document.querySelector('.slide-wrapper');
let autoSlideInterval;

// Function to update the position of the slides
function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    slideWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Function to move slides manually
function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Go to the last slide if at the beginning
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Go to the first slide if at the end
    }
    updateSlidePosition();
}

// Function to start the automatic slideshow
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveSlide(1); // Move to the next slide
    }, 3000); // 3 seconds interval
}

// Function to stop the automatic slideshow
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Initialize the slideshow
updateSlidePosition();
startAutoSlide();

// Add event listeners to stop the automatic slideshow when interacting with navigation buttons
document.querySelector('.arrow.left').addEventListener('click', () => {
    stopAutoSlide();
    moveSlide(-1);
    startAutoSlide();
});

document.querySelector('.arrow.right').addEventListener('click', () => {
    stopAutoSlide();
    moveSlide(1);
    startAutoSlide();
});




