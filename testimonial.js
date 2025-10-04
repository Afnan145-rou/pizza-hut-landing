const track = document.querySelector('.testimonial-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

function updateSlidePosition() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next Slide
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
});

// Previous Slide
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
});
