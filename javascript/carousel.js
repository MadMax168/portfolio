let currentIndex = 1;
let totalSlides = document.querySelectorAll('.slide').length;
let autoSlideInterval;

function showSlide(index) {
    const slides = document.querySelector('.carousel-slide');
    const dots = document.querySelectorAll('.dat');

    if (index > totalSlides) {
        currentIndex = 1;
    } else if (index < 1) {
        currentIndex = totalSlides;
    }

    // Move the carousel
    slides.style.transform = `translateX(${-(currentIndex - 1) * 33.33}%)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex - 1].classList.add('active');
}

function moveSlide(step) {
    clearInterval(autoSlideInterval);  // Pause auto slide on manual navigation
    showSlide(currentIndex += step);
    autoSlide();
}

function currentSlide(index) {
    clearInterval(autoSlideInterval);  // Pause auto slide on dot click
    showSlide(currentIndex = index);
    autoSlide();
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(currentIndex += 1);
    }, 8000);  // Change slide every 8 seconds
}

// Initialize carousel
showSlide(currentIndex);
autoSlide();