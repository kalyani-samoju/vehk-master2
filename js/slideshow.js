// Get the slideshow container
var slideshowContainer = document.querySelector('.slideshow');

// Get the images and navigation buttons
var slideshowImages = slideshowContainer.querySelectorAll('img');
var prevButton = slideshowContainer.querySelector('.prev');
var nextButton = slideshowContainer.querySelector('.next');

// Set the starting slide index and caption
var currentSlideIndex = 0;
updateSlide();

// Add click event listeners to the navigation buttons
prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

// Set interval to change slide every 2 seconds
var intervalId = setInterval(showNextSlide, 2000);

// Function to show the previous slide
function showPrevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slideshowImages.length - 1;
  }
  updateSlide();
  resetInterval();
}

// Function to show the next slide
function showNextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= slideshowImages.length) {
    currentSlideIndex = 0;
  }
  updateSlide();
  resetInterval();
}

// Function to update the slide and caption
function updateSlide() {
  // Hide all the images
  for (var i = 0; i < slideshowImages.length; i++) {
    slideshowImages[i].style.display = 'none';
  }
  // Show the current slide
  slideshowImages[currentSlideIndex].style.display = 'block';
  // Update the caption
  updateCaption();
}

// Function to update the caption
function updateCaption() {
  var caption = slideshowContainer.querySelector('.caption');
  if (caption) {
    caption.innerHTML = slideshowImages[currentSlideIndex].alt;
  }
}

// Function to reset the interval
function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(showNextSlide, 2000);
}

$('.hero-area-l11').gradient({
  colors: ['#3c275f', '#191b41', '#070c2d']
});